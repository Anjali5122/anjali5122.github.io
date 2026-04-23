import React from 'react';

interface HeroProps {
  name: string;
  firstName: string;
  lastName: string;
  tagline: string;
}

const Hero: React.FC<HeroProps> = ({ firstName, lastName, tagline }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="hero-content">
        <p className="hero-pre">[ Portfolio — 2025 ]</p>

        <h1 className="hero-name">
          <span className="first">{firstName}</span>
          <span className="last">{lastName}</span>
        </h1>

        <div className="hero-title-line">
          <h2 className="hero-job-title">
            <span className="accent">Software</span> Engineer
          </h2>
        </div>

        <p className="hero-description">{tagline}</p>

        <div className="hero-cta">
          <a
            href="#projects"
            className="btn-primary"
            onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}
          >
            View Work
          </a>
          <a
            href="#contact"
            className="btn-secondary"
            onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
