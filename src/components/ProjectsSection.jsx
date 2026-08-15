import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectVisual from "./ProjectVisual";
import { projects } from "../data/projects";

function ProjectsSection() {
  return (
    <section id="projects" className="premium-section premium-projects">
      <motion.div
        className="premium-section-heading projects-heading"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65 }}
      >
        <span>02 — PROJELER</span>
        <h2>Her proje,<br />kendi hikâyesi.</h2>
        <p>Karta tıkla; GitHub'a gitmeden önce projenin mimarisini, görsellerini ve geliştirme hikâyesini keşfet.</p>
      </motion.div>

      <div className="project-story-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 44, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.65, delay: index * 0.05 }}
          >
            <Link className="project-story-card" to={`/projects/${project.id}`}>
              <div className="project-story-visual-wrap">
                <ProjectVisual project={project} compact />
                <div className="project-story-badge">{project.status}</div>
              </div>

              <div className="project-story-copy">
                <div className="project-story-topline">
                  <span>{project.number}</span>
                  <em>{project.category}</em>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="project-story-footer">
                  <div className="premium-tech-list">
                    {project.tech.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                  <b aria-hidden="true">→</b>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <a className="all-projects-link" href="https://github.com/EmreBEYS" target="_blank" rel="noreferrer">
        Tüm repoları GitHub'da gör <span>↗</span>
      </a>
    </section>
  );
}

export default ProjectsSection;
