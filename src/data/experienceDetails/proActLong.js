export const proActLong = `
# IT Support Specialist — PRO*ACT Case Study

## The Mission

The primary objective at PRO*ACT was to ensure the absolute continuity of data pipelines connecting high-volume fresh produce suppliers. My role focused on stabilizing the physical network layer, governing secure user access, and engineering rapid-response remediations to prevent bottlenecks within a mission-critical B2B supply chain.

---

## The Operational Friction

The legacy infrastructure relied on aging FTP pipelines for routing B2B produce orders. These pipelines were prone to synchronization failures, which created immediate cascading freezes across the supply chain. Additionally, manual overhead—from hand-imaging endpoints to resolving database-level web application anomalies—created significant operational drag that threatened strict delivery windows.

---

## Strategic Initiatives

### 1. Supply Chain Telemetry & FTP Automation
I identified a critical flaw in the B2B architecture where order files would frequently hang in the data queue. To move beyond manual intervention, I engineered a **custom automation script** that dynamically appended trailing identifiers to stalled files. This allowed for the instant "flushing" of jammed queues—often clearing over 30 stalled orders in seconds—restoring supply chain velocity during high-volume crashes.

### 2. Database Integrity & Anomaly Resolution
I served as the lead for resolving web application crashes caused by corrupted order metadata. This involved executing direct **SQL queries** to isolate transaction IDs, identifying anomalies, and purging corrupted records to restore platform availability. Furthermore, I managed the technical onboarding of new vendors, mapping complex, multi-location shipping profiles directly into the relational database.

### 3. Infrastructure & Identity Governance
I maintained the core IT hardware lifecycle, performing full-system imaging and managing **Layer 1 physical cabling** for the headquarters' network. My governance responsibilities extended to **Active Directory** and **Microsoft 365**, where I managed user lifecycles and licensing compliance to ensure secure, low-friction access for the entire logistics team.

---

## Visual Evidence: Supply Chain Logistics

### FTP Queue Monitoring & Remediation
![Visualization of the FTP automation script clearing stalled B2B order files](PLACEHOLDER_ftp_automation)

### Infrastructure Maintenance
![Physical network cabling and server rack management at the PRO*ACT data center](PLACEHOLDER_cabling_management)

---

## Engineering Highlights

- **Automation**: Engineered a custom remediation script that eliminated manual FTP queue clearing, saving hours of downtime per week.
- **Data Integrity**: Maintained 99.9% application uptime by proactively identifying and removing corrupt database entries.
- **Network Scaling**: Successfully onboarded and mapped database profiles for a 15% increase in B2B produce partners.
- **Compliance**: Enforced strict identity governance across AD and M365, ensuring zero unauthorized access incidents during my tenure.

---

## The Tech Stack

| Layer | Technology |
|---|---|
| **Automation** | Custom Batch/PowerShell Scripting, FTP/SFTP Protocols |
| **Data** | Proprietary Relational Databases, SQL Querying |
| **Identity** | Active Directory, Microsoft 365 Admin Center |
| **Infrastructure** | Endpoint Imaging, Layer 1 Physical Networking |

`;
