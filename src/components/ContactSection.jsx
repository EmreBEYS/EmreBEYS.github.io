function ContactSection() {
  return (
    <section id="contact" className="premium-section premium-contact">
      <div className="contact-index">03 — İLETİŞİM</div>
      <div className="premium-contact-grid">
        <div>
          <p className="contact-overline">BİR FİKRİN Mİ VAR?</p>
          <h2>Birlikte<br />geliştirelim.</h2>
        </div>
        <div className="contact-right">
          <p>
            Proje, iş birliği, staj veya teknik konular için e-posta üzerinden ulaşabilirsin.
            GitHub ve LinkedIn profillerim de aşağıda.
          </p>
          <a className="contact-mail" href="mailto:yunusemrekul44@outlook.com">yunusemrekul44@outlook.com <span>↗</span></a>
          <div className="premium-socials">
            <a href="https://github.com/EmreBEYS" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/yunus-emre-kul-8a75b82b6/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
