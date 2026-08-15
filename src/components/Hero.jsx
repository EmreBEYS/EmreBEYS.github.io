import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="top" className="premium-hero">
      <div className="hero-grid-overlay" />
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <motion.div
        className="premium-hero-inner"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <p className="hero-eyebrow">Computer Engineering · Software Developer</p>
        <h1>Yunus Emre <span>KUL</span></h1>
        <p className="hero-lead">
          Java, backend sistemleri, veritabanı mimarileri ve yapay zeka üzerine çalışan;
          fikirleri çalışan ve ölçülebilir yazılım projelerine dönüştüren geliştirici.
        </p>

        <div className="hero-actions">
          <a className="premium-button primary" href="#projects">Projelerimi Gör <span>↘</span></a>
          <a className="premium-button secondary" href="https://github.com/EmreBEYS" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>

        <div className="hero-metrics">
          <div><strong>10+</strong><span>GitHub Repo</span></div>
          <div><strong>8+</strong><span>Proje</span></div>
          <div><strong>4.</strong><span>Sınıf</span></div>
          <div><strong>Java</strong><span>Ana Odak</span></div>
        </div>
      </motion.div>

      <div className="hero-scroll-hint"><span>SCROLL</span><i /></div>
    </section>
  );
}

export default Hero;
