import { motion } from "framer-motion";

const systemAreas = [
  {
    number: "01",
    eyebrow: "SERVER OPERATIONS",
    title: "Server & System Operations",
    subtitle: "Kurulum, servis ve sistem sürekliliği",
    description:
      "Sunucu ve istemci sistemlerinin kurulumu, temel yapılandırması, disk/servis kontrolleri ve günlük sistem operasyonlarında edindiğim saha deneyimi.",
    skills: ["Server Setup", "Windows / Linux", "Storage", "Service Checks", "Backup Workflow"],
    type: "server",
    wide: true,
  },
  {
    number: "02",
    eyebrow: "THERMAL & MAINTENANCE",
    title: "Thermal Maintenance",
    subtitle: "Soğutma, temizlik ve termal sağlık",
    description:
      "Masaüstü ve benzeri sistemlerde termal macun yenileme, fan ve hava akışı kontrolleri, sıcaklık takibi ve periyodik donanım bakımı.",
    skills: ["Thermal Paste", "Cooling", "Airflow", "Cleaning", "Temperature Check"],
    type: "thermal",
  },
  {
    number: "03",
    eyebrow: "BUILD & DIAGNOSTICS",
    title: "PC Build & Diagnostics",
    subtitle: "Parçadan çalışan sisteme",
    description:
      "Sistem toplama, parça değişimi, BIOS ayarları ve RAM / CPU / GPU / depolama kaynaklı sorunların teşhis edilmesi için uygulamalı çalışma.",
    skills: ["PC Build", "BIOS", "RAM / CPU / GPU", "Storage", "Stress Tests"],
    type: "diagnostics",
  },
  {
    number: "04",
    eyebrow: "NETWORK & INFRASTRUCTURE",
    title: "Network & Infrastructure",
    subtitle: "Bağlantıdan topolojiye",
    description:
      "Yerel ağ bağlantıları, IP ve erişim problemleri, Ethernet altyapısı ve temel router / switch seviyesindeki sistem kontrolleri.",
    skills: ["LAN", "Ethernet", "IP Troubleshooting", "Router / Switch", "Connectivity"],
    type: "network",
    wide: true,
  },
];

function ServerVisual() {
  return (
    <div className="systems-server-rack">
      {["CORE-01", "DATA-02", "BACKUP-03", "NODE-04"].map((name, index) => (
        <div className="rack-unit" key={name}>
          <span>{name}</span>
          <div className="rack-leds"><i /><i /><i /></div>
          <b>{index === 0 ? "ONLINE" : "READY"}</b>
        </div>
      ))}
      <div className="server-terminal">
        <span>$ systemctl status</span>
        <b>services: operational</b>
        <span>$ storage --health</span>
        <b>volumes: healthy</b>
      </div>
    </div>
  );
}

function ThermalVisual() {
  return (
    <div className="systems-thermal-visual">
      <div className="thermal-cpu"><span>CPU</span><i /></div>
      <div className="thermal-ring ring-one" />
      <div className="thermal-ring ring-two" />
      <div className="thermal-readout">
        <small>THERMAL HEALTH</small>
        <strong>STABLE</strong>
        <span>airflow / paste / fan check</span>
      </div>
      <div className="thermal-bars"><i /><i /><i /><i /><i /></div>
    </div>
  );
}

function DiagnosticsVisual() {
  return (
    <div className="systems-diagnostic-visual">
      <div className="diag-board">
        <span className="diag-chip">CPU</span>
        <span className="diag-ram">RAM</span>
        <span className="diag-gpu">GPU</span>
        <span className="diag-nvme">NVMe</span>
        <i className="trace t1" /><i className="trace t2" /><i className="trace t3" />
      </div>
      <div className="diag-status">
        <span><i /> POST</span>
        <span><i /> MEMORY</span>
        <span><i /> STORAGE</span>
      </div>
    </div>
  );
}

function NetworkVisual() {
  return (
    <div className="systems-network-visual">
      <div className="network-node main-node"><b>GW</b><small>gateway</small></div>
      <div className="network-node node-a"><b>01</b><small>server</small></div>
      <div className="network-node node-b"><b>02</b><small>client</small></div>
      <div className="network-node node-c"><b>03</b><small>switch</small></div>
      <svg viewBox="0 0 600 250" aria-hidden="true">
        <path d="M300 125 C230 80 175 65 120 65" />
        <path d="M300 125 C380 80 430 65 485 65" />
        <path d="M300 125 C305 175 360 205 455 205" />
      </svg>
      <div className="network-label">LAN / IP / ROUTING / CONNECTIVITY</div>
    </div>
  );
}

function SystemsVisual({ type }) {
  return (
    <div className={`systems-visual systems-${type}`} aria-hidden="true">
      <div className="systems-grid" />
      <div className="systems-ambient ambient-a" />
      <div className="systems-ambient ambient-b" />
      {type === "server" && <ServerVisual />}
      {type === "thermal" && <ThermalVisual />}
      {type === "diagnostics" && <DiagnosticsVisual />}
      {type === "network" && <NetworkVisual />}
    </div>
  );
}

function SystemsSection() {
  return (
    <section id="systems" className="premium-section premium-systems-section">
      <motion.div
        className="premium-section-heading systems-heading"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.28 }}
        transition={{ duration: 0.65 }}
      >
        <span>04 — IT &amp; SYSTEMS</span>
        <h2>Kodun ötesinde,<br />sistemin kendisi.</h2>
        <p>
          Yazılım geliştirmenin yanında sunucu, donanım bakımı, sistem teşhisi ve ağ altyapısı tarafında da uygulamalı çalışıyorum.
        </p>
      </motion.div>

      <div className="systems-story-grid">
        {systemAreas.map((item, index) => (
          <motion.article
            className={`systems-story-card ${item.wide ? "wide" : ""}`}
            key={item.title}
            initial={{ opacity: 0, y: 46, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.14 }}
            transition={{ duration: 0.68, delay: index * 0.055 }}
          >
            <div className="systems-visual-wrap">
              <SystemsVisual type={item.type} />
              <span className="systems-story-number">{item.number}</span>
            </div>

            <div className="systems-story-copy">
              <span>{item.eyebrow}</span>
              <h3>{item.title}</h3>
              <em>{item.subtitle}</em>
              <p>{item.description}</p>
              <div className="systems-skill-row">
                {item.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default SystemsSection;
