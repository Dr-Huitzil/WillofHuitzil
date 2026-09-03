// src/App.jsx (Core Structure)

import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Hero from './components/sections/Hero/Hero';
import Projects from './components/sections/Projects/Projects';
import CurrentWork from './components/sections/CurrentWork/CurrentWork';
import BlogSection from './components/sections/Blog/BlogSection';
import Timeline from './components/sections/Timeline/Timeline';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/layout/Footer/Footer';
import BlogPage from './pages/BlogPage';

import { portfolioData } from './data/portfolioData';
import { ticketsData } from './data/tickets';
import { blogPosts } from './data/blogData';
import LoadingScreen from './components/ui/LoadingScreen/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      {/* Navbar shows on all routes */}
      {location.pathname !== '/blog' && <Navbar />}
      {location.pathname === '/blog' && <Navbar />}

      <Routes>
        <Route path="/" element={
          <div className="portfolio-app-root">
            <div className="hud-container hud-surface">
              <main>
                <Hero profile={portfolioData.profile} />
                <Projects projects={portfolioData.projects} />
                <CurrentWork tickets={ticketsData} />
                <BlogSection posts={blogPosts} />
                <Timeline 
                  experience={portfolioData.experience} 
                  certifications={portfolioData.certifications}
                  education={portfolioData.education}
                  proficiencies={portfolioData.proficiencies} 
                  publications={portfolioData.publications}
                />
              </main>
            </div>

            <div className="contact-hud-wrapper hud-surface">
              <Contact links={portfolioData.profile.links} />
            </div>
            
            <Footer />
          </div>
        } />
        
        <Route path="/blog" element={
          <>
            <BlogPage />
            <Footer />
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
