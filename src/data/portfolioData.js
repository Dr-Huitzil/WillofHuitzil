// src/data/portfolioData.js
import { esteCosmosDetails } from './projectDetails/esteCosmos';
import { mindMeltDetails } from './projectDetails/mindMelt';

export const portfolioData = {
  profile: {
    name: "Ivan Alier-Reyes",
    title: "FULL STACK ARCHITECT // IT PROFESSIONAL",
    links: {
      github: "https://github.com/ivan-alier-reyes",
      linkedin: "https://linkedin.com",
      resume: "#resume"
    }
  },
  projects: [
    {
      id: 1,
      title: "Este Cosmos",
      tags: ["React", "Vite", "Firebase"],
      description: "A full-stack mobile fuel tracking application utilizing Firebase for backend synchronization and a React frontend.",
      longDescription: esteCosmosDetails,
      date: "August 2023",
      imagePlaceholder: "/path/to/verdant-odo.jpg",
      github: "https://github.com/ivan-alier-reyes",
      demo: "https://estecosmos.netlify.app"
    },
    {
      id: 2,
      title: "Mind Melt",
      tags: ["React", "Firebase"],
      description: "Website for multi media project co created by my friends and I called Mind Melt.",
      longDescription: mindMeltDetails,
      date: "June 2024",
      imagePlaceholder: "/path/to/rmm-automation.jpg",
      github: "https://github.com/ivan-alier-reyes",
      demo: "https://mindmelt.org"
    }
  ],
  experience: [
    {
      id: 1,
      role: "IT Technician",
      company: "Clinica De Salud (CSVS)",
      period: "May 2025 - PRESENT",
      description: "Installed and configured hardware, software, and network resources for clinical staff, ensuring seamless daily operations."
    },
    {
      id: 2,
      role: "IT & Office Support Specialist",
      company: "PRO*ACT",
      period: "Dec 2024 - May 2025",
      description: "Supported the functionality of an end-to-end fresh produce supply chain management platform, coordinating hardware, software, and network resources to ensure operational continuity."
    },
    {
      id: 3,
      role: "IT Desktop Support",
      company: "Fresh Del Monte",
      period: "Aug 2024 - Dec 2024",
      description: "Provided on-site and remote technical support to end-users, resolving hardware, software, and connectivity issues."
    }
  ],
  education: [
    {
      id: 1,
      degree: "B.S. Computer Science",
      school: "CSU Monterey Bay",
      period: "2026 - 2027",
      image: "/path/to/degree.jpg",
      icon: "BookOpen"
    },
  ],
  certifications: [
    {
      id: 1,
      title: "AWS Architect",
      subtitle: "CLOUD ECOLOGY",
      icon: "Network",
      image: "/path/to/aws-cert.jpg"
    },
    {
      id: 2,
      title: "Certified Ethical Hacker",
      subtitle: "EC-COUNCIL",
      icon: "Shield",
      image: "/path/to/ceh-cert.jpg"
    },
    {
      id: 3,
      title: "K8s Administrator",
      subtitle: "CNCF",
      icon: "Cpu",
      image: "/path/to/k8s-cert.jpg"
    }
  ],
  proficiencies: [
    "Infrastructure",
    "Cloud Arch",
    "React/NextJS",
    "Network Sec",
    "Kubernetes",
    "Go",
    "Python"
  ]
};
