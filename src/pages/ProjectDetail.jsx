import { motion } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import ProjectVisual from "../components/ProjectVisual";
import { projectById } from "../data/projects";

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectById[projectId];

  if (!project) return <Navigate to="/" replace />;

  return (
    <main className="project-detail-page">
      <section className="project-detail-hero">
        <motion.div
          className="project-detail-intro"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Link className="project-back-link" to="/#projects">← Projelere dön</Link>
          <p>{project.number} / {project.category}</p>
          <h1>{project.title}</h1>
          <p className="project-detail-lead">{project.summary}</p>

          <div className="project-detail-actions">
            {project.github ? (
              <a className="premium-button primary" href={project.github} target="_blank" rel="noreferrer">GitHub Repository ↗</a>
            ) : (
              <span className="private-project-pill">PRIVATE REPOSITORY</span>
            )}
            <span className="project-status-pill">{project.status}</span>
          </div>
        </motion.div>

        <motion.div
          className="project-detail-cover"
          initial={{ opacity: 0, y: 45, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12 }}
        >
          <ProjectVisual project={project} />
        </motion.div>
      </section>

      <section className="project-detail-overview">
        <motion.div
          className="project-overview-copy"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <span>PROJECT STORY</span>
          <h2>Problemden mimariye.</h2>
          <p>{project.description}</p>
        </motion.div>

        <motion.div
          className="project-overview-metric"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.1 }}
        >
          <strong>{project.metric}</strong>
          <span>{project.metricLabel}</span>
        </motion.div>
      </section>

      <section className="project-detail-feature-grid">
        {project.highlights.map((highlight, index) => (
          <motion.article
            key={highlight}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.05 }}
          >
            <span>0{index + 1}</span>
            <h3>{highlight}</h3>
          </motion.article>
        ))}
      </section>

      {project.visuals?.length ? (
        <section className="project-detail-visuals">
          <motion.div
            className="project-visuals-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span>VISUAL ARCHIVE</span>
            <h2>Projeden gerçek kareler.</h2>
          </motion.div>

          {project.visuals.map((visual, index) => (
            <motion.figure
              className="project-detail-figure"
              key={visual.src}
              initial={{ opacity: 0, y: 60, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.75 }}
            >
              <div><img src={visual.src} alt={visual.title} loading="lazy" /></div>
              <figcaption><span>0{index + 1}</span><h3>{visual.title}</h3><p>{visual.caption}</p></figcaption>
            </motion.figure>
          ))}
        </section>
      ) : null}

      <section className="project-detail-stack">
        <span>TECH STACK</span>
        <div>{project.tech.map((tech) => <b key={tech}>{tech}</b>)}</div>
      </section>
    </main>
  );
}

export default ProjectDetail;
