import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const location = useLocation();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => setIsOpen(false), [location.pathname]);

  const goHomeSection = (id) => {
    setIsOpen(false);
    window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  return (
    <nav className="modern-navbar premium-navbar">
      <Link to="/" className="modern-logo premium-logo" onClick={() => goHomeSection("top")}>
        <span className="brand-dot" />
        <span>EmreBEYS</span>
      </Link>

      <button className={`menu-toggle ${isOpen ? "active" : ""}`} type="button" onClick={() => setIsOpen(!isOpen)} aria-label="Menüyü aç veya kapat">
        <span /><span /><span />
      </button>

      <div className={`modern-nav-links premium-nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => goHomeSection("about")}>Hakkımda</Link>
        <Link to="/" onClick={() => goHomeSection("projects")}>Projeler</Link>
        <NavLink to="/notes">Ders Notları</NavLink>
        <Link to="/" onClick={() => goHomeSection("systems")}>IT & Sistemler</Link>
        <Link to="/" onClick={() => goHomeSection("contact")}>İletişim</Link>
        <a className="nav-github" href="https://github.com/EmreBEYS" target="_blank" rel="noreferrer">GitHub ↗</a>
        <button className="theme-toggle" type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Temayı değiştir">
          {theme === "dark" ? "☀" : "☾"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
