// src/data/portfolioData.js
import { esteCosmosDetails } from './projectDetails/esteCosmos';
import { mindMeltDetails } from './projectDetails/mindMelt';
import { clinicaDeSaludDetails } from './experienceDetails/clinicaDeSalud';
import { proActDetails } from './experienceDetails/proActDetails';
import { mannsFreshDetails } from './experienceDetails/mannsFresh';
import { starphyreDetails } from './experienceDetails/starphyre';
import { resumePDF } from './resume/IvanAlierReyes_Resume.pdf';

export const portfolioData = {
  profile: {
    name: "Ivan Alier-Reyes",
    title: "IT SPECIALIST // CYBERSECURITY SPECIALIST",
    links: {
      github: "https://github.com/ivan-alier-reyes",
      linkedin: "https://www.linkedin.com/in/ivan-alier-reyes",
      website: "https://WillofHuitzil.com",
      resume: resumePDF
    }
  },
  projects: [
    {
      id: 1,
      title: "Este Cosmos",
      tags: ["React", "Vite", "Edge Impulse", "Machine Learning"],
      description: "A financial and diagnostic application designed to automate vehicle telemetry tracking and calculate net fiscal position utilizing machine learning models.",
      longDescription: esteCosmosDetails,
      date: "April 2026 - May 2026",
      imagePlaceholder: "/path/to/este-cosmos.jpg",
      github: "https://github.com/ivan-alier-reyes",
      demo: "https://estecosmos.netlify.app"
    },
    {
      id: 2,
      title: "Mind Melt",
      tags: ["React", "Vite", "Firebase", "GCP"],
      description: "A comprehensive multimedia production platform engineered with a modern web stack for content delivery and management.",
      longDescription: mindMeltDetails,
      date: "August 2022 - Present",
      imagePlaceholder: "/path/to/mind-melt.jpg",
      github: "https://github.com/ivan-alier-reyes",
      demo: "https://mindmelt.org"
    }
  ],
  experience: [
    {
      id: 1,
      role: "IT Technician",
      company: "Clinica De Salud del Valle de Salinas (CSVS)",
      period: "May 2025 - Present",
      description: "Orchestrated large-scale computer deployments via SmartDeploy and NinjaOne, automated provisioning with PowerShell, and provided critical on-site support across distributed clinical environments.",
      details: clinicaDeSaludDetails
    },
    {
      id: 2,
      role: "IT & Office Support Specialist",
      company: "PRO*ACT",
      period: "Jan 2025 - May 2025",
      description: "Administered AD user lifecycles and O365 tenant services while mitigating database disruptions and optimizing inventory tracking for enterprise supply chain operations.",
      details: proActDetails
    },
    {
      id: 3,
      role: "IT Desktop Support",
      company: "Mann's Fresh Vegetables (Mann Packing Co.)",
      period: "Aug 2024 - Nov 2024",
      description: "Deployed workstations, managed Active Directory/GPOs, and secured mobile devices via MDM while driving rapid incident resolution within organizational SLAs.",
      details: mannsFreshDetails
    },
    {
      id: 4,
      role: "Cyber Security Specialist",
      company: "Starphyre Digital Security Services",
      period: "Mar 2022 - Aug 2024",
      description: "Engineered robust network defenses, managed SIEM tools (Splunk), executed penetration testing, and authored disaster recovery initiatives to minimize organizational risk.",
      details: starphyreDetails
    }
  ],
  education: [
    {
      id: 1,
      degree: "B.S. Computer Science",
      school: "California State University, Monterey Bay",
      period: "Aug 2022 - Dec 2025",
      image: "/path/to/csumb-logo.jpg",
      icon: "Code"
    },
    {
      id: 2,
      degree: "A.S. Computer Science | A.S. Biology | A.S. Physics",
      school: "Hartnell College",
      period: "2019 - 2025",
      image: "/path/to/hartnell-logo.jpg",
      icon: "BookOpen"
    }
  ],
  certifications: [
    {
      id: 1,
      title: "Cisco CCNA",
      subtitle: "CISCO SYSTEMS",
      icon: "Network",
      image: "/path/to/ccna-cert.jpg"
    },
    {
      id: 2,
      title: "CompTIA Security+",
      subtitle: "COMPTIA",
      icon: "ShieldCheck",
      image: "/path/to/secplus-cert.jpg"
    },
    {
      id: 3,
      title: "CompTIA CySA+",
      subtitle: "COMPTIA",
      icon: "ShieldAlert",
      image: "/path/to/cysa-cert.jpg"
    },
    {
      id: 4,
      title: "CompTIA Network+",
      subtitle: "COMPTIA",
      icon: "Globe",
      image: "/path/to/netplus-cert.jpg"
    }
  ],
  proficiencies: [
    "PowerShell Automation",
    "Bash Scripting",
    "Active Directory / GPO",
    "OS Deployment (WIM/Answer Files)",
    "Endpoint Management (MDM/RMM)",
    "JavaScript / React / Vite",
    "Java & Python",
    "SQL Database Mgmt",
    "Network Routing / Cisco Configuration"
  ],
  publications: [
    {
      id: 1,
      title: "The complete mitochondrial genome of the strawberry aphid Chaetosiphon fragaefolii Cockerell, 1901 (Hemiptera: Aphididae) from California, USA",
      journal: "Published Research",
      date: "N/A",
      url: "https://www.linkedin.com/in/ivan-alier-reyes",
      icon: "FileText"
    }
  ]
};