
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Ghaith Home",
    category: "E-Commerce / React",
    description:
      "A bilingual home-goods catalog built with React, Vite, and Supabase.",
    technologies: ["React", "Vite", "Supabase"],
    github: "https://github.com/fatimabakri123/bridal-home",
    live: "https://bridal-home-8cvn.vercel.app/",
  },
  {
    title: "Beiroutique",
    category: "Laravel Marketplace",
    description:
      "A marketplace connecting Lebanese shops with customers in one platform.",
    technologies: ["Laravel", "PHP", "MySQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Moto Taxi System",
    category: "Ride Management",
    description:
      "A real-time motorcycle taxi management system with driver tracking.",
    technologies: ["Next.js", "MySQL", "Leaflet"],
    github: "https://github.com/adnanminawi/Moto-delivery-Systerm",
    live: "#",
  },
  {
    title: "Glow",
    category: "Digital Presence",
    description:
      "A digital presence concept helping businesses build and improve their online identity.",
    technologies: ["React", "Web Design"],
    github: "#",
    live: "https://www.instagram.com/glow_with_phatima?stkn=MW1oZmtqdWlwMWpwdQ==",
  },
];

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="section-container">
        {/* Heading */}
        <div className="section-heading projects-heading">
          <div>
            <p className="section-label">FEATURED PROJECTS</p>
            <h2>Things I've built.</h2>
          </div>

          <span className="project-count">04 PROJECTS</span>
        </div>

        {/* Projects */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              {/* Number */}
              <div className="project-number">
                0{index + 1}
              </div>

              {/* Preview */}
              <div className="project-preview">
                <span>{project.title}</span>
              </div>

              {/* Content */}
              <div className="project-content">
                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="technology-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>GitHub</span>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={17} />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

