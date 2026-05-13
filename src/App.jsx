// src/App.jsx (Core Structure)

import { useState } from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import Hero from './components/sections/Hero/Hero';
import Projects from './components/sections/Projects/Projects';
import Timeline from './components/sections/Timeline/Timeline';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/layout/Footer/Footer';

import { portfolioData } from './data/portfolioData';
import LoadingScreen from './components/ui/LoadingScreen/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="portfolio-app-root">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
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
            publications={portfolioData.publications}
          />
        </main>
      </div>

      <div className="contact-hud-wrapper">
        <Contact links={portfolioData.profile.links} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
