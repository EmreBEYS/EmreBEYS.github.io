import { motion } from "framer-motion";

const skillGroups = [
  { title: "Backend & Core", items: ["Java", "Spring Boot", "REST API", "DBMS Architecture"] },
  { title: "Database", items: ["PostgreSQL", "SQL", "YEKDB", "Data Modeling"] },
  { title: "AI & Vision", items: ["Python", "YOLO", "OpenCV", "Deep Learning"] },
  { title: "Frontend & Mobile", items: ["React", "JavaScript", "Kotlin", "Firebase"] },
];

function AboutSection() {
  return (
    <section id="about" className="premium-section premium-about">
      <div className="premium-section-heading">
        <span>01 — HAKKIMDA</span>
        <h2>Sadece kod yazmıyorum.<br />Sistem inşa ediyorum.</h2>
      </div>

      <div className="premium-about-grid">
        <motion.div
          className="about-editorial-copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="about-large-copy">
            İnönü Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Backend geliştirme,
            veritabanı sistemleri, veri yapıları ve gerçek hayat problemlerine yönelik yazılım
            çözümleri üzerine çalışıyorum.
          </p>
          <p>
            YEKDB ile sıfırdan bir veritabanı yönetim sistemi geliştirirken; Java veri yapıları,
            toplu taşıma karar destek sistemleri ve görüntü işleme projeleriyle algoritma,
            mimari ve ürün geliştirme taraflarını birlikte ilerletiyorum.
          </p>
          <div className="about-signature">YEK / EmreBEYS</div>
        </motion.div>

        <motion.div
          className="skill-matrix"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.1 }}
        >
          {skillGroups.map((group, index) => (
            <div className="skill-group" key={group.title}>
              <span>0{index + 1}</span>
              <h3>{group.title}</h3>
              <div>{group.items.map((item) => <em key={item}>{item}</em>)}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
