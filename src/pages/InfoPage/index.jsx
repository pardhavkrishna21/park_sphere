import "./index.css";

const InfoPage = ({ page }) => {
  return (
    <main className="info-page">
      <section className="info-panel">
        <div
          className={`info-hero${page.title === "How ParkSphere Works" ? " info-hero--centered" : " info-hero--left"}`}
          style={{ background: page.accent || "linear-gradient(135deg, #eef2ff 0%, #f8fafc 100%)" }}
        >
          <div className="info-intro">
            <p className="info-kicker">ParkSphere</p>
            <h1>{page.title}</h1>
            <p>{page.description}</p>
          </div>
        </div>

        {page.highlights && (
          <div className="info-stats">
            {page.highlights.map((item) => (
              <div className="info-stat" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className="info-grid">
          {page.items.map((item) => (
            <article key={item}>{item}</article>
          ))}
        </div>

        {page.steps && (
          <div className="info-steps" aria-label="Feature steps">
            {page.steps.map((step, index) => (
              <article key={step.title} className="step-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{step.title}</h2>
                <p>{step.detail}</p>
              </article>
            ))}
          </div>
        )}

        {page.stats && (
          <div className="info-badges" aria-label="Additional service highlights">
            {page.stats.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default InfoPage;
