// src/data/tickets.js

export const ticketsData = [
  {
    id: "SR-00012",
    title: "Humble-Mumble Fleet Hygiene & Automated Remediation",
    status: "Working on...",
    category: "Automation",
    priority: "High",
    updated: "11/13/2026",
    description: "Developing a multi-source asset discrepancy engine reconciling NinjaOne RMM, Huntress EDR, and Active Directory DS with automated Google Tasks dispatch.",
    tasks: [
      { id: "1", text: "Ingest CSV and REST exports from NinjaOne, Huntress, and AD DS", completed: true, completedAt: "10/20/2026" },
      { id: "2", text: "Build normalization and fuzzy-matching logic for hostnames and serial numbers", completed: true, completedAt: "10/20/2026" },
      { id: "3", text: "Generate multi-tab formatted Excel audit workbook (.xlsx)", completed: true, completedAt: "11/05/2026" },
      { id: "4", text: "Integrate Google Tasks API for automated technician follow-up dispatch", completed: false, completedAt: null },
      { id: "5", text: "Deploy scheduled weekly cron runner with email exception reporting", completed: false, completedAt: null }
    ],
    details: `
### Project Summary
Developing an automated fleet reconciliation pipeline that eliminates console sprawl across 500+ endpoints. By cross-referencing Active Directory domain members against NinjaOne RMM agents and Huntress EDR sensors, the engine catches unmanaged endpoints, flags dormant records for HIPAA decommissioning, and automatically dispatches actionable tickets to technicians via Google Tasks.
    `
  },
  {
    id: "SR-00011",
    title: "DoD SMART Scholarship Application & Defense Pipeline",
    status: "Working on...",
    category: "Career & Research",
    priority: "High",
    updated: "11/13/2026",
    description: "Preparing civilian defense fellowship application, undergraduate academic transcripts, faculty recommendations, and facility alignment ahead of the Dec 4 deadline.",
    tasks: [
      { id: "1", text: "Draft comprehensive Statement of Purpose framing decade-long systems builder narrative", completed: true, completedAt: "11/12/2026" },
      { id: "2", text: "Audit academic transcripts from CSUMB and Hartnell College", completed: true, completedAt: "11/12/2026" },
      { id: "3", text: "Select target sponsoring facilities across Monterey Bay, Silicon Valley, and Northern Colorado", completed: true, completedAt: "11/13/2026" },
      { id: "4", text: "Secure recommendation letters from CS faculty and IT engineering leadership", completed: false, completedAt: null },
      { id: "5", text: "Submit final application package via smartscholarship.org portal", completed: false, completedAt: null }
    ],
    details: `
### Objective
Targeting the Department of Defense Science, Mathematics, and Research for Transformation (SMART) Scholarship to fund remaining B.S. in Computer Science coursework at CSUMB and transition directly into civilian defense engineering, cybersecurity, or national laboratory research (Sandia / LLNL).
    `
  },
  {
    id: "SR-00010",
    title: "Publish Sanitized Endpoint Automation Toolkit & Portfolio Sync",
    status: "Completed",
    category: "Automation",
    priority: "High",
    updated: "11/13/2026",
    description: "Packaged 45+ sanitized PowerShell provisioning scripts, AutoUnattend templates, and operational runbooks across 8 domains into a public GitHub repository.",
    tasks: [
      { id: "1", text: "Organize 170+ document Obsidian operations knowledge base", completed: true, completedAt: "11/10/2026" },
      { id: "2", text: "Build sanitized windows-endpoint-automation-toolkit repo with PowerShell AST & leak verification", completed: true, completedAt: "11/11/2026" },
      { id: "3", text: "Synchronize resumes, LinkedIn, GitHub profile README, and WillofHuitzil portfolio", completed: true, completedAt: "11/11/2026" },
      { id: "4", text: "Push sanitized toolkit repository to GitHub (45+ scripts across 8 operational domains)", completed: true, completedAt: "11/13/2026" }
    ],
    details: `
### Project Summary
Turned real-world multi-site systems administration, unattended imaging, and endpoint automation patterns into clean, sanitized, publicly inspectable engineering documentation and code on GitHub.
    `
  },
  {
    id: "SR-00009",
    title: "FULLY Automate Computer Imaging and Deployment",
    status: "Completed",
    category: "Automation",
    priority: "High",
    updated: "11/10/2026",
    description: "Designed an unattended Windows 11 imaging and deployment workflow using NinjaOne RMM, AutoUnattend.xml, and modular PowerShell scripts across 18 facilities.",
    tasks: [
      {
        id: "1",
        text: "Update workflow to automated unattended provisioning",
        completed: true,
        completedAt: "11/10/2026",
        subtasks: [
          { id: "1", text: "Deploy AutoUnattend.xml 2-cycle auto-logon & AD domain join", completed: true },
          { id: "2", text: "Configure NinjaOne object-oriented chassis policy inheritance", completed: true },
          { id: "3", text: "Inject automated AppX debloat, BitLocker escrow, and location static IP scripts", completed: true }
        ]
      },
      { id: "2", text: "Validate across Desktop, Laptop, and Operatory workstation fleets", completed: true, completedAt: "11/10/2026" }
    ],
    details: `
### Project Summary
Transitioned workstation provisioning to an unattended NinjaOne RMM pipeline backed by AutoUnattend.xml and 40+ PowerShell automation scripts, scaling across 500+ endpoints at 100% compliance.
    `
  },
  {
    id: "SR-00006",
    title: "Cisco CCNA Certification Preparation & Lab",
    status: "Working on...",
    category: "Security & Networking",
    priority: "High",
    updated: "11/13/2026",
    description: "Deep diving into Cisco Networking systems, routing protocols, VLAN trunking, and enterprise infrastructure design for the Cisco CCNA 200-301 exam.",
    tasks: [
      {
        id: "1",
        text: "Study Network Fundamentals:",
        completed: true,
        completedAt: "05/01/2026",
        subtasks: [
          { text: "IPv4/IPv6 subnetting & CIDR", completed: true }
        ]
      },
      {
        id: "2",
        text: "Study Network Access:",
        completed: true,
        completedAt: "05/08/2026",
        subtasks: [
          { text: "VLANs & 802.1Q Trunking", completed: true },
          { text: "Spanning Tree Protocol (STP / RSTP)", completed: true },
          { text: "EtherChannel (LACP)", completed: true }
        ]
      },
      {
        id: "3",
        text: "Study IP Connectivity & Routing:",
        completed: false,
        completedAt: null,
        subtasks: [
          { text: "Single-area OSPFv2 configuration & verification", completed: false },
          { text: "Floating static routes & default gateway redundancy", completed: false }
        ]
      },
      {
        id: "4",
        text: "Study IP Services & Network Security:",
        completed: false,
        completedAt: null,
        subtasks: [
          { text: "NAT / PAT pools", completed: false },
          { text: "DHCP snooping & ARP inspection", completed: false },
          { text: "Standard & Extended IPv4 ACLs", completed: false }
        ]
      },
      {
        id: "5",
        text: "Master Network Automation & Programmability:",
        completed: false,
        completedAt: null,
        subtasks: [
          { text: "Cisco DNA Center & Meraki REST APIs", completed: false },
          { text: "JSON / YAML data structures", completed: false }
        ]
      }
    ],
    details: `
### Certification Goal
Master enterprise IP routing, switching architectures, wireless infrastructure, and network programmability to obtain the Cisco CCNA credential, cementing the Layer 2 foundation of the 3-layer cybersecurity progression.
    `
  },
  {
    id: "SR-00005",
    title: "Mind Melt Multimedia Platform",
    status: "Completed",
    category: "Frontend Dev",
    priority: "Medium",
    updated: "09/15/2026",
    description: "Built an interactive Windows XP desktop OS simulation in React for multimedia broadcast distribution and audio archiving.",
    tasks: [
      { id: "1", text: "Design desktop window manager and taskbar", completed: true, completedAt: "05/10/2024" },
      { id: "2", text: "Integrate Google Cloud Storage and Firebase v12 backend", completed: true, completedAt: "01/30/2026" },
      { id: "3", text: "Build skinnable Winamp-style audio player with LCD marquee", completed: true, completedAt: "05/15/2026" }
    ],
    details: `
### Objective
Built a full Windows XP-style interactive web application supporting student art, radio broadcasts, and multitrack podcast archives.
    `
  },
  {
    id: "SR-00004",
    title: "Este Cosmos Vehicle Telemetry Web App",
    status: "Completed",
    category: "Architecture",
    priority: "High",
    updated: "05/14/2026",
    description: "Deployed vehicle fuel telemetry and offline TinyML anomaly forecasting application with React and WebAssembly.",
    tasks: [
      { id: "1", text: "Create Web application prototype", completed: true, completedAt: "04/21/2026" },
      { id: "2", text: "Integrate Edge Impulse TinyML WebAssembly anomaly model", completed: true, completedAt: "05/01/2026" },
      { id: "3", text: "Deploy production build to Netlify (estecosmos.netlify.app)", completed: true, completedAt: "05/14/2026" }
    ],
    details: `
### Architecture Outline
Engineered a client-side telemetry analysis tool capable of calculating net fuel reimbursements and scoring efficiency anomalies in the browser without server dependency.
    `
  },
  {
    id: "SR-00003",
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
Provide a transparent, public-facing view of active projects.
    `
  },
  {
    id: "SR-00002",
    title: "Computer Science Portfolio",
    status: "Completed",
    category: "Front End",
    priority: "High",
    updated: "05/17/2026",
    description: "Developing a responsive portfolio to showcase computer science projects and achievements.",
    tasks: [
      { id: "1", text: "Design MesoAmerican Solarpunk aesthetic", completed: true, completedAt: "05/11/2026" },
      { id: "2", text: "Add all of the information to the portfolio", completed: true, completedAt: "05/14/2026" },
      { id: "3", text: "Integrate Markdown rendering details modal", completed: true, completedAt: "05/17/2026" }
    ],
    details: `
### Objective
To build a stunning, performant portfolio website that effectively displays my computer science projects, skills, and achievements.
    `
  },
  {
    id: "SR-00001",
    title: "Clinica De Salud SmartDeploy OS Automation",
    status: "Closed",
    category: "Automation",
    priority: "Medium",
    updated: "12/31/2025",
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
