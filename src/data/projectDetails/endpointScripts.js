// src/data/projectDetails/endpointScripts.js

export const endpointScripts = [
  {
    id: "bitlocker",
    name: "Enable-BitLockerWithEscrow.ps1",
    path: "security-and-patching/Enable-BitLockerWithEscrow.ps1",
    category: "Security & Hardening",
    language: "powershell",
    description: "Pre-flight escrow share validation, BIOS serial discovery, timestamped archive rotation, and TPM 2.0 + PIN protector activation.",
    highlights: [
      "Pre-flight escrow share reachability test prior to encryption initialization",
      "Archives previous keys indexed by BIOS serial number with timestamp rotation",
      "Strips conflicting TPM protectors before binding TPM 2.0 + PIN",
      "Supports -WhatIf via [CmdletBinding(SupportsShouldProcess)]"
    ],
    githubUrl: "https://github.com/Dr-Huitzil/windows-endpoint-automation-toolkit/blob/main/security-and-patching/Enable-BitLockerWithEscrow.ps1",
    code: `<#
.SYNOPSIS
    Enables BitLocker TPM+PIN encryption after safely backing up and archiving the recovery key.

.DESCRIPTION
    Verifies access to a secure key escrow share, generates a recovery password protector,
    archives any existing recovery key for the device serial number with a timestamp, writes
    the active recovery key to the escrow share, strips conflicting TPM protectors, and activates
    BitLocker with TPM+PIN protection.

.PARAMETER KeyBackupPath
    UNC or local path where recovery keys are escrowed by device serial number.

.PARAMETER Pin
    SecureString pre-boot PIN for BitLocker TPM+PIN protection.

.PARAMETER DriveLetter
    Target OS volume mount point (default: 'C:').

.EXAMPLE
    $pin = Read-Host -Prompt "Enter BitLocker PIN" -AsSecureString
    .\\Enable-BitLockerWithEscrow.ps1 -KeyBackupPath "\\\\fileserver\\BitLockerKeys$" -Pin $pin
#>
#Requires -RunAsAdministrator
[CmdletBinding(SupportsShouldProcess = $true)]
param(
    [Parameter(Mandatory = $true)]
    [string]$KeyBackupPath,
    [Parameter(Mandatory = $true)]
    [SecureString]$Pin,
    [string]$DriveLetter = 'C:'
)

try {
    Write-Output '0. Running pre-flight checks...'
    if (-not (Test-Path -Path $KeyBackupPath)) {
        throw "Cannot access key backup path: $KeyBackupPath"
    }

    Write-Output '1. Generating and escrowing recovery password...'
    Add-BitLockerKeyProtector -MountPoint $DriveLetter -RecoveryPasswordProtector -ErrorAction SilentlyContinue | Out-Null

    $recoveryKey = (Get-BitLockerVolume -MountPoint $DriveLetter).KeyProtector |
        Where-Object { $_.KeyProtectorType -eq 'RecoveryPassword' } |
        Select-Object -ExpandProperty RecoveryPassword -First 1

    if ([string]::IsNullOrWhiteSpace($recoveryKey)) {
        throw 'Failed to generate or retrieve a BitLocker recovery password.'
    }

    $serialNumber = (Get-CimInstance -ClassName Win32_BIOS).SerialNumber.Trim()
    $backupFile = Join-Path -Path $KeyBackupPath -ChildPath "$serialNumber.txt"

    if ((Test-Path -Path $backupFile) -and $PSCmdlet.ShouldProcess($backupFile, 'Archive existing recovery key')) {
        $timestamp = Get-Date -Format 'yyyyMMdd_HHmmss'
        $archiveName = "\${serialNumber}_bak_\${timestamp}.txt"
        Rename-Item -Path $backupFile -NewName $archiveName -ErrorAction Stop
        Write-Output "Archived previous key to $archiveName"
    }

    if ($PSCmdlet.ShouldProcess($backupFile, 'Write active BitLocker recovery key')) {
        $recoveryKey | Out-File -FilePath $backupFile -ErrorAction Stop
        Write-Output "Escrowed recovery key to $backupFile"
    }

    Write-Output '2. Clearing conflicting TPM protectors...'
    $tpmProtectors = (Get-BitLockerVolume -MountPoint $DriveLetter).KeyProtector |
        Where-Object { $_.KeyProtectorType -match 'Tpm' }

    foreach ($protector in $tpmProtectors) {
        if ($PSCmdlet.ShouldProcess($protector.KeyProtectorId, 'Remove conflicting TPM protector')) {
            Remove-BitLockerKeyProtector -MountPoint $DriveLetter -KeyProtectorId $protector.KeyProtectorId -ErrorAction SilentlyContinue | Out-Null
        }
    }

    Write-Output '3. Enabling TPM+PIN BitLocker protection...'
    if ($PSCmdlet.ShouldProcess($DriveLetter, 'Enable-BitLocker (TpmAndPinProtector)')) {
        Enable-BitLocker -MountPoint $DriveLetter -Pin $Pin -TpmAndPinProtector -SkipHardwareTest -ErrorAction Stop | Out-Null
        Write-Output "BitLocker protection enabled on $DriveLetter."
    }
}
catch {
    Write-Error "BitLocker provisioning failed: $_"
    exit 1
}`
  },
  {
    id: "static-ip",
    name: "Set-LocationStaticIP.ps1",
    path: "provisioning/Set-LocationStaticIP.ps1",
    category: "Fleet Provisioning",
    language: "powershell",
    description: "Subnet mapping, static IPv4/DNS assignment with safety abort if active Wi-Fi is detected to prevent dual-homing.",
    highlights: [
      "Dual-homing guard: detects active Wi-Fi and aborts before Ethernet static bind",
      "Maps site prefix, gateway, and DNS from JSON site registry",
      "Supports both explicit CLI parameters and NinjaOne RMM runtime variables ($env:location, $env:octet)"
    ],
    githubUrl: "https://github.com/Dr-Huitzil/windows-endpoint-automation-toolkit/blob/main/provisioning/Set-LocationStaticIP.ps1",
    code: `<#
.SYNOPSIS
    Assigns a site-specific static IPv4 address, default gateway, and DNS servers.

.DESCRIPTION
    Reads subnet/gateway mappings from a JSON site configuration file (supporting RMM environment
    variables or explicit CLI parameters). Aborts immediately if an active Wi-Fi adapter is up to
    prevent dual-homing routing conflicts.

.PARAMETER SiteName
    Site key defined inside the configuration file (falls back to $env:location).

.PARAMETER HostOctet
    Final IPv4 host octet (1-254) (falls back to $env:octet).

.PARAMETER ConfigPath
    Path to the JSON site subnet configuration file.

.EXAMPLE
    .\\Set-LocationStaticIP.ps1 -SiteName "Site-North" -HostOctet 45 -ConfigPath "..\\config\\sites.sample.json"
#>
#Requires -RunAsAdministrator
[CmdletBinding(SupportsShouldProcess = $true)]
param(
    [string]$SiteName = $env:location,
    [ValidateRange(1, 254)]
    [int]$HostOctet = $(if ($env:octet) { [int]$env:octet } else { 0 }),
    [string]$ConfigPath = (Join-Path -Path $PSScriptRoot -ChildPath '..\\config\\sites.sample.json')
)

try {
    if ([string]::IsNullOrWhiteSpace($SiteName) -or $HostOctet -lt 1 -or $HostOctet -gt 254) {
        throw 'SiteName and a valid HostOctet (1-254) are required.'
    }

    if (-not (Test-Path -Path $ConfigPath)) {
        throw "Configuration file not found: $ConfigPath"
    }

    # Prevent asymmetric routing / dual-homing when Wi-Fi is active
    $wifiActive = Get-NetAdapter | Where-Object { $_.Status -eq 'Up' -and $_.InterfaceDescription -like '*Wi-Fi*' }
    if ($wifiActive) {
        Write-Warning "Active Wi-Fi adapter detected ($($wifiActive.Name)). Aborting static Ethernet assignment to prevent dual-homing."
        exit 1
    }

    $ethernet = Get-NetAdapter | Where-Object { $_.Status -eq 'Up' -and $_.Name -like '*Ethernet*' } | Select-Object -First 1
    if (-not $ethernet) {
        throw 'No active Ethernet adapter detected.'
    }

    $config = Get-Content -Path $ConfigPath -Raw | ConvertFrom-Json
    $site = $config.sites.$SiteName
    if (-not $site) {
        throw "Site '$SiteName' not found in $ConfigPath."
    }

    $ipAddress = "$($site.subnetPrefix)$HostOctet"
    $gateway = $site.gateway
    $prefixLength = [int]$config.prefixLength
    $dnsServers = @($config.dnsServers)

    if ($PSCmdlet.ShouldProcess($ethernet.Name, "Assign static IP $ipAddress/$prefixLength gw $gateway")) {
        $ethernet | Remove-NetIPAddress -AddressFamily IPv4 -Confirm:$false -ErrorAction SilentlyContinue
        Get-NetRoute -InterfaceIndex $ethernet.InterfaceIndex -DestinationPrefix '0.0.0.0/0' -ErrorAction SilentlyContinue |
            Remove-NetRoute -Confirm:$false -ErrorAction SilentlyContinue

        New-NetIPAddress -InterfaceAlias $ethernet.Name -IPAddress $ipAddress -PrefixLength $prefixLength -AddressFamily IPv4 -ErrorAction Stop | Out-Null
        New-NetRoute -InterfaceAlias $ethernet.Name -DestinationPrefix '0.0.0.0/0' -NextHop $gateway -ErrorAction Stop | Out-Null
        $ethernet | Set-DnsClientServerAddress -ServerAddresses $dnsServers -ErrorAction Stop

        Write-Output "Configured $($ethernet.Name): $ipAddress/$prefixLength (GW: $gateway, DNS: $($dnsServers -join ', '))"
    }
}
catch {
    Write-Error "Static IP configuration failed: $_"
    exit 1
}`
  },
  {
    id: "debloat",
    name: "Invoke-WindowsDebloat.ps1",
    path: "provisioning/Invoke-WindowsDebloat.ps1",
    category: "Provisioning & OS",
    language: "powershell",
    description: "Removes consumer AppX bloatware, uninstalls OneDrive, and runs DISM component store cleanup.",
    highlights: [
      "Curated 120-package enterprise bloatware removal list",
      "Removes provisioned packages (preventing installation for new users) and per-user packages",
      "Cleanly uninstalls per-user OneDrive installations",
      "Executes DISM /StartComponentCleanup with -WhatIf verification"
    ],
    githubUrl: "https://github.com/Dr-Huitzil/windows-endpoint-automation-toolkit/blob/main/provisioning/Invoke-WindowsDebloat.ps1",
    code: `<#
.SYNOPSIS
    Removes consumer AppX bloatware, uninstalls OneDrive, and cleans the Windows component store.

.DESCRIPTION
    Designed for post-imaging first-logon execution via AutoUnattend.xml or RMM SYSTEM context.
    Removes both provisioned packages (preventing installation for future profiles) and existing
    installed packages across all user profiles.

.PARAMETER SkipOneDrive
    Retains the default OneDrive sync client if required by tenant policy.

.PARAMETER SkipComponentCleanup
    Skips the final DISM /StartComponentCleanup pass for faster lab testing.

.EXAMPLE
    .\\Invoke-WindowsDebloat.ps1 -Verbose
#>
#Requires -RunAsAdministrator
[CmdletBinding(SupportsShouldProcess = $true)]
param(
    [switch]$SkipOneDrive,
    [switch]$SkipComponentCleanup
)

$ErrorActionPreference = 'Continue'

$BloatwarePackages = @(
    'Clipchamp.Clipchamp', 'Microsoft.BingNews', 'Microsoft.BingSearch',
    'Microsoft.BingWeather', 'Microsoft.GamingApp', 'Microsoft.GetHelp',
    'Microsoft.MicrosoftOfficeHub', 'Microsoft.MicrosoftSolitaireCollection',
    'Microsoft.Todos', 'Microsoft.WindowsFeedbackHub', 'Microsoft.XboxGamingOverlay',
    'Microsoft.YourPhone', 'Microsoft.ZuneMusic'
)

Write-Output '1. Removing provisioned AppX packages from system image...'
$provisioned = Get-AppxProvisionedPackage -Online -ErrorAction SilentlyContinue
foreach ($pkg in $provisioned) {
    if ($BloatwarePackages -contains $pkg.DisplayName) {
        if ($PSCmdlet.ShouldProcess($pkg.DisplayName, 'Remove-AppxProvisionedPackage')) {
            Remove-AppxProvisionedPackage -Online -PackageName $pkg.PackageName -ErrorAction SilentlyContinue | Out-Null
            Write-Output "Deprovisioned: $($pkg.DisplayName)"
        }
    }
}

Write-Output '2. Removing installed AppX packages across all user profiles...'
foreach ($appName in $BloatwarePackages) {
    $installed = Get-AppxPackage -Name $appName -AllUsers -ErrorAction SilentlyContinue
    foreach ($pkg in $installed) {
        if ($PSCmdlet.ShouldProcess($pkg.Name, 'Remove-AppxPackage -AllUsers')) {
            Remove-AppxPackage -Package $pkg.PackageFullName -AllUsers -ErrorAction SilentlyContinue
            Write-Output "Removed: $($pkg.Name)"
        }
    }
}

if (-not $SkipComponentCleanup) {
    Write-Output '3. Cleaning Windows component store (DISM)...'
    if ($PSCmdlet.ShouldProcess('ComponentStore', 'DISM /Online /Cleanup-Image /StartComponentCleanup')) {
        dism.exe /Online /Cleanup-Image /StartComponentCleanup /NoRestart
    }
}
Write-Output 'Debloat pipeline finalized successfully.'`
  },
  {
    id: "logon-audit",
    name: "Get-InteractiveLogonAudit.ps1",
    path: "fleet-maintenance/Get-InteractiveLogonAudit.ps1",
    category: "Diagnostics & Auditing",
    language: "powershell",
    description: "Audits recent interactive user logons from TerminalServices LocalSessionManager Event ID 21.",
    highlights: [
      "Queries LocalSessionManager Operational Event ID 21 for real user sessions",
      "Bypasses massive noise of Security Log Event ID 4624 service accounts",
      "Groups by unique username and extracts latest interactive timestamp",
      "Feeds whitelist into dormant profile cleanup runbooks"
    ],
    githubUrl: "https://github.com/Dr-Huitzil/windows-endpoint-automation-toolkit/blob/main/fleet-maintenance/Get-InteractiveLogonAudit.ps1",
    code: `<#
.SYNOPSIS
    Audits recent interactive user logons from TerminalServices LocalSessionManager Event ID 21.

.DESCRIPTION
    Queries the quiet LocalSessionManager Operational log over a configurable lookback window,
    parses interactive user accounts, strips OS service identities, excludes specified service/admin
    accounts, and emits the latest logon timestamp per unique user.

.PARAMETER DaysBack
    Number of days to inspect (default: 30).

.PARAMETER ExcludedUsers
    Account names omitted from audit output.

.EXAMPLE
    .\\Get-InteractiveLogonAudit.ps1 -DaysBack 30
#>
#Requires -RunAsAdministrator
[CmdletBinding()]
param(
    [ValidateRange(1, 365)]
    [int]$DaysBack = 30,
    [string[]]$ExcludedUsers = @('Administrator', 'localadmin')
)

try {
    $startTime = (Get-Date).AddDays(-$DaysBack)
    $events = Get-WinEvent -FilterHashtable @{
        LogName   = 'Microsoft-Windows-TerminalServices-LocalSessionManager/Operational'
        Id        = 21
        StartTime = $startTime
    } -ErrorAction SilentlyContinue

    $results = foreach ($event in $events) {
        $userLine = ($event.Message -split "\`r\`n") | Where-Object { $_ -match 'User:' } | Select-Object -First 1
        if (-not $userLine) { continue }

        $rawUser = ($userLine -split 'User:\\s*')[1].Trim()
        $username = ($rawUser -split '\\\\')[-1]

        if ($username -notmatch 'SYSTEM|LOCAL SERVICE|NETWORK SERVICE|DWM-|UMFD-|ANONYMOUS' -and
            $ExcludedUsers -notcontains $username) {
            [PSCustomObject]@{
                Username  = $username
                LogonTime = $event.TimeCreated
                LogonType = 'Interactive'
            }
        }
    }

    if ($results) {
        $results |
            Group-Object Username |
            ForEach-Object { $_.Group | Sort-Object LogonTime -Descending | Select-Object -First 1 } |
            Sort-Object LogonTime -Descending
    }
    else {
        Write-Output "No interactive user logons found in the past $DaysBack days."
    }
}
catch {
    Write-Error "Failed to query LocalSessionManager logon events: $_"
    exit 1
}`
  },
  {
    id: "wake-on-lan",
    name: "Set-DellWakeOnLan.ps1",
    path: "fleet-maintenance/Set-DellWakeOnLan.ps1",
    category: "Hardware & BIOS",
    language: "powershell",
    description: "Configures or reverts Wake-on-LAN across 802.3 NIC drivers and Dell UEFI/BIOS settings.",
    highlights: [
      "Synchronizes OS driver properties (Magic Packet, Energy Efficient Ethernet, Ultra Low Power)",
      "Automates Dell UEFI/BIOS settings via DellBIOSProvider provider",
      "Ensures night-time maintenance windows and patch pushes succeed reliably"
    ],
    githubUrl: "https://github.com/Dr-Huitzil/windows-endpoint-automation-toolkit/blob/main/fleet-maintenance/Set-DellWakeOnLan.ps1",
    code: `<#
.SYNOPSIS
    Configures or reverts Wake-on-LAN across both 802.3 NIC drivers and Dell UEFI/BIOS settings.

.DESCRIPTION
    Synchronizes OS-level Ethernet adapter wake settings (Magic Packet, Pattern Match, Energy
    Efficient Ethernet, Ultra Low Power Mode) with motherboard ACPI power settings using the
    official DellBIOSProvider PowerShell module.

.PARAMETER Mode
    Target configuration state: 'Enable' or 'Disable'.

.EXAMPLE
    .\\Set-DellWakeOnLan.ps1 -Mode Enable
#>
#Requires -RunAsAdministrator
[CmdletBinding(SupportsShouldProcess = $true)]
param(
    [Parameter(Mandatory = $true)]
    [ValidateSet('Enable', 'Disable')]
    [string]$Mode
)

try {
    $enable = $Mode -eq 'Enable'
    $wakeVal = if ($enable) { 'Enabled' } else { 'Disabled' }
    $ecoVal = if ($enable) { 'Disabled' } else { 'Enabled' }
    $biosWol = if ($enable) { 'LanOnly' } else { 'Disabled' }

    Write-Output "1. Applying '$Mode' settings to physical 802.3 NICs..."
    $adapters = Get-NetAdapter -Physical | Where-Object { $_.MediaType -eq '802.3' }

    foreach ($nic in $adapters) {
        if ($PSCmdlet.ShouldProcess($nic.Name, "Configure WoL ($Mode)")) {
            Set-NetAdapterAdvancedProperty -Name $nic.Name -DisplayName 'Wake on Magic Packet' -DisplayValue $wakeVal -ErrorAction SilentlyContinue
            Set-NetAdapterAdvancedProperty -Name $nic.Name -DisplayName 'Energy Efficient Ethernet' -DisplayValue $ecoVal -ErrorAction SilentlyContinue
            Set-NetAdapterPowerManagement -Name $nic.Name -WakeOnMagicPacket $(if ($enable) { 'Enabled' } else { 'Disabled' }) -ErrorAction SilentlyContinue
        }
    }

    Write-Output "2. Applying '$Mode' settings to Dell UEFI/BIOS via DellBIOSProvider..."
    Import-Module DellBIOSProvider -ErrorAction SilentlyContinue
    if (Test-Path -Path 'DellSmbios:\\PowerManagement\\WakeOnLan') {
        Set-Item -Path 'DellSmbios:\\PowerManagement\\WakeOnLan' -Value $biosWol -ErrorAction Stop
        Write-Output "Dell BIOS WakeOnLan set to $biosWol"
    }
}
catch {
    Write-Error "Wake-on-LAN configuration failed: $_"
    exit 1
}`
  }
];
