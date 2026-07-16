import "./Projects.css";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-header">

        <p className="section-subtitle">
          FEATURED PROJECTS
        </p>

        <h2 className="section-title">
          Projects That <span>Create Impact.</span>
        </h2>

        <p className="section-description">
          A curated collection of Artificial Intelligence, Full Stack and
          Data Analytics projects focused on solving real-world problems
          through modern software engineering.
        </p>

      </div>

      <div className="projects-wrapper">

        {projects.map((project) => (

          <article
            className="project-card"
            key={project.id}
          >

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <h4>{project.subtitle}</h4>

              <p>{project.description}</p>

              <div className="project-tech">

                {project.tech.map((tech, index) => (

                  <span key={index}>
                    {tech}
                  </span>

                ))}

              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project →
              </a>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Projects;