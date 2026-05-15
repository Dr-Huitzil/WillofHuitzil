export const clinicaDeSaludLong = `
# IT Technician — Clinica de Salud (CSVS) Case Study

## The Mission

The primary objective was a comprehensive modernization of the organization's hardware lifecycle and infrastructure. By engineering high-velocity deployment pipelines, I transitioned daily IT operations into an automated, high-availability system designed to support critical clinical workflows and patient care.

---

## The Problem

The legacy environment was characterized by high-friction, manual imaging workflows and significant licensing overhead. Physical networks suffered from disorganized "spaghetti" cabling at the patch panels, and aging hardware was rapidly approaching the end of its mandatory three-year compliance cycle, risking both operational stability and regulatory standing.

---

## Strategic Initiatives

### 1. RMM Architecture & Zero-Touch Deployment
I spearheaded the migration of endpoint management to **NinjaOneRMM**, effectively sunsetting legacy deployment platforms. By engineering custom **Answer Files** and injecting debloating logic directly into **WIM files**, I established a hardware-agnostic imaging process that made expensive third-party licensing completely obsolete.

### 2. 2025 Fleet Modernization Matrix
I executed a massive organization-wide endpoint refresh, imaging and deploying **224 workstations** across distributed clinical sites. The project achieved a **100% validation rate**, ensuring the entire fleet met strict compliance standards for the current three-year longevity cycle.

### 3. High-Availability Infrastructure & Telephony
I managed the replacement of critical edge and core network switches across 10 locations, completing **71% of the total infrastructure scope**. This included a total overhaul of physical patch panel cabling and the deployment of updated IP telephony systems to ensure seamless clinical communication.

---

## Visual Evidence: Field Operations

### Infrastructure Overhaul (Before & After)
![Before and after of the patch panel reorganization and switch replacement](PLACEHOLDER_network_overhaul)

### On-Site Troubleshooting & Deployment
![On-site workstation deployment and system diagnostics in a clinical environment](PLACEHOLDER_field_ops)

---

## Scripting & Automation Deep Dive

To maintain a "Zero-Touch" environment, I developed a library of programmable payloads for NinjaOneRMM. These scripts handle everything from security hardening to silent application delivery.

**Featured Payload: \`debloat.ps1\`**
\`\`\`powershell
# Custom logic to strip telemetry and bloat from clinical WIM images
Get-AppxPackage -AllUsers | Where-Object {$_.Name -match "Microsoft.Xbox|Zune|Bing"} | Remove-AppxPackage
# Configure local telemetry keys to '0' for HIPAA compliance
Set-ItemProperty -Path "HKLM:\\SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection" -Name "AllowTelemetry" -Value 0
\`\`\`

**Other Active Payloads:**
- **\`ipChange.ps1\`**: Automated VLAN reassignment post-imaging.
- **\`xrayFiles.ps1\`**: Diagnostic utility for verifying Dental X-ray sensor connectivity.
- **\`localUser.ps1\`**: Secure local account provisioning for clinical kiosks.

---

## Engineering Highlights

- **Scale**: Provisioned and deployed **224 enterprise workstations** with a 100% validation rate.
- **Efficiency**: Completely eliminated **SmartDeploy** licensing overhead by building a native WIM workflow.
- **Reliability**: Upgraded core infrastructure across **10 out of 14 facilities**, significantly reducing network latency.
- **Security**: Hardened physical site security by upgrading access card readers and internal sensor arrays.
- **Innovation**: Decoupled user accounts from hardware using **Domain Admin service accounts** for secure SMB print/scan routing on Konica Minolta and HP devices.

---

## The Tech Stack

| Layer | Technology |
|---|---|
| **Automation** | PowerShell, WIM Customization, Answer Files |
| **Management** | NinjaOneRMM, Active Directory, Group Policy (GPO) |
| **Clinical Ecosystem** | NextGen EHR, Dental X-ray Sensors (DEXIS) |
| **Infrastructure** | Cisco/HP Switching, IP Telephony (VoIP), Konica Minolta |

`;
