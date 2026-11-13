// src/data/portfolioData.js
import { endpointToolkitDetails } from './projectDetails/endpointToolkit';
import { endpointScripts } from './projectDetails/endpointScripts';
import { humbleMumbleDetails } from './projectDetails/humbleMumble';
import { esteCosmosDetails } from './projectDetails/esteCosmos';
import { roboticsDetails } from './projectDetails/robotics';
import { mindMeltDetails } from './projectDetails/mindMelt';
import { clinicaDeSaludDetails } from './experienceDetails/clinicaDeSalud';
import { clinicaDeSaludLong } from './experienceDetails/clinicaDeSaludLong';
import { proActDetails } from './experienceDetails/proActDetails';
import { proActLong } from './experienceDetails/proActLong';
import { mannsFreshDetails } from './experienceDetails/mannsFreshDetails';
import { mannsFreshLong } from './experienceDetails/mannsFreshLong';
import resumePDF from './resume/IvanAlier-Reyes(Resume).pdf';

//images
//projects
import mindmeltHomePage from '../assets/images/mindMelt/mindMeltHomePage.webp';
import esteCosmosHomePage from '../assets/images/esteCosmos/esteCosmosHomePage.webp';
import humbleMumblePreview from '../assets/images/humbleMumble/humbleMumblePreview.svg';
import endpointToolkitPreview from '../assets/images/endpointToolkit/endpointToolkitPreview.svg';
import roboticsPreview from '../assets/images/robotics/roboticsPreview.svg';

//certs
import secPlus from './certs/Security+.png';

