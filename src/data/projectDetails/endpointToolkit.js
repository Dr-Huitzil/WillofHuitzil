export const endpointToolkitDetails = `
# Windows Endpoint Automation & Runbook Toolkit

## What is it?

A sanitized, modular repository of **45+ PowerShell 5.1+ automation scripts**, **Windows 11 unattended OOBE provisioning templates**, and **Layer 1–3 operational runbooks** engineered from multi-site healthcare IT operations across 18 clinical facilities and 500+ enterprise endpoints.

All scripts adhere to strict sanitization, idempotency, and privilege-boundary standards, designed for deployment through modern Remote Monitoring & Management (RMM) platforms like NinjaOne, Intune, or standalone execution.

---

## Architecture & Directory Layout

The repository is organized into 8 focused operational domains:

\`\`\`text
windows-endpoint-automation-toolkit/
├── application-lifecycle/      # Silent software installation, uninstalls, package inventory
├── config/                     # BIOS configuration, location static IPs, NTP, chassis policies
├── diagnostics-and-auditing/   # Event ID 21 interactive logon audits, hardware telemetry
├── docs/                       # Runbooks, architecture diagrams, double-hop & SYSTEM standards
├── fleet-maintenance/          # Dell Wake-on-LAN, dormant profile pruning, scheduled cleanup
├── provisioning/               # AutoUnattend.xml (OOBE bypass, 2-cycle auto-logon), 120-package debloat
├── security-and-patching/      # BitLocker TPM+PIN escrow, SMB share ACLs, DISM CBS rollbacks
├── specialized-deployments/    # Clinical operatory stations, kiosks, peripheral setups
└── tooling/                    # AST syntax validation, credential safety & leak-prevention tests
\`\`\`

---

## Core Technical Capabilities

### 1. Zero-Touch Windows 11 Provisioning (\`provisioning/\`)
- **\`AutoUnattend.sample.xml\`**: Fully unattended OOBE bypass, automated Active Directory domain join, localized baseline account creation, and a synchronized 2-cycle auto-logon sequence allowing post-boot RMM agents and OEM updates to finalize without operator intervention.
- **\`Invoke-WindowsDebloat.ps1\`**: Removes provisioned and per-user consumer AppX packages from a vetted 120-package catalog, cleanly uninstalls OneDrive, and executes \`DISM /StartComponentCleanup\` with full \`-WhatIf\` verification.
- **\`Set-LocationStaticIP.ps1\`**: Consumes site-specific subnet mappings (or NinjaOne runtime parameter prompts) to configure static IPv4, default gateway, and DNS addresses while aborting immediately if active Wi-Fi is detected to prevent dual-homing.

### 2. Enterprise Fleet Security & Patching (\`security-and-patching/\`)
- **\`Enable-BitLockerWithEscrow.ps1\`**: Validates network key escrow share connectivity, generates TPM 2.0 + PIN protectors, archives previous recovery keys indexed by BIOS serial number with timestamp rotation, and clears stale protectors.
- **\`Invoke-BitLockerUpdateWindow.ps1\`**: Chassis-aware pre/post BIOS update manager that verifies AC power connectivity before suspending BitLocker for a controlled reboot window.
- **\`New-RestrictedScanSmbShare.ps1\`**: Strips inherited NTFS permissions, transfers ownership to Domain Admins, removes \`Everyone\` share access, and restricts SMB scan folders to authenticated MFP identities.
- **\`Uninstall-WindowsCumulativeUpdate.ps1\`**: Safely parses CBS registry packages for safe \`RollupFix\` targets (excluding core OS servicing stack components) to execute automated DISM rollbacks during bad patch cycles.

### 3. Diagnostics & Fleet Maintenance (\`diagnostics-and-auditing/\` & \`fleet-maintenance/\`)
- **\`Get-InteractiveLogonAudit.ps1\`**: Queries TerminalServices-LocalSessionManager Event ID 21 to extract real user logon events, constructing an active profile whitelist.
- **\`Clear-StaleUserProfiles.ps1\`**: Compares local user directories against the logon audit whitelist and safely purges dormant profiles older than 60 days, freeing gigabytes across shared clinical workstations.
- **\`Set-DellWakeOnLan.ps1\`**: Synchronizes 802.3 Ethernet NIC wake-packet properties with Dell UEFI/BIOS ACPI power settings using \`DellBIOSProvider\`.

### 4. NinjaOne RMM Runtime Integration
Scripts support both non-interactive scheduling (via RMM environment variables) and interactive technician execution with modal parameter dialogs (e.g., site codes, asset tags, or credential inputs), enabling junior technicians to execute complex provisioning safely.

---

## Operational Standards & Code Hygiene

- **Idempotent Design**: All scripts safely test existing state before applying changes, making them safe for recurring automated RMM schedule evaluation.
- **SYSTEM Privilege Boundaries**: Runbooks document how to avoid Windows double-hop SMB authentication traps and handle \`curl.exe\` vs PowerShell \`Invoke-RestMethod\` quirks under the \`NT AUTHORITY\\SYSTEM\` account.
- **Automated AST Testing**: Includes automated Abstract Syntax Tree (AST) scanning in \`tooling/\` to enforce zero hardcoded IP addresses, credentials, or internal domains prior to git commits.
`;
