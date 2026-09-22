import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

import outdoorParking from "../../assets/hero.png";
import multiStoreyParking from "../../assets/parking-hero-realistic.png";
import aerialParking from "../../assets/PARK_SPHERE.png";


const stats = [
  [
    "250+",
    "Parking Locations",
    "Find nearby parking slots with live availability before you start your trip.",
  ],
  [
    "24/7",
    "Live Availability",
    "Check open spaces, reserve a slot, and avoid last-minute parking stress.",
  ],
  [
    "140+",
    "EV Charge Points",
    "Discover EV charging stations and reserve charging slots inside the app.",
  ],
];


const featureCards = [
  {
    title: "Features",
    image: outdoorParking,
    description:
      "ParkSphere helps drivers discover the best available spaces in real time, compare nearby lots by price and walking distance, and secure a reservation before arrival.",
    details: [
      "Live availability updates",
      "Smart parking filters",
      "Fast booking confirmation",
    ],
  },

  {
    title: "How it works",
    image: multiStoreyParking,
    description:
      "Enter your destination, explore nearby parking options, compare availability and pricing, then reserve your preferred parking space in just a few simple steps.",
    details: [
      "Search by destination",
      "Compare nearby parking",
      "Reserve your parking spot",
    ],
  },

  {
    title: "EV Charging",
    image: aerialParking,
    description:
      "Find available charging points, compare nearby options, and plan your charging stop before you arrive.",
    details: [
      "Locate nearby chargers",
      "Check live availability",
      "Reserve a charging slot",
    ],
  },

  {
    title: "Services",
    image: aerialParking,
    description:
      "From everyday commuter parking to EV charging and longer-term parking plans, ParkSphere brings multiple mobility services together in one convenient platform.",
    details: [
      "Hourly and daily parking",
      "Monthly parking plans",
      "EV charging support",
    ],
  },
];


const Home = ({ onAction }) => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <main className="home-page">

      {/* =========================================
          HERO SECTION
      ========================================= */}

      <section className="home-hero">
        <div className="hero-video">
          <iframe
            src="https://www.youtube.com/embed/YAFUyPp_238?autoplay=1&mute=1&loop=1&playlist=YAFUyPp_238&controls=0&rel=0&playsinline=1"
            title="ParkSphere Background Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>

        <div className="hero-overlay"></div>

        <div className="home-hero-content">
          <p className="home-kicker">SMART PARKING, SIMPLIFIED</p>
          <h1>Find Parking Anywhere</h1>
          <p className="hero-description">
            Discover real-time parking, reserve your spot in seconds,
            and keep every trip smoother with smart city mobility
            built around your route.
          </p>
        </div>
      </section>

      {/* =========================================
          FEATURE SECTION
      ========================================= */}

      <section
        className="feature-showcase"
        aria-label="ParkSphere feature overview"
      >

        <div className="section-intro">

          <p className="home-kicker">
            Everything in one trip
          </p>

          <h2>
            Choose the experience that matches your day.
          </h2>

          <p>
            From quick errands to long commutes and EV travel,
            ParkSphere brings together flexible parking options,
            live availability, and smarter planning so your journey
            starts with less stress.
          </p>

        </div>


          {/* Four cards */}
        <div className="feature-cards">

          {featureCards.map((feature, index) => {
            const isActive = activeFeature === index;

            return (
              <article
                className={isActive ? "feature-card is-active" : "feature-card"}
                key={feature.title}
                onClick={() => setActiveFeature(index)}
                aria-pressed={isActive}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveFeature(index);
                  }
                }}
              >

                <img
                  src={feature.image}
                  alt={feature.title}
                  className="feature-card-image"
                />

                <div className="feature-card-overlay"></div>

                <div className="feature-card-title">
                  <span>{feature.title}</span>
                </div>

                <div className="feature-hover-content">
                  <p className="feature-hover-label">PARKSPHERE</p>
                  <h3>{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>

                  <ul>
                    {feature.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}

        </div>

      </section>


      {/* =========================================
          PRICING BANNER
      ========================================= */}

      <section className="home-pricing-banner">

        <div>

          <p className="home-kicker">
            SIMPLE PRICING
          </p>

          <h2>
            Pay for parking, not the waiting.
          </h2>

          <p>
            Book from ₹30/hour or choose Sphere+ for a more
            convenient everyday commute.
          </p>

        </div>


        <Link to="/pricing">
          View pricing
          <span aria-hidden="true">
            →
          </span>
        </Link>

      </section>

      <div className="home-cta-band">
        <button
          type="button"
          className="home-primary-action"
          onClick={() =>
            onAction({
              title: "Find your parking spot",
              description:
                "Share your email and we'll save your request to start finding a nearby space.",
              buttonLabel: "Find parking",
              type: "parking",
            })
          }
        >
          Find Parking
        </button>

        <Link to="/evcharging" className="secondary-cta-link">
          Find EV Charging
        </Link>
      </div>

      <div className="home-stats">
        {stats.map(([count, title, text]) => (
          <article key={title}>
            <strong>{count}</strong>
            <span>{title}</span>
            <p>{text}</p>
          </article>
        ))}
      </div>

    </main>
  );
};


export default Home;