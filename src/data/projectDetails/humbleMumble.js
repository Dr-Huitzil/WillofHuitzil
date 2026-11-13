export const humbleMumbleDetails = `
# Humble-Mumble — Enterprise Fleet Hygiene & Reconciliation Engine

## What is it?

**Humble-Mumble** is an enterprise fleet hygiene, asset cross-referencing, and automated remediation engine. In distributed enterprise IT environments, asset inventories suffer from "console sprawl": the RMM platform sees one subset of devices, the Endpoint Detection & Response (EDR) platform sees another, and Active Directory Domain Services records systems that may have been decommissioned months ago.

Humble-Mumble extracts raw inventory telemetry across **NinjaOne RMM**, **Huntress EDR**, and **Active Directory DS**, normalizes asset identifiers (BIOS serial numbers, computer hostnames, MAC addresses, and last-seen timestamps), identifies orphaned or unmanaged endpoints, and automatically dispatches structured remediation action items via the **Google Tasks API**.

---

## The Operational Problem: Console Sprawl & Silent Blind Spots

In a 500+ endpoint, multi-facility organization:
1. **Unmanaged Endpoints**: A newly provisioned workstation might join Active Directory but fail to install Huntress EDR, leaving a silent compliance and security gap.
2. **Ghost Records**: A decommissioned or replaced laptop remains active in Active Directory, skewing compliance reporting and consuming administrative overhead.
3. **Billing Waste**: Stale agent records left inside RMM or EDR tenants waste monthly software licensing seats.
4. **Manual Tracking Overhead**: Technicians spend hours manually exporting CSV files from three different consoles, copying columns into Excel, and generating follow-up tickets.

Humble-Mumble replaces manual cross-referencing with an automated, scheduled Python pipeline.

---

## Architecture & Workflow

\`\`\`text
[NinjaOne RMM API / CSV]  ──┐
[Huntress EDR API / CSV]  ──┼──> [Data Normalization & Reconciliation Engine]
[Active Directory DS CSV] ──┘         │
                                      ├──> [Formatted Multi-Tab Excel Workbook (.xlsx)]
                                      └──> [Google Tasks API Orchestrator (Remediation)]
\`\`\`

### 1. Multi-Source Ingestion & Sanitization
- Ingests device telemetry from NinjaOne, Huntress, and Active Directory.
- Normalizes disparate hostname casing, serial number formats, and timestamp conventions into standard Python data models.

### 2. Tri-Source Discrepancy Matching
- **Active in AD but Missing Huntress EDR**: Flags endpoints that represent immediate defensive vulnerabilities.
- **Active in NinjaOne but Missing in AD**: Flags rogue or misnamed devices that bypassed standard domain provisioning.
- **Dormant in AD (>90 Days Offline)**: Flags endpoints scheduled for secure HIPAA decommissioning or AD account cleanup.

### 3. Operational Reporting & Task Dispatch
- **XLSX Report Generation**: Compiles categorized discrepancy reports into an executive-ready multi-tab Excel spreadsheet with conditional formatting.
- **Google Tasks Remediation**: Directly interfaces with the Google Tasks API to create actionable tasks assigned to technicians with specific device hostnames, serial numbers, and remediation instructions (e.g., *"Deploy Huntress to CLINIC-WS-04"* or *"Decommission AD account for RECEPTION-DT-01"*).

---

## The Tech Stack

| Component | Technology |
|---|---|
| **Language & Engine** | Python 3.10+, PowerShell 5.1+ |
| **Data Processing** | Pandas, OpenPyXL, Regular Expressions |
| **Integrations** | NinjaOne RMM, Huntress EDR, Active Directory DS |
| **Cloud & Workflow** | Google Tasks API, Google Cloud Console OAuth 2.0 |
| **Compliance Focus** | HIPAA Endpoint Governance, Asset Accounting |
`;
