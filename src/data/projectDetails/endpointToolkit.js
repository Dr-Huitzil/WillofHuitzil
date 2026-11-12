export const endpointToolkitDetails = `
# Windows Endpoint Automation & Runbook Toolkit

## What is it?

A sanitized, modular repository of **PowerShell 5.1+ automation scripts**, **Windows 11 unattended OOBE templates**, and **Layer 1–3 operational runbooks** built from multi-site healthcare IT operations across 18 facilities and 500+ endpoints.

---

## Core Modules

### 1. Provisioning & Configuration (\`provisioning/\`)
- **\`AutoUnattend.sample.xml\`**: Unattended Windows 11 OOBE bypass, automated domain join, local account baseline, and 2-cycle auto-logon sequence allowing RMM scripts and OEM updates to finalize cleanly.
- **\`Invoke-WindowsDebloat.ps1\`**: Removes provisioned and per-user consumer AppX packages, optionally uninstalls OneDrive, and runs \`DISM /StartComponentCleanup\` with full \`-WhatIf\` support.
- **\`Set-LocationStaticIP.ps1\`**: Consumes JSON site subnet mappings (or RMM parameters) to assign static IPv4, gateway, and DNS settings while aborting immediately if active Wi-Fi would cause dual-homing.
- **\`Rename-EndpointBySite.ps1\`**: Standardizes hostnames (\`<SITE>-<DEV>-<ASSET>\`), clears cached SMB sessions, and applies domain renames safely via \`PSCredential\`.

### 2. Security, Encryption & Patching (\`security-and-patching/\`)
- **\`Enable-BitLockerWithEscrow.ps1\`**: Validates escrow share reachability, exports recovery keys indexed by BIOS serial number with timestamped backup archival, clears conflicting protectors, and activates TPM 2.0 + PIN.
- **\`Invoke-BitLockerUpdateWindow.ps1\`**: Chassis-aware pre/post firmware update manager verifying AC power connectivity before suspending BitLocker for a controlled reboot window.
- **\`New-RestrictedScanSmbShare.ps1\`**: Strips NTFS inheritance, transfers ownership to Domain Admins, removes \`Everyone\` share access, and restricts SMB scan folders to explicit identities.
- **\`Uninstall-WindowsCumulativeUpdate.ps1\`**: Inspects CBS registry packages for safe \`RollupFix\` targets (excluding core OS components) for automated DISM rollbacks.

### 3. Fleet Maintenance & Runbooks (\`fleet-maintenance/\` & \`docs/\`)
- **\`Set-DellWakeOnLan.ps1\`**: Synchronizes 802.3 Ethernet wake properties with Dell UEFI/BIOS settings via \`DellBIOSProvider\`.
- **\`Get-InteractiveLogonAudit.ps1\` & \`Clear-StaleUserProfiles.ps1\`**: Parses TerminalServices Event ID 21 logon logs to build an active-user whitelist before safely pruning dormant local profiles.
- **Engineering Runbooks**: Policy inheritance architecture, RMM \`SYSTEM\` scripting standards (\`curl.exe\` REST API fix & SMB double-hop prevention), Dual-WAN failover RCA, and Layer 1/2 VLAN switchport triage.
`;
