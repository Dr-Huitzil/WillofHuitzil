// src/data/portfolioData.js

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
      title: "Verdant Odo",
      tags: ["React", "Vite", "Firebase"],
      description: "A full-stack mobile fuel tracking application utilizing Firebase for backend synchronization and a React frontend.",
      imagePlaceholder: "/path/to/verdant-odo.jpg"
    },
    {
      id: 2,
      title: "RMM Automation",
      tags: ["NinjaOne", "PowerShell"],
      description: "Developed and deployed automated PowerShell scripts through NinjaOne RMM for endpoint management and system debloating.",
      imagePlaceholder: "/path/to/rmm-automation.jpg"
    },
    {
      id: 3,
      title: "Hardware Refresh Initiative",
      tags: ["Infrastructure", "Cisco"],
      description: "Managed the imaging and deployment of 224 replacement devices, alongside the bulk liquidation logistics for decommissioned Cisco Catalyst 2960 switches.",
      imagePlaceholder: "/path/to/hardware-refresh.jpg"
    }
  ],
  experience: [
    {
      id: 1,
      role: "Lead Infrastructure Architect",
      company: "EMERALD_GROVE",
      period: "2022 - PRESENT",
      description: "Optimizing high-density infrastructure within Central American forest regions using solar-first protocols."
    },
    {
      id: 2,
      role: "Full Stack Engineer",
      company: "VIBRANT_NETWORKS",
      period: "2019 - 2022",
      description: "Built resilient, high-humidity tolerant network interfaces for edge computing clusters."
    }
  ],
  education: [
    {
      id: 1,
      degree: "B.S. Computer Science",
      school: "MAYA_TECH_INSTITUTE",
      period: "2015 - 2019",
      image: "/path/to/degree.jpg",
      icon: "BookOpen"
    }
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
