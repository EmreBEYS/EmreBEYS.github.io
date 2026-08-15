import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const grades = [
  {
    grade: "1-sinif",
    number: "01",
    title: "1. Sınıf",
    subtitle: "Engineering Foundation",
    desc: "Temel programlama, matematik ve mühendisliğe giriş dersleri.",
    visual: "foundation",
    tags: ["C", "Matematik", "Mühendislik"],
  },
  {
    grade: "2-sinif",
    number: "02",
    title: "2. Sınıf",
    subtitle: "Computer Science Core",
    desc: "Veri yapıları, OOP, algoritmalar ve bilgisayar biliminin temel yapı taşları.",
    visual: "algorithm",
    tags: ["Java", "OOP", "Algorithms"],
  },
  {
    grade: "3-sinif",
    number: "03",
    title: "3. Sınıf",
    subtitle: "Systems & Intelligence",
    desc: "Bilgisayar ağları, veritabanı, yapay zeka ve sistem odaklı dersler.",
    visual: "systems",
    tags: ["Networks", "Database", "AI"],
  },
  {
    grade: "gelecek-donem",
    number: "04",
    title: "4. Sınıf",
    subtitle: "Advanced Engineering",
    desc: "Bitirme, ileri seviye seçmeli dersler ve uzmanlık çalışmalarının arşivi.",
    visual: "advanced",
    tags: ["Research", "Systems", "Projects"],
  },
];

function EngineeringVisual({ type }) {
  return (
    <div className={`engineering-visual engineering-visual-${type}`} aria-hidden="true">
      <div className="engineering-grid" />
      <div className="engineering-orbit orbit-one" />
      <div className="engineering-orbit orbit-two" />
      <div className="engineering-chip">
        <i /><i /><i /><i />
        <span>{type === "foundation" ? "ENG" : type === "algorithm" ? "ALGO" : type === "systems" ? "SYS" : "R&D"}</span>
      </div>
      <div className="engineering-signal"><i /><i /><i /><i /><i /></div>
    </div>
  );
}

function NotesSection() {
  return (
    <section id="notes" className="premium-section premium-notes-section">
      <motion.div
        className="premium-section-heading notes-premium-heading"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65 }}
      >
        <span>03 — AKADEMİK ARŞİV</span>
        <h2>Mühendislik notları,<br />tek bir arşivde.</h2>
        <p>Dersleri yalnızca listelemek yerine; sınıf, konu ve mühendislik alanına göre görsel bir akademik arşiv olarak sunuyorum.</p>
      </motion.div>

      <div className="notes-story-grid">
        {grades.map((item, index) => (
          <motion.div
            key={item.grade}
            initial={{ opacity: 0, y: 44, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.65, delay: index * 0.05 }}
          >
            <Link to={`/notes/${item.grade}`} className="notes-story-card">
              <div className="notes-story-visual-wrap">
                <EngineeringVisual type={item.visual} />
                <span className="notes-story-number">{item.number}</span>
              </div>

              <div className="notes-story-copy">
                <span>{item.subtitle}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <div className="notes-story-footer">
                  <div className="premium-tech-list">
                    {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <b aria-hidden="true">→</b>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default NotesSection;
