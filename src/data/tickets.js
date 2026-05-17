// src/data/tickets.js

export const ticketsData = [
  {
    id: "SR-13153",
    title: "CCNA Certification Preparation",
    status: "Working on...",
    category: "Security & Networking",
    priority: "High",
    updated: "05/16/2026",
    description: "Deep diving into Cisco Networking systems, routing protocols, and enterprise infrastructure design for the Cisco CCNA exam.",
    tasks: [
      { id: "1", text: "Study Network Fundamentals: IPv4/IPv6 subnetting", completed: true, completedAt: "05/01/2026" },
      { id: "2", text: "Study Network Access: VLANs, trunking, STP", completed: true, completedAt: "05/08/2026" },
      { id: "3", text: "Study IP Connectivity: OSPFv2, static routing", completed: false, completedAt: null },
      { id: "4", text: "Study IP Services: NAT, DHCP, NTP, QoS", completed: false, completedAt: null },
      { id: "5", text: "Master Security Fundamentals: ACLs, Port Security", completed: false, completedAt: null },
      { id: "6", text: "Study Automation: REST APIs, Ansible, JSON structures", completed: false, completedAt: null }
    ],
    details: `
### Certification Goal
Master IP routing, security architectures, network automation, and switching fundamentals to obtain the Cisco CCNA credential.
    `
  },
  {
    id: "SR-13152",
    title: "Photography Portfolio Addition",
    status: "Planning",
    category: "Frontend Dev",
    priority: "Medium",
    updated: "05/15/2026",
    description: "Designing and developing a dedicated glassmorphic visual showcase section for high-resolution photography projects.",
    tasks: [
      { id: "1", text: "Purchase photography portfolio domain", completed: false, completedAt: null },
      { id: "2", text: "Design interactive light-box grid layout", completed: false, completedAt: null },
      { id: "3", text: "Optimize high-resolution asset compression pipeline", completed: false, completedAt: null },
      { id: "4", text: "Implement blur-hash lazy loading placeholders", completed: false, completedAt: null }
    ],
    details: `
### Objective
To build a stunning, performant photography showcase sub-page.
    `
  },
  {
    id: "SR-13151",
    title: "Este Cosmos Mobile State Refactor",
    status: "Planning",
    category: "Architecture",
    priority: "High",
    updated: "05/14/2026",
    description: "Migrating the monolithic state management tree of the vehicle tracking system into modular React Contexts.",
    tasks: [
      { id: "1", text: "Decouple UI & layout state (theme, modals)", completed: true, completedAt: "05/12/2026" },
      { id: "2", text: "Modularize Fleet vehicle telemetry & tracking", completed: true, completedAt: "05/14/2026" },
      { id: "3", text: "Implement Analytics 14-day aggregation calculations", completed: false, completedAt: null },
      { id: "4", text: "Integrate custom hooks into App root", completed: false, completedAt: null }
    ],
    details: `
### Architecture Outline
Decouple vehicle diagnostic logic to maximize rendering speeds on mobile.
    `
  },
  {
    id: "SR-13148",
    title: "Interactive Public Ticketing Dashboard",
    status: "Completed",
    category: "Frontend Dev",
    priority: "Low",
    updated: "05/17/2026",
    description: "Designing a high-fidelity scrollable IT ticketing console for active and completed sprints.",
    tasks: [
      { id: "1", text: "Design layout & responsive grid styles", completed: true, completedAt: "05/15/2026" },
      { id: "2", text: "Create dropdown filter component", completed: true, completedAt: "05/16/2026" },
      { id: "3", text: "Integrate Markdown rendering details modal", completed: true, completedAt: "05/17/2026" }
    ],
    details: `
### Goal
Provide a transparent, public-facing view of active sprints.
    `
  },
  {
    id: "SR-13146",
    title: "Cybersecurity SIEM Splunk Log Integration",
    status: "Closed",
    category: "Security",
    priority: "High",
    updated: "05/10/2026",
    description: "Automating log ingestion pipelines to forward desktop support and firewall logs directly to Splunk SIEM.",
    tasks: [
      { id: "1", text: "Deploy Splunk Universal Forwarders to simulation hosts", completed: true, completedAt: "05/05/2026" },
      { id: "2", text: "Configure Active Directory event forwarding rules", completed: true, completedAt: "05/08/2026" },
      { id: "3", text: "Validate firewall log rate limiting configurations", completed: true, completedAt: "05/10/2026" }
    ],
    details: `
### Pipeline Summary
All testing is complete. Desktop support log forwarders are active and alerting rules are configured properly.
    `
  },
  {
    id: "SR-13142",
    title: "Clinica De Salud SmartDeploy OS Automation",
    status: "Closed",
    category: "Automation",
    priority: "Medium",
    updated: "05/08/2026",
    description: "Configuring SmartDeploy automated answer files to deploy clinical workstations across distributed environments.",
    tasks: [
      { id: "1", text: "Create hardware-independent driver packs (PPKs)", completed: true, completedAt: "05/04/2026" },
      { id: "2", text: "Script Silent AD enrollment PowerShell routines", completed: true, completedAt: "05/06/2026" },
      { id: "3", text: "Test NinjaOne automated deployment endpoints", completed: true, completedAt: "05/08/2026" }
    ],
    details: `
### Project Summary
Successfully automated system provisioning routines for deploying medical workstations hands-free.
    `
  }
];
