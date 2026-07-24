import "./index.css";

const InfoPage = ({ page }) => {
  return (
    <main className="info-page">
      <section className="info-panel">
        <h1>{page.title}</h1>
        <p>{page.description}</p>
        <div className="info-grid">
          {page.items.map((item) => (
            <article key={item}>{item}</article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default InfoPage;
