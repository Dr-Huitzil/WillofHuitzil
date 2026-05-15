export const starphyreLong = `
# Cyber Security Specialist — Starphyre Digital Security Case Study

## The Mission

The objective was to implement decentralized network monitoring and data resilience for a distributed client base. My role focused on the physical deployment and configuration of hardened edge-monitoring nodes designed to provide real-time visibility, vulnerability assessment, and automated backup recovery for client environments.

---

## The Visibility Gap

Many clients operated without centralized log aggregation or a localized backup strategy, leaving them vulnerable to undetected lateral movement and data loss. To bridge this gap, we needed a low-footprint, high-reliability solution that could be deployed on-site to act as a "Security Sentry" for the local network.

---

## Strategic Initiatives

### 1. Edge Sentry Deployment & Log Aggregation
I managed the physical deployment of **Intel NUC** hardware nodes at client locations. These compact, high-performance units were configured to act as local collectors for **Splunk**, aggregating system logs and network traffic data from across the client's infrastructure. This provided the SOC (Security Operations Center) with the telemetry needed to identify and alert on suspicious activity in real time.

### 2. Vulnerability Assessment with Nessus
To proactively identify security weaknesses, I utilized these edge nodes to run localized **Nessus** scans. This allowed us to perform deep-packet inspection and vulnerability assessments from *within* the client's network perimeter, identifying unpatched systems, weak configurations, and potential entry points before they could be exploited.

### 3. Data Resilience with Veeam Orchestration
Beyond monitoring, I utilized these edge nodes to orchestrate robust backup schedules using **Veeam**. By establishing localized backup repositories, I ensured that clients had a high-availability recovery path in the event of hardware failure or a ransomware incident, significantly lowering their organizational risk profile.

---

## Visual Evidence: Security Operations

### Edge Monitoring Deployment
![An Intel NUC configured as a localized security sentry and log aggregator](PLACEHOLDER_security_node)

### Vulnerability Reporting
![Sample Nessus vulnerability assessment report generated from the edge nodes](PLACEHOLDER_nessus_report)

---

## Engineering Highlights

- **Deployment**: Engineered and deployed compact **Intel NUC** nodes to act as persistent security collectors in distributed environments.
- **Monitoring**: Established real-time log forwarding into **Splunk**, enabling proactive threat detection for remote sites.
- **Assessment**: Conducted regular vulnerability scans via **Nessus** to identify and remediate network weaknesses.
- **Resilience**: Configured and verified **Veeam** backup pipelines, ensuring 100% data recoverability for critical client systems.

---

## The Tech Stack

| Layer | Technology |
|---|---|
| **Monitoring** | Splunk Enterprise, Syslog-ng |
| **Assessment** | Nessus Vulnerability Scanner |
| **Data Resilience** | Veeam Backup & Replication |
| **Hardware** | Intel NUC (Hardened Edge Nodes) |

`;
