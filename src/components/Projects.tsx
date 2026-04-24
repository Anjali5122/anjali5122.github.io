import React, { useEffect, useRef } from 'react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Xero - Purchase Orders',
    description:
      'Redesigned the purchase order creation flow in Xero’s accounting software, improving usability and reducing errors. Implemented a microservices architecture to handle complex business logic and integrations.',
    tags: ['React', 'Javascript', 'Typescript', 'Microservices', 'C#', '.NET'],
    liveUrl: 'https://www.xero.com/ca/accounting-software/create-purchase-orders/',
  },
  {
    title: 'Xero - Inventory Plus',
    description:
      'Launched Inventory Plus, a new inventory management feature in Xero’s accounting software. Led the development of the backend services using PHP, and implemented a modern frontend using React. Additonal functionality includes integration with third parties (Amazon, Shopify) and ability to manage inventory across multiple locations.',
    tags: ['React', 'Javascript', 'Typescript', 'PHP', 'Teamcity', 'k6', 'Terraform'],
    liveUrl: 'https://www.xero.com/us/accounting-software/manage-inventory/inventory-plus/',
  },
  // {
  //   title: 'Mini Wordle',
  //   description:
  //     'A web-based word puzzle game built with React and TypeScript. Offers slick design and smooth user experience.',
  //   tags: ['React', 'TypeScript', 'JavaScript'],
  //   liveUrl: '#',
  //   githubUrl: '#',
  // },
  {
    title: 'Bank Statement Generator',
    description:
      'Bank statement generator that creates realistic  bank statements PDFs for testing financial applications. Customizable column and transactions.',
    tags: ['Javascript', 'Typescript'],
    githubUrl: 'https://github.com/anjali-xero/bank-statement-creator',
  },
  {
    title: 'Computer Vision Clothing Size Estimator',
    description:
      'Capstone project using OpenCV and a custom CNN to estimate clothing sizes from user-uploaded photos. Achieved 85% accuracy on a test set of 1,000 images.',
    tags: ['Python', 'Javascript'],
  },
];

const Projects: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <p className="section-label">Selected Work</p>
          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={i}
              className="project-card"
              ref={(el) => (cardRefs.current[i] = el)}
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
            >
              <p className="project-number">
                {String(i + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </p>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="timeline-tags" style={{ marginBottom: '1.25rem' }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <div className="project-links">
                {project.githubUrl && (
                  <a href={project.githubUrl} className="project-link" target='_blank'>
                    GitHub ↗
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} className="project-link" target='_blank'>
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
