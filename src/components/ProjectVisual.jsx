function ProjectVisual({ project, compact = false }) {
  if (project.visualType === "image" && project.cover) {
    return (
      <div className={`project-visual project-visual-image ${compact ? "compact" : ""}`}>
        <img src={project.cover} alt={`${project.title} proje görünümü`} loading="lazy" />
        <div className="project-visual-shade" />
      </div>
    );
  }


  if (project.visualType === "dispatch") {
    return (
      <div className={`project-visual dispatch-visual ${compact ? "compact" : ""}`} aria-label="MOTAŞ Smart Dispatch System konsept görünümü">
        <div className="dispatch-topbar"><i /><i /><i /><span>MOTAŞ / SMART DISPATCH</span></div>
        <div className="dispatch-map-grid" />
        <div className="dispatch-route route-a"><i /><i /><i /><i /></div>
        <div className="dispatch-route route-b"><i /><i /><i /></div>
        <div className="dispatch-control-panel">
          <span>OPERATION CENTER</span>
          <strong>Akıllı Sefer<br />Karar Katmanı</strong>
          <div><b>12</b><small>ACTIVE VEHICLES</small></div>
          <div><b>04</b><small>LIVE SIGNALS</small></div>
        </div>
        <div className="dispatch-status"><i /> SYSTEM ONLINE</div>
      </div>
    );
  }

  if (project.visualType === "commerce") {
    return (
      <div className={`project-visual commerce-visual ${compact ? "compact" : ""}`} aria-label="Business Commerce Platform konsept görünümü">
        <div className="commerce-browser-bar"><i /><i /><i /><span>emrebeys / commerce</span></div>
        <div className="commerce-stage">
          <span>NEW COMMERCE EXPERIENCE</span>
          <strong>Ürünü değil,<br />deneyimi sun.</strong>
          <button type="button">Keşfet →</button>
        </div>
        <div className="commerce-product"><span>PRODUCT</span><b>01</b></div>
      </div>
    );
  }

  return (
    <div className={`project-visual code-visual ${compact ? "compact" : ""}`} aria-label="Java veri yapıları kod görseli">
      <div className="code-window-top"><i /><i /><i /><span>Graph.java</span></div>
      <pre><code><span className="code-purple">Graph</span>&lt;String&gt; graph = new Graph&lt;&gt;(<span className="code-blue">UNDIRECTED</span>);{"\n\n"}graph.addVertex(<span className="code-green">"A"</span>);{"\n"}graph.addVertex(<span className="code-green">"B"</span>);{"\n"}graph.addEdge(<span className="code-green">"A"</span>, <span className="code-green">"B"</span>);{"\n\n"}<span className="code-muted">// BFS → [A, B, C, D, E]</span>{"\n"}graph.bfs(<span className="code-green">"A"</span>);</code></pre>
      <div className="code-nodes"><i>A</i><i>B</i><i>C</i><i>D</i></div>
    </div>
  );
}

export default ProjectVisual;
