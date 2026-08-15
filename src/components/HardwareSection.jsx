import { motion } from "framer-motion";

const hardwareGroups = [
  {
    number: "01",
    eyebrow: "PRIMARY WORKSTATION",
    title: "Desktop Workstation",
    subtitle: "High-performance development rig",
    description:
      "Backend geliştirme, YEKDB, yapay zeka deneyleri, simülasyon ve günlük üretim işlerinde kullandığım ana sistem.",
    specs: [
      ["CPU", "Ryzen 7 7800X3D"],
      ["GPU", "RTX 4070 Super OC"],
      ["RAM", "64 GB DDR5"],
      ["STORAGE", "990 Pro 2 TB + 980 Pro 1 TB"],
    ],
    extras: ["2K 180 Hz", "FHD 100 Hz", "64 GB Memory", "3 TB NVMe"],
    type: "desktop",
  },
  {
    number: "02",
    eyebrow: "MOBILE DEVELOPMENT",
    title: "MacBook Air M4",
    subtitle: "Portable Apple development environment",
    description:
      "macOS tabanlı geliştirme, mobil proje akışı ve taşınabilir çalışma ortamım.",
    specs: [
      ["CHIP", "Apple M4"],
      ["DISPLAY", "15-inch"],
      ["OS", "macOS"],
      ["ROLE", "Mobile Development"],
    ],
    type: "laptop",
  },
  {
    number: "03",
    eyebrow: "DEVICE ECOSYSTEM",
    title: "Apple & Console Setup",
    subtitle: "Testing, productivity & entertainment",
    description:
      "Not alma, arayüz testleri ve farklı platformlardaki kullanıcı deneyimini gözlemlemek için tamamlayıcı cihazlar.",
    specs: [
      ["TABLET", "iPad Air 5 (M1)"],
      ["INPUT", "Apple Pencil USB-C"],
      ["CONSOLE", "PS5 Slim 1 TB"],
      ["AUDIO", "AirPods"],
    ],
    type: "devices",
  },
];

function HardwareVisual({ type }) {
  return (
    <div className={`hardware-visual hardware-${type}`} aria-hidden="true">
      <div className="hardware-grid" />
      <div className="hardware-glow hardware-glow-a" />
      <div className="hardware-glow hardware-glow-b" />

      {type === "desktop" && (
        <>
          <div className="hardware-monitor monitor-main">
            <div className="monitor-topbar"><i /><i /><i /><span>dev://workspace</span></div>
            <div className="monitor-code">
              <b>YEKDB</b>
              <span>storage.engine()</span>
              <span>query.execute()</span>
              <span>tests.pass()</span>
            </div>
          </div>
          <div className="hardware-monitor monitor-side">
            <div className="monitor-chart"><i /><i /><i /><i /></div>
            <span>PERFORMANCE</span>
          </div>
          <div className="hardware-tower">
            <i /><i /><i />
            <span>RTX</span>
          </div>
          <div className="desk-line" />
        </>
      )}

      {type === "laptop" && (
        <div className="hardware-laptop">
          <div className="laptop-screen">
            <small>MACBOOK AIR</small>
            <span>M4</span>
            <b>mobile dev</b>
          </div>
          <i />
        </div>
      )}

      {type === "devices" && (
        <div className="hardware-devices">
          <div className="device-tablet"><small>iPad Air</small><strong>M1</strong></div>
          <div className="device-console"><span>PS5</span></div>
          <div className="device-audio">◉</div>
        </div>
      )}

      <div className="hardware-scanline" />
    </div>
  );
}

function HardwareSection() {
  return (
    <section id="hardware" className="premium-section premium-hardware-section">
      <motion.div
        className="premium-section-heading hardware-heading"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <span>04 — DONANIM</span>
        <h2>Ürettiğim şeylerin<br />arkasındaki sistem.</h2>
        <p>
          Koddan veritabanına, mobil geliştirmeden simülasyona kadar kullandığım kişisel teknoloji ekosistemi.
        </p>
      </motion.div>

      <div className="hardware-story-grid">
        {hardwareGroups.map((item, index) => (
          <motion.article
            className={`hardware-story-card ${index === 0 ? "wide" : ""}`}
            key={item.title}
            initial={{ opacity: 0, y: 44, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: index * 0.06 }}
          >
            <div className="hardware-visual-wrap">
              <HardwareVisual type={item.type} />
              <span className="hardware-story-number">{item.number}</span>
            </div>

            <div className="hardware-story-copy">
              <span>{item.eyebrow}</span>
              <h3>{item.title}</h3>
              <em>{item.subtitle}</em>
              <p>{item.description}</p>

              <div className="hardware-spec-grid">
                {item.specs.map(([label, value]) => (
                  <div className="hardware-spec" key={label}>
                    <small>{label}</small>
                    <b>{value}</b>
                  </div>
                ))}
              </div>

              {item.extras && (
                <div className="hardware-extras">
                  {item.extras.map((extra) => <span key={extra}>{extra}</span>)}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default HardwareSection;
