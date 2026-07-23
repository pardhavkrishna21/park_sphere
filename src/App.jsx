import ParkSphere from "./assets/PARK_SPHERE.png";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    ["features", "Features"],
    ["how-it-works", "How It Works"],
    ["ev", "EV Charging"],
    ["services", "Services"],
    ["pricing", "Pricing"],
  ];

  return (
    <div className="container">
      <nav
        className="header-container"
        onMouseLeave={() => setActiveMenu(null)}
      >
        {/* Left */}
        <div className="logo-container">
          <img
            src={ParkSphere}
            alt="ParkSphere Logo"
            className="logo"
          />
        </div>

        {/* Center */}
        <div className="nav-links">
          {menuItems.map(([menuKey, label]) => (
            <button
              key={menuKey}
              className={`header-button ${activeMenu === menuKey ? "active" : ""}`}
              type="button"
              onMouseEnter={() => setActiveMenu(menuKey)}
              onClick={() => setActiveMenu(menuKey)}
              aria-expanded={menuKey === "ev" && activeMenu === "ev"}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right */}
        <button className="partner-btn">
          Become a Partner
        </button>
      </nav>

      {activeMenu === "ev" && (
          <section className="charging-services" aria-label="EV charging services">
            <button className="charging-option" type="button">
              <span className="charging-icon">+</span>
              <span>EV Charging</span>
            </button>
        </section>
      )}
    </div>
  );
};

export default App;