import React, { useEffect, useRef } from 'react';

interface TimelineEntry {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  tags: string[];
}

const entries: TimelineEntry[] = [
  {
    period: 'Jan 2024 — Present',
    role: 'Full Stack Software Engineer',
    company: 'Xero - Accounting Software',
    location: 'Toronto, ON, Canada',
    description:
      'Rebuilt core UI components in React (Javascript/Typscript), improving integration across the Xero platform with over 80% customer satisfaction rate according to product surveys.',
    tags: ['React', 'TypeScript', 'Javascript', 'Node.js', 'PHP', 'C#', ".NET", 'PostgreSQL', 'SQL'],
  },
  {
    period: 'May 2023 — Jan 2024',
    role: 'Devops Engineer ',
    company: 'Xero - Accounting Software',
    location: 'Toronto, ON, Canada',
    description:
      'Migrated service from EC2 to Kubernetes, reducing deployment time by 10 minutes. Built automated TeamCity deployment pipelines to streamline infrastructure releases.',
    tags: ['AWS (EC2, S3, IAM, Secret Manager)', 'Kubernetes', 'Terraform', 'TeamCity'],
  },
  {
    period: 'May 2021 — Aug 2022',
    role: 'Software Engineer in Test',
    company: 'Xero - Accounting Software',
    location: 'Toronto, ON, Canada',
    description:
      'Delivered scalable feature enhancements for Hubdoc, directly supporting the processing of 10M+ documents annually and improving system reliability and user experience. Wrote/maintained unit, integration, and E2E tests to ensure reliability of critical features.',
    tags: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'SQL', 'PostgreSQL', 'Playwright', 'TeamCity']
  },
  {
    period: 'Sept 2018 — May 2023',
    role: 'B.Sc. Computer Science, Minor in Artificial Intelligence',
    company: 'University of Toronto',
    location: 'Toronto, ON, Canada',
    description:
      'Specialized in Computer Science with a Minor on AI. Capstone project using computer vision to determine clothing sizes for online retail.',
    tags: ['Data Structures and Algorithms', 'Distributed Systems', 'Operating systems', 'Python', 'Java', 'Mathematics', 'Statistics'],
  },
];

const Timeline: React.FC = () => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <div className="timeline-header">
          <p className="section-label">Career Path</p>
          <h2 className="section-title">
            My <span>Journey</span>
          </h2>
        </div>

        <div className="timeline">
          <div className="timeline-spine" />

          {entries.map((entry, i) => (
            <div
              key={i}
              className="timeline-item"
              ref={(el) => (itemRefs.current[i] = el)}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="timeline-node" />
              <p className="timeline-period">{entry.period}</p>
              <h3 className="timeline-role">{entry.role}</h3>
              <p className="timeline-company">
                <span>{entry.company}</span> — {entry.location}
              </p>
              <p className="timeline-desc">{entry.description}</p>
              <div className="timeline-tags">
                {entry.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
