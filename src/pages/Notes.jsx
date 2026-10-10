import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  courses,
  getCourseFileCount,
  getCoursesByGrade,
  gradeInfo,
  hasCourseNotes,
} from "../data/courses";

const grades = [
  { id: "1-sinif", title: "1. Sınıf", subtitle: "Temel Başlangıç", description: "Programlama, matematik ve mühendisliğe giriş derslerinin notlarına ulaş.", icon: "🎓" },
  { id: "2-sinif", title: "2. Sınıf", subtitle: "Bilgisayar Bilimleri", description: "Veri organizasyonu, mantık devreleri, algoritma ve temel bilgisayar dersleri.", icon: "💻" },
  { id: "3-sinif", title: "3. Sınıf", subtitle: "Uzmanlık Dersleri", description: "Bilgisayar ağları, yapay zeka, işletim sistemleri ve proje dersleri.", icon: "🚀" },
  { id: "gelecek-donem", title: "Gelecek Dönem", subtitle: "Yeni Hedefler", description: "Önümüzdeki dönem alınacak dersleri ve hazırlanacak içerikleri incele.", icon: "🧠" },
];

function Notes() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("ready");

  const readyCourses = courses.filter(hasCourseNotes);
  const totalFiles = courses.reduce((total, course) => total + getCourseFileCount(course), 0);

  const results = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase("tr-TR");

    return courses.filter((course) => {
      const hasNotes = hasCourseNotes(course);
      const matchesFilter = filter === "all" || (filter === "ready" && hasNotes) || (filter === "planned" && !hasNotes);
      const searchable = [
        course.name,
        course.description,
        gradeInfo[course.grade]?.title,
        ...course.weeks.flatMap((week) => [
          week.title,
          ...(week.topics || []),
          ...(week.pdfs || []).map((file) => file.title),
        ]),
      ].join(" ").toLocaleLowerCase("tr-TR");

      return matchesFilter && searchable.includes(needle);
    });
  }, [filter, query]);

  return (
    <main className="page notes-page">
      <section className="notes-hero">
        <p className="hero-label">ACADEMIC LIBRARY</p>
        <h1>Ders <span>Notları</span></h1>
        <p>Bilgisayar mühendisliği derslerini sınıfa, haftaya ve konuya göre bul; mevcut dosyaları görüntüle veya indir.</p>
        <div className="notes-hero-stats">
          <div><strong>{courses.length}</strong><span>Ders</span></div>
          <div><strong>{readyCourses.length}</strong><span>Notu Hazır</span></div>
          <div><strong>{totalFiles}</strong><span>Dosya</span></div>
        </div>
      </section>

      <section className="library-search-panel" aria-labelledby="library-search-title">
        <div className="library-search-heading">
          <div>
            <p className="hero-label">HIZLI ERİŞİM</p>
            <h2 id="library-search-title">Tüm notlarda ara</h2>
          </div>
          <span>{results.length} ders gösteriliyor</span>
        </div>

        <div className="notes-toolbar global-toolbar">
          <label className="search-box">
            <span aria-hidden="true">🔎</span>
            <input type="search" placeholder="Ders, hafta, konu veya dosya ara..." value={query} onChange={(event) => setQuery(event.target.value)} />
          </label>
          {[["ready", "Notu olanlar"], ["all", "Tüm dersler"], ["planned", "Not bekleyenler"]].map(([value, label]) => (
            <button type="button" className={filter === value ? "filter-chip active" : "filter-chip"} onClick={() => setFilter(value)} aria-pressed={filter === value} key={value}>
              {label}
            </button>
          ))}
        </div>

        <div className="library-results">
          {results.map((course) => {
            const fileCount = getCourseFileCount(course);
            return (
              <Link to={`/notes/${course.grade}/${course.id}`} className="library-result-card" key={course.id}>
                <span className="library-result-icon" aria-hidden="true">{course.icon}</span>
                <div>
                  <span className="library-result-grade">{gradeInfo[course.grade]?.title}</span>
                  <h3>{course.name}</h3>
                  <p>{course.description}</p>
                </div>
                <div className="library-result-meta">
                  <strong>{fileCount > 0 ? `${fileCount} dosya` : "Not bekleniyor"}</strong>
                  <span>{course.weeks.length > 0 ? `${course.weeks.length} hafta/bölüm` : "Planlanan içerik"}</span>
                </div>
              </Link>
            );
          })}
          {results.length === 0 && (
            <div className="empty-course compact-empty"><h3>Sonuç bulunamadı</h3><p>Arama kelimesini veya seçili filtreyi değiştirebilirsin.</p></div>
          )}
        </div>
      </section>

      <section className="grade-section" aria-labelledby="grade-section-title">
        <div className="section-heading-row">
          <div><p className="hero-label">SINIFLARA GÖRE</p><h2 id="grade-section-title">Dersleri keşfet</h2></div>
          <p>Her sınıfın derslerini ve not durumunu tek yerde gör.</p>
        </div>
        <div className="professional-grade-grid">
          {grades.map((grade, index) => {
            const gradeCourses = getCoursesByGrade(grade.id);
            const availableCourses = gradeCourses.filter(hasCourseNotes).length;
            return (
              <Link to={`/notes/${grade.id}`} className="professional-grade-card" key={grade.id}>
                <div className="grade-card-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="professional-grade-icon">{grade.icon}</div>
                <span className="grade-subtitle">{grade.subtitle}</span>
                <h2>{grade.title}</h2>
                <p>{grade.description}</p>
                <div className="grade-information">
                  <div><strong>{gradeCourses.length}</strong><span>Ders</span></div>
                  <div><strong>{availableCourses}</strong><span>Notu Hazır</span></div>
                </div>
                <div className="grade-card-button"><span>Derslere Git</span><strong>→</strong></div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Notes;