export const portfolioData = {
  profile: {
    name: "Ivan Alier-Reyes",
    title: "SYSTEMS & ENDPOINT AUTOMATION // INFRASTRUCTURE & CS",
    tagline: "Bridging Enterprise Infrastructure, Automation & Applied Computing",
    bio: "Computer Science student at CSUMB with a multi-STEM foundation, building reliable systems from enterprise IT operations to edge software.",
    links: {
      github: "https://github.com/Dr-Huitzil",
      linkedin: "https://www.linkedin.com/in/ivan-alier-reyes",
      website: "https://WillofHuitzil.com",
      resume: resumePDF
    }
  },
  projects: [
    {
      id: 1,
      title: "Mind Melt",
      tags: ["React", "Vite", "Firebase", "GCP"],
      description: "A multimedia production platform built with React, Google Cloud Storage, and Firebase supporting multi-channel YouTube, podcast, and AV broadcast workflows.",
      longDescription: mindMeltDetails,
      date: "August 2022 - Present",
      imagePlaceholder: mindmeltHomePage,
      github: "https://github.com/Dr-Huitzil/mind_melt_me",
      demo: "https://mindmelt.org"
    },
    {
      id: 2,
      title: "Este Cosmos (Web)",
      tags: ["React", "Vite", "Edge Impulse", "Machine Learning"],
      description: "A financial and diagnostic application designed to automate vehicle telemetry tracking and calculate net fiscal position utilizing offline TinyML models.",
      longDescription: esteCosmosDetails,
      date: "April 2026 - Present",
      imagePlaceholder: esteCosmosHomePage,
      github: "https://github.com/Dr-Huitzil/este-cosmos-sandbox",
      demo: "https://estecosmos.netlify.app"
    },
    {
      id: 3,
      title: "Humble-Mumble",
      tags: ["Python", "PowerShell", "NinjaOne RMM", "Huntress EDR", "Active Directory"],
      description: "Enterprise fleet hygiene & reconciliation engine cross-referencing NinjaOne RMM, Huntress EDR, and Active Directory to catch orphaned assets and dispatch automated Google Tasks.",
      longDescription: humbleMumbleDetails,
      date: "2026 - Present",
      imagePlaceholder: humbleMumblePreview,
      github: "https://github.com/Dr-Huitzil/Humble-Mumble",
      demo: null
    },
    {
      id: 4,
      title: "Endpoint Automation Toolkit",
      tags: ["PowerShell", "Windows 11", "AutoUnattend", "RMM"],
      description: "Sanitized suite of 45+ PowerShell 5.1+ scripts, AutoUnattend.xml OOBE templates, BitLocker TPM+PIN escrow, and multi-site IT runbooks across 8 operational domains.",
      longDescription: endpointToolkitDetails,
      scripts: endpointScripts,
      date: "2025 - Present",
      imagePlaceholder: endpointToolkitPreview,
      github: "https://github.com/Dr-Huitzil/windows-endpoint-automation-toolkit",
      demo: null
    },
    {
      id: 5,
      title: "FRC Team 7777 Robotics",
      tags: ["Java", "WPILib", "Robotics", "PID Control", "Odometry"],
      description: "Autonomous robotics platform and subsystem control suite for FIRST Robotics Team 7777, featuring closed-loop PID velocity control, gyro odometry, and pneumatic interlocks.",
      longDescription: roboticsDetails,
      date: "2017 - 2020",
      imagePlaceholder: roboticsPreview,
      github: "https://github.com/Dr-Huitzil/Robotics",
      demo: null
    }
  ],
  experience: [
    {
      id: 1,
      role: "IT Technician",
      company: "Clinica De Salud del Valle de Salinas (CSVS)",
      period: "May 2025 - Present",
      description: "Supported the deployment and refresh of 500+ Windows 11 endpoints across 18 facilities, authored 40+ PowerShell automation scripts, executed multi-site network rollouts, and maintained a 170+ document internal IT knowledge base.",
      details: clinicaDeSaludDetails,
      longDescription: clinicaDeSaludLong,
      image: null
    },
    {
      id: 2,
      role: "IT & Office Support Specialist",
      company: "PRO*ACT",
      period: "Dec 2024 - May 2025",
      description: "Administered 200+ Active Directory and Microsoft 365 accounts (MFA, DLP, mail flow), resolved critical ProSQL/FTP order disruptions, and supported endpoint hardware repairs and asset tracking.",
      details: proActDetails,
      longDescription: proActLong,
      image: null
    },
    {
      id: 3,
      role: "IT Desktop Support Technician (Contract)",
      company: "Mann's Fresh Vegetables (Mann Packing Co.)",
      period: "Aug 2024 - Nov 2024",
      description: "Managed Active Directory accounts, Group Policy Objects, new-hire workstation imaging, and mobile device security via MDM while driving incident resolution within SLAs.",
      details: mannsFreshDetails,
      longDescription: mannsFreshLong,
      image: null
    }
  ],
  education: [
    {
      id: 1,
      degree: "B.S. Computer Science (Expected Dec 2027)",
      school: "California State University, Monterey Bay",
      period: "May 2024 - Expected Dec 2027",
      image: "/csumb-logo.svg",
      icon: "Code"
    },
    {
      id: 2,
      degree: "A.S. Physics | Engineering | Mathematics",
      school: "Hartnell College (May 2025)",
      period: "Mar 2024 - May 2025",
      image: null,
      icon: "Cpu"
    },
    {
      id: 3,
      degree: "A.S. Computer Science | Zoology/Biology",
      school: "Hartnell College (May 2022)",
      period: "Jun 2019 - May 2022",
      image: null,
      icon: "BookOpen"
    },
    {
      id: 4,
      degree: "Intermediate Android Development",
      school: "CodePath (2023)",
      period: "Feb 2023 - May 2023",
      image: null,
      icon: "Terminal"
    }
  ],
  certifications: [
    {
      id: 1,
      title: "CompTIA Security+",
      subtitle: "COMPTIA (ACTIVE)",
      icon: "ShieldCheck",
      image: secPlus
    }
  ],
  proficiencies: [
    "PowerShell 5.1+ Automation",
    "Windows 11 (WIM / AutoUnattend)",
    "NinjaOne RMM & Policy Routing",
    "Active Directory & Group Policy",
    "Huntress EDR & Endpoint Security",
    "Microsoft 365 & Identity Hardening",
    "Cisco Catalyst / Meraki & Auvik",
    "BitLocker TPM 2.0 & Key Escrow",
    "Python Fleet Hygiene (Humble-Mumble)",
    "Obsidian Knowledge Architecture",
    "React / Vite / Firebase / GCP"
  ],
  publications: [
    {
      id: 1,
      title: "The complete mitochondrial genome of the strawberry aphid Chaetosiphon fragaefolii Cockerell, 1901 (Hemiptera: Aphididae) from California, USA",
      journal: "Published Research",
      date: "2021 Jul 19",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8291070/",
      icon: "FileText"
    }
  ]
};
