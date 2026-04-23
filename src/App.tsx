import React from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero
          name="Anjali Parikh"
          firstName="Anjali"
          lastName="Parikh"
          tagline="Full-Stack Software Engineer with 4+ years of experience building and scaling customer facing and backend systems serving millions of users."
        />

        <Timeline />

        <Projects />

        <Contact />
      </main>

      <footer className="footer">
        <p>
          Designed &amp; built by <span>Anjali Parikh</span> — {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
};

export default App;
