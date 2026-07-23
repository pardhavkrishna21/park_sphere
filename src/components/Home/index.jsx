import { useState } from "react";
import "./index.css";
import ParkSphere from "../../assets/PARK_SPHERE.png";
import EvCharging from "../EvCharging";

const Home = () => {
  const [showEV, setShowEV] = useState(false);

  return (
    <>
      <nav
        className="navbar"
        onMouseLeave={() => setShowEV(false)}
      >
        <img
          src={ParkSphere}
          className="logo"
          alt="logo"
        />

        <div className="nav-links">
          <button>Features</button>

          <button>How It Works</button>

          <button
            onMouseEnter={() => setShowEV(true)}
          >
            EV Charging
          </button>

          <button>Services</button>

          <button>Corporate</button>

          <button>Pricing</button>
        </div>

        <button className="partner-btn">
          Become a Partner
        </button>
      </nav>

      {showEV && <EvCharging />}
    </>
  );
};

export default Home;