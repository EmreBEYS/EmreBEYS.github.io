import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getCourseFileCount,
  getCoursesByGrade,
  gradeInfo,
  hasCourseNotes,
} from "../data/courses";

function GradeNotes() {
  const { gradeId } = useParams();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const courses = getCoursesByGrade(gradeId);
  const info = gradeInfo[gradeId];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const hasNotes = hasCourseNotes(course);
      const matchesFilter =
        filter === "all" ||
        (filter === "ready" && hasNotes) ||
        (filter === "planned" && !hasNotes);
      const searchable = [
        course.name,
        course.description,
        ...course.weeks.flatMap((week) => [
          week.title,
          ...(week.topics || []),
          ...(week.pdfs || []).map((file) => file.title),
        ]),
      ]
        .join(" ")
        .toLocaleLowerCase("tr-TR");

      return matchesFilter && searchable.includes(query.trim().toLocaleLowerCase("tr-TR"));
    });
  }, [courses, filter, query]);

  const readyCount = courses.filter(hasCourseNotes).length;

  return (
    <main className="page grade-notes-page">
      <section className="page-header">
        <p className="hero-label">COURSE LIST</p>
        <h1>{info?.title}</h1>
        <p>{info?.subtitle}</p>
        <div className="list-summary" aria-label="Ders özeti">
          <span><strong>{courses.length}</strong> ders</span>
          <span><strong>{readyCount}</strong> notu hazır</span>
          <span><strong>{courses.length - readyCount}</strong> bekliyor</span>
        </div>
      </section>

      <section className="notes-toolbar">
        <div className="search-box">
          <span>🔎</span>
          <input
            type="text"
            placeholder="Ders, konu veya dosya ara..."
            aria-label="Ders, konu veya dosya ara"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <button
          type="button"
          className={filter === "all" ? "filter-chip active" : "filter-chip"}
          onClick={() => setFilter("all")}
          aria-pressed={filter === "all"}
        >
          Tüm Dersler
        </button>

        <button
          type="button"
          className={filter === "ready" ? "filter-chip active" : "filter-chip"}
          onClick={() => setFilter("ready")}
          aria-pressed={filter === "ready"}
        >
          Notu Olanlar
        </button>

        <button
          type="button"
          className={filter === "planned" ? "filter-chip active" : "filter-chip"}
          onClick={() => setFilter("planned")}
          aria-pressed={filter === "planned"}
        >
          Planlanan
        </button>
      </section>

      <section className="course-list">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <Link
              to={`/notes/${gradeId}/${course.id}`}
              className="course-row"
              key={course.id}
            >
              <span className="course-icon">{course.icon}</span>

              <div className="course-row-copy">
                <div className="course-row-heading">
                <h2>{course.name}</h2>
                  <span className={`availability-badge ${hasCourseNotes(course) ? "ready" : "waiting"}`}>
                    {hasCourseNotes(course) ? `${getCourseFileCount(course)} dosya` : "Not bekleniyor"}
                  </span>
                </div>
                <p>{course.description}</p>
                {hasCourseNotes(course) && (
                  <small>{course.weeks.length} hafta/bölüm hazır</small>
                )}
              </div>

              <span className="course-arrow">→</span>
            </Link>
          ))
        ) : (
          <div className="empty-course">
            <h2>Ders bulunamadı</h2>
            <p>Arama veya filtreye uygun ders bulunamadı.</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default GradeNotes;
