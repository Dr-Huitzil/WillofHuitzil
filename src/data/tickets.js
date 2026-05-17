// src/data/tickets.js

export const ticketsData = [
  {
    id: "SR-00007",
    title: "Automatic Plant Irrigation and Monitoring",
    status: "Planning",
    category: "Research",
    priority: "High",
    updated: "05/17/2026",
    description: "Researching and experimenting with AI and robotics technologies to be able to take care of houseplant or garden automation.",
    tasks: [
      {
        id: "1",
        text: "Purchase the following electrical components:",
        completed: false,
        completedAt: null,
        subtasks: [
          { text: "1x Raspberry Pi 5", completed: false },
          { text: "1x ESP32 Microcontroller", completed: false },
          { text: "Soil Moisture Sensor", completed: false },
          { text: "EC Probe", completed: false },
          { text: "BME280 Temp/Humidity Sensor", completed: false },
          { text: "Relay Module", completed: false },
          { text: "Tubing", completed: false },
          { text: "Small Pump", completed: false }
        ]
      },
      {
        id: "2",
        text: "Design the following items:",
        completed: false,
        completedAt: null,
        subtasks: [
          { text: "Planter box", completed: false },
          { text: "Wiring diagram", completed: false },
          { text: "3D modeled windmill blades", completed: false }
        ]
      },
      {
        id: "3",
        text: "Purchase the following equipment:",
        completed: false,
        completedAt: null,
        subtasks: [
          { text: "2x2 wood planks", completed: false },
          { text: "Plant seeds", completed: false },
          { text: "3D Modeled assets", completed: false },
          { text: "Jumper wires", completed: false },
          { text: "Silicone tubing", completed: false }
        ]
      },
      { id: "4", text: "Research and test with TinyML", completed: false, completedAt: null }
    ],
    details: `
### Research
I would like to take advantage of the high availability of AI in order to improve systems within my own home while also experimenting with the advancement of AI.
Using the sensors, I would like to obtain as much information as possible regarding moisture, soil composition, and atmospheric conditions in order to build an automatic offline smart planter systm.
The goal is to increase plant health thus fruit/vegetable production. 

Since plants are also living, why not use AI in order to improve their livelyhood and their development.
    `
  },
  {
    id: "SR-00006",
    title: "CCNA Certification Preparation",
    status: "Working on...",
    category: "Security & Networking",
    priority: "High",
    updated: "05/16/2026",
    description: "Deep diving into Cisco Networking systems, routing protocols, and enterprise infrastructure design for the Cisco CCNA exam.",
    tasks: [
      {
        id: "1",
        text: "Study Network Fundamentals:",
        completed: true,
        completedAt: "05/01/2026",
        subtasks: [
          { text: "IPv4/IPv6 subnetting", completed: true }
        ]
      },
      {
        id: "2",
        text: "Study Network Access:",
        completed: true,
        completedAt: "05/08/2026",
        subtasks: [
          { text: "VLANs", completed: true },
          { text: "Trunking", completed: true },
          { text: "STP", completed: true }
        ]
      },
      {
        id: "3",
        text: "Study IP Connectivity:",
        completed: false,
        completedAt: null,
        subtasks: [
          { text: "OSPFv2", completed: false },
          { text: "Static routing", completed: false }
        ]
      },
      {
        id: "4",
        text: "Study IP Services:",
        completed: false,
        completedAt: null,
        subtasks: [
          { text: "NAT", completed: false },
          { text: "DHCP", completed: false },
          { text: "NTP", completed: false },
          { text: "QoS", completed: false }
        ]
      },
      {
        id: "5",
        text: "Master Security Fundamentals:",
        completed: false,
        completedAt: null,
        subtasks: [
          { text: "ACLs", completed: false },
          { text: "Port Security", completed: false }
        ]
      },
      {
        id: "6",
        text: "Study Automation:",
        completed: false,
        completedAt: null,
        subtasks: [
          { text: "REST APIs", completed: false },
          { text: "Ansible", completed: false },
          { text: "JSON structures", completed: false }
        ]
      }
    ],
    details: `
### Certification Goal
Master IP routing, security architectures, network automation, and switching fundamentals to obtain the Cisco CCNA credential.
    `
  },
  {
    id: "SR-00005",
    title: "Media Portfolio Addition",
    status: "Planning",
    category: "Frontend Dev",
    priority: "Medium",
    updated: "05/15/2026",
    description: "Designing and developing a dedicated Y2K visual showcase section for high-resolution media projects.",
    tasks: [
      { id: "1", text: "Purchase photography portfolio domain", completed: false, completedAt: null },
      { id: "2", text: "Design interactive light-box grid layout", completed: false, completedAt: null },
      { id: "3", text: "Optimize high-resolution asset compression pipeline", completed: false, completedAt: null },
      { id: "4", text: "Implement blur-hash lazy loading placeholders", completed: false, completedAt: null }
    ],
    details: `
### Objective
To build a stunning, performant media showcase sub-page which will include videos and photography projects as well as vector assets 
    `
  },
  {
    id: "SR-00004",
    title: "Este Cosmos Mobile State Refactor",
    status: "Planning",
    category: "Architecture",
    priority: "High",
    updated: "05/14/2026",
    description: "Migrating the monolithic state management tree of the vehicle tracking system into modular React Contexts.",
    tasks: [
      { id: "1", text: "Create Web application prototype", completed: true, completedAt: "04/21/2026" },
      { id: "2", text: "Create vector assets", completed: false, completedAt: null },
      { id: "3", text: "Set up the Kotlin environment", completed: false, completedAt: null },
      { id: "4", text: "Rebuild the react web app to a kotlin native app", completed: false, completedAt: null }
    ],
    details: `
### Architecture Outline
Create a native Android application I can use offline on my own personal device
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
  },
  {
    id: "SR-00000",
    title: "Mind Melt Website",
    status: "Completed",
    category: "Front End",
    priority: "High",
    updated: "01/30/2026",
    description: "The website for the multimedia brand Mind Melt",
    tasks: [
      {
        id: "1",
        text: "Purchase the domain",
        completed: true,
        completedAt: "05/10/2024",
      },
      {
        id: "2",
        text: "Design retro Windows aesthetic",
        completed: true,
        completedAt: "05/10/2024",
      },
      {
        id: "3",
        text: "Add all of the information and mock applications to the website",
        completed: true,
        completedAt: "01/30/2026",
      }
    ],
    details: `
### Project Summary
My friends and I run a brand called Mind Melt and we wanted to create a website that would allow us to showcase all of our projects all withtin one single place

    `
  }
];
