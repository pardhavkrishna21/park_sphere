import { useNavigate } from "react-router-dom";
import "./index.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <section className="home-hero">

        <h1>Find Parking Anywhere</h1>

        <p>
          Smart parking and EV charging made easy.
        </p>

        <div className="home-hero-actions">
          <button type="button" onClick={() => navigate("/evcharging")}>
            Find EV Charging
          </button>
          <button type="button" onClick={() => navigate("/pricing")}>
            View Pricing
          </button>
        </div>

        <div className="home-stats">
          <article>
            <strong>250+</strong>
            <span>Parking locations</span>
          </article>
          <article>
            <strong>24/7</strong>
            <span>Live availability</span>
          </article>
          <article>
            <strong>140+</strong>
            <span>EV charge points</span>
          </article>
        </div>

      </section>

    </div>
  );
};

export default Home;
