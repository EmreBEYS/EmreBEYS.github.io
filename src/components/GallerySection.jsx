import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectVisual from "./ProjectVisual";

function GallerySection() {
  const featuredIds = ["yekdb", "java-data-structures", "motas-smart-dispatch"];
  const featured = featuredIds.map((id) => projects.find((project) => project.id === id)).filter(Boolean);

  return (
    <section id="gallery" className="premium-section project-gallery-section">
      <motion.div
        className="premium-section-heading"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <span>05 — GALERİ</span>
        <h2>Kodun arkasındaki<br />görsel dünya.</h2>
      </motion.div>

      <div className="project-gallery-stories">
        {featured.map((project, index) => (
          <motion.div
            className="project-gallery-story"
            key={project.id}
            initial={{ opacity: 0, y: 54 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
          >
            <Link to={`/projects/${project.id}`}>
              <ProjectVisual project={project} />
              <div className="project-gallery-caption">
                <span>{project.accent}</span>
                <h3>{project.shortTitle}</h3>
                <p>Projeyi içeride keşfet <b>→</b></p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default GallerySection;
