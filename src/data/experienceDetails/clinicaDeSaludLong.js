export const clinicaDeSaludLong = `
# IT Technician — Clinica de Salud (CSVS) Case Study

## The Operational Scope

Supporting enterprise IT operations across **18 clinical and administrative facilities** requires repeatable automation, strict HIPAA compliance, and clean documentation so both field deployments and remote administration scale reliably.

---

## Key Infrastructure & Automation Initiatives

### 1. RMM Migration & Object-Oriented Provisioning
Helped transition workstation deployment pipelines from SmartDeploy to **NinjaOne RMM** using an **object-oriented chassis policy inheritance model** (staging devices under a universal base policy before routing Desktops, Laptops, Dental Operatory All-in-Ones, and Medical Carts into role-specific policies).
- Engineered custom **\`AutoUnattend.xml\`** configurations with unattended domain join, local baseline accounts, and a 2-cycle auto-logon window so post-boot AppX debloating and OEM updates finalize unattended.
- Cataloged **120+ Windows UWP/AppX packages** for controlled removal and component cleanup.

### 2. Fleet Modernization (500+ Endpoints)
Supported the deployment and refresh of **500+ Windows 11 workstations** across all 18 clinical and administrative sites at a **100% compliance rate**, establishing a standardized 3-year hardware lifecycle and location-based naming convention.

### 3. Multi-Site Network, Wireless & Monitoring Operations
- Executed physical switch upgrades across 18 clinic locations and deployed **60 enterprise wireless access points** and IP telephony hardware within a strict 30-day compliance deadline.
- Connected **Auvik SNMP** 80%+ disk alerts to automated weekly NinjaOne cleanup routines, queried the **Cisco Meraki REST API**, isolated \`VLAN 200\` switchport mismatches via MDF toning, and documented dual-WAN carrier failover root-cause analyses.

### 4. Security, Identity & Clinical Systems
- Enforced HIPAA endpoint decommissioning (SSD extraction, **Huntress EDR** removal, Active Directory offboarding, and multi-seat Microsoft 365 license release).
- Led periodic **Microsoft 365 license reconciliation audits** to prevent 10-seat shared activation evictions.
- Supported a 15-host RDS farm, Omnissa Horizon VDI, NextGen EHR/EDR access, PCI payment terminal COM-port redirection, dental X-ray imaging, RingCentral/Algo SIP paging, and CDC VFC cold-chain Wi-Fi vaccine sensors on segmented IoT SSIDs.

---

## Sanitized PowerShell Automation Highlights

- **\`Enable-BitLockerWithEscrow.ps1\`**: Verifies network key escrow path, generates TPM 2.0 + PIN protectors, and timestamp-archives previous keys by BIOS serial number.
- **\`Set-DellWakeOnLan.ps1\`**: Synchronizes 802.3 Ethernet NIC wake properties with Dell UEFI/BIOS ACPI power settings via \`DellBIOSProvider\`.
- **\`Set-LocationStaticIP.ps1\`**: Dynamically maps site subnet, gateway, and DNS from RMM/JSON configs while aborting on active Wi-Fi to prevent dual-homing.
- **\`Uninstall-WindowsCumulativeUpdate.ps1\`**: Isolates safe CBS \`RollupFix\` packages by KB number for targeted DISM update rollbacks.
- **\`New-RestrictedScanSmbShare.ps1\`**: Strips NTFS inheritance, sets restricted ACLs, and removes \`Everyone\` access for secure network MFP scanning.

*(Sanitized reference implementations are published in [windows-endpoint-automation-toolkit](https://github.com/Dr-Huitzil/windows-endpoint-automation-toolkit).)*

---

## The Tech Stack

| Layer | Technology |
|---|---|
| **Automation & OS** | PowerShell 5.1, Windows 11 WIM, AutoUnattend.xml, DISM, DellBIOSProvider |
| **Management & Security** | NinjaOne RMM, Active Directory, Group Policy (GPO), BitLocker, Huntress EDR |
| **Networking & Monitoring** | Cisco Catalyst 9200L, Cisco Meraki (REST API), Auvik SNMP, SonicWall, VLANs |
| **Clinical & Identity** | Microsoft 365, NextGen EHR/EDR, Omnissa Horizon VDI, RDS, RingCentral VoIP |
| **Documentation** | 170+ Document Johnny.Decimal Obsidian Knowledge Base |
`;
