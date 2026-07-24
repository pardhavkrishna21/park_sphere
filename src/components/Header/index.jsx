import { NavLink, useNavigate } from "react-router-dom";
import ParkSphere from "../../assets/PARK_SPHERE.png";
import "./index.css";

const menuItems = [
  { label: "Features", path: "/features" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "EV Charging", path: "/evcharging" },
  { label: "Services", path: "/services" },
  { label: "Pricing", path: "/pricing" },
];

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="app-header">
      <button
        type="button"
        className="app-logo-button"
        onClick={() => navigate("/")}
        aria-label="Go to home"
      >
        <img src={ParkSphere} alt="ParkSphere Logo" className="app-logo" />
      </button>

      <nav className="app-nav" aria-label="Primary navigation">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `app-nav-link${isActive ? " active" : ""}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <button type="button" className="app-partner-btn">
        Become a Partner
      </button>
    </header>
  );
};

export default Header;
