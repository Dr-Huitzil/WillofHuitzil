// src/App.jsx (Core Structure)

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import ProjectModal from './components/ProjectModal';
import Footer from './components/Footer';

// 1. Definte the Project Data Structure
const projectData = [
  {
    id: 1,
    title: "Verdant Odo",
    tags: ["React", "Vite", "Firebase"],
    description: "A full-stack mobile fuel tracking application utilizing Firebase for backend synchronization and a React frontend.",
    imagePlaceholder: "/path/to/verdant-odo.jpg" // Add placeholders for screenshots
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
];

function App() {
  // 2. Implement useState to manage the selected project logic
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to pass to Projects/ProjectCard to trigger modal
  const openModal = (project) => {
    setSelectedProject(project);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio-app-root">
      <Navbar />
      <main>
        <Hero />
        {/* 3. Pass data and trigger function down as props */}
        <Projects projects={projectData} onProjectClick={openModal} />
        <Timeline />
      </main>
      <Footer />

      {/* 4. Conditional rendering of the modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
