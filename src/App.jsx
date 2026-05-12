// src/App.jsx (Core Structure)

import { useState } from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import Hero from './components/sections/Hero/Hero';
import Projects from './components/sections/Projects/Projects';
import Timeline from './components/sections/Timeline/Timeline';
import Footer from './components/layout/Footer/Footer';

// Import the centralized data
import { portfolioData } from './data/portfolioData';

function App() {
  return (
    <div className="portfolio-app-root">
      <Navbar />
      <div className="hud-container">
        <main>
          <Hero profile={portfolioData.profile} />
          {/* Pass data and trigger function down as props */}
          <Projects projects={portfolioData.projects} />
          <Timeline 
            experience={portfolioData.experience} 
            certifications={portfolioData.certifications}
            education={portfolioData.education}
            proficiencies={portfolioData.proficiencies} 
          />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
