<<<<<<< HEAD
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ParkSphere from "../../assets/PARK_SPHERE.png";
import "./index.css";
import { useLocation } from "react-router-dom";

const menuItems = [
  { label: "Home", path: "/" },
=======
import { NavLink, useNavigate } from "react-router-dom";
import ParkSphere from "../../assets/PARK_SPHERE.png";
import "./index.css";

const menuItems = [
>>>>>>> 2fe95f65debea785dd6cb2604a298fff1e388beb
  { label: "Features", path: "/features" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "EV Charging", path: "/evcharging" },
  { label: "Services", path: "/services" },
  { label: "Pricing", path: "/pricing" },
];

const Header = () => {
<<<<<<< HEAD
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isProfile = location.pathname === "/profile";
  const isPartnerPortal = location.pathname.startsWith("/partner-");

  const portalItems = [
    { label: "Start Session", path: "/partner-start-session" },
    { label: "Dashboard", path: "/partner-dashboard" },
    { label: "Ratings", path: "/partner-ratings" },
  ];

  return (
    <header className={`app-header${location.pathname === "/" ? " is-home" : ""}${isProfile ? " is-profile" : ""}${isPartnerPortal ? " is-partner-portal" : ""}`}>
      <Link className="app-logo-button" to="/" aria-label="Go to home">
        <img src={ParkSphere} alt="ParkSphere Logo" className="app-logo" />
      </Link>

      {isPartnerPortal ? <nav className="app-nav partner-nav" aria-label="Partner navigation">
        <ul className="nav-menu">
          {portalItems.map((item) => (
            <li key={item.path}><NavLink className={({ isActive }) => `app-nav-link${isActive ? " active" : ""}`} to={item.path}>{item.label}</NavLink></li>
          ))}
        </ul>
      </nav> : !isProfile && <><button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-menu" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? "Close" : "Menu"}</button>
        <nav className={`app-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          <ul className="nav-menu" id="primary-menu">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink className={({ isActive }) => `app-nav-link${isActive ? " active" : ""}`} to={item.path} onClick={() => setMenuOpen(false)} end={item.path === "/"}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </>}

      <div className="header-actions">
        {!isProfile && !isPartnerPortal && <button type="button" className="app-partner-btn" onClick={() => { setMenuOpen(false); navigate("/become-a-partner"); }}>
          Become a Partner
        </button>}
        <Link className="profile-link" to="/profile" onClick={() => setMenuOpen(false)}>
          Profile
        </Link>
      </div>
=======
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
>>>>>>> 2fe95f65debea785dd6cb2604a298fff1e388beb
    </header>
  );
};

export default Header;
