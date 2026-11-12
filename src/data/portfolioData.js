// src/data/portfolioData.js
import { endpointToolkitDetails } from './projectDetails/endpointToolkit';
import { esteCosmosDetails } from './projectDetails/esteCosmos';
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
import endpointToolkitPreview from '../assets/images/endpointToolkit/endpointToolkitPreview.svg';
import mindmeltHomePage from '../assets/images/mindMelt/mindMeltHomePage.webp';
import esteCosmosHomePage from '../assets/images/esteCosmos/esteCosmosHomePage.webp';

//certs
import secPlus from './certs/Security+.png';

export const portfolioData = {
  profile: {
    name: "Ivan Alier-Reyes",
    title: "SYSTEMS & ENDPOINT AUTOMATION // INFRASTRUCTURE & CS",
    tagline: "Bridging Enterprise Infrastructure, Endpoint Automation & Applied Computing",
    bio: "Computer Science student at CSUMB with a multi-STEM Associate foundation across Computer Science, Physics, Engineering, Mathematics, and Biology. Focused on multi-site healthcare IT operations, zero-touch Windows 11 provisioning, PowerShell automation, and full-stack/Edge ML software engineering.",
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
      title: "Endpoint Automation Toolkit",
      tags: ["PowerShell", "Windows 11", "AutoUnattend", "RMM"],
      description: "Sanitized PowerShell 5.1+ provisioning suite, AutoUnattend.xml templates, BitLocker escrow tooling, DellBIOSProvider Wake-on-LAN, and multi-site network runbooks.",
      longDescription: endpointToolkitDetails,
      date: "2025 - Present",
      imagePlaceholder: endpointToolkitPreview,
      github: "https://github.com/Dr-Huitzil/windows-endpoint-automation-toolkit",
      demo: null
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
      title: "Mind Melt",
      tags: ["React", "Vite", "Firebase", "GCP"],
      description: "A multimedia production platform built with React, Google Cloud Storage, and Firebase supporting multi-channel YouTube, podcast, and AV broadcast workflows.",
      longDescription: mindMeltDetails,
      date: "August 2022 - Present",
      imagePlaceholder: mindmeltHomePage,
      github: "https://github.com/Dr-Huitzil/mind_melt_me",
      demo: "https://mindmelt.org"
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
      role: "IT Desktop Support Technician",
      company: "Mann's Fresh Vegetables (Mann Packing Co.)",
      period: "Aug 2024 - Nov 2024",
      description: "Deployed workstations, managed Active Directory/GPOs, and secured mobile devices via MDM while driving rapid incident resolution within organizational SLAs.",
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
    "PowerShell 5.1 Automation",
    "Windows 11 (WIM / AutoUnattend)",
    "NinjaOne RMM",
    "Active Directory / GPO",
    "Microsoft 365 & Identity Security",
    "Cisco Catalyst / Meraki & Auvik",
    "BitLocker & Endpoint Hardening",
    "Obsidian Knowledge Architecture",
    "React / Vite / Firebase / Python"
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
