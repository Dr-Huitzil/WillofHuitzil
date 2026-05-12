// src/App.jsx (Core Structure)

import { useState } from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import Hero from './components/sections/Hero/Hero';
import Projects from './components/sections/Projects/Projects';
import Timeline from './components/sections/Timeline/Timeline';
import ProjectModal from './components/sections/Projects/ProjectModal';
import Footer from './components/layout/Footer/Footer';

// Import the centralized data
import { portfolioData } from './data/portfolioData';

function App() {
  // Implement useState to manage the selected project logic
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
        <Hero profile={portfolioData.profile} />
        {/* Pass data and trigger function down as props */}
        <Projects projects={portfolioData.projects} onProjectClick={openModal} />
        <Timeline 
          experience={portfolioData.experience} 
          qualifications={portfolioData.qualifications} 
          proficiencies={portfolioData.proficiencies} 
        />
      </main>
      <Footer />

      {/* Conditional rendering of the modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
