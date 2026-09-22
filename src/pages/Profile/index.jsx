import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import parkingVisual from "../../assets/parking-hero-realistic.png";
import "./index.css";

const Profile = () => {
  const savedProfile = JSON.parse(localStorage.getItem("parkSphereProfile") || "null");
  const navigate = useNavigate();
  const [role, setRole] = useState(null);
  const [mode, setMode] = useState("login");
  const [saved, setSaved] = useState(Boolean(savedProfile));

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const profile = {
      role,
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      vehicleType: formData.get("vehicleType"),
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem("parkSphereProfile", JSON.stringify(profile));
    setSaved(true);
    navigate(role === "partner" ? "/partner-dashboard" : "/");
  };

  const selectRole = (nextRole) => {
    setRole(nextRole);
    setMode("login");
    setSaved(false);
  };

  return (
    <main className="profile-page">
      <section className="profile-shell">
        <div className="profile-heading">
          <div>
            <p className="profile-kicker">PARKSPHERE ACCOUNT</p>
            <h1>{savedProfile?.name ? `Welcome back, ${savedProfile.name}.` : "Choose your way to move."}</h1>
            <p>One account for finding a place to park or making your own space available to the city.</p>
          </div>
          <div className="profile-heading-mark" aria-hidden="true"><span>PS</span><small>your space<br />your journey</small></div>
        </div>

        <div className="profile-workspace">
          <div className="profile-auth-column">
            <div className="profile-role-grid" aria-label="Choose profile type">
              <button type="button" className={`profile-role-card profile-role-card--driver${role === "user" ? " is-active" : ""}`} onClick={() => selectRole("user")}>
                <strong>I need to park</strong>
              </button>
              <button type="button" className={`profile-role-card profile-role-card--partner${role === "partner" ? " is-active" : ""}`} onClick={() => selectRole("partner")}>
                <strong>I want to become a partner</strong>
              </button>
            </div>

            {role === "partner" && savedProfile?.role === "partner" && mode === "signup" ? (
              <PartnerProfile profile={savedProfile} />
            ) : role ? <AccountForm role={role} mode={mode} setMode={setMode} savedProfile={savedProfile} saved={saved} onSubmit={handleSubmit} /> : (
              <div className="profile-empty-state"><span>Choose an option above</span><p>We will tailor your sign up experience to what you need.</p></div>
            )}
          </div>

          <ProfileContext role={role} image={parkingVisual} />
        </div>
      </section>
    </main>
  );
};

const ProfileContext = ({ role, image }) => {
  const isPartner = role === "partner";

  return (
    <aside className={`profile-context${isPartner ? " profile-context--partner" : ""}`}>
      <img src={image} alt={isPartner ? "Parking area available for partners" : "Vehicles parked in a city parking area"} />
      <div className="profile-context-content">
        <p className="profile-kicker">{isPartner ? "FOR SPACE OWNERS" : "FOR EVERY DRIVER"}</p>
        <h2>{isPartner ? "Your space can keep a city moving." : "A better place to leave your vehicle."}</h2>
        <p>{isPartner ? "Share a garage, flat parking area, open plot, or covered space. Set your hours and earn from every vehicle." : "See live availability, compare nearby options, and reserve a spot before you arrive."}</p>
        <ul>
          {isPartner ? <><li>Set your own availability</li><li>Choose your hourly rate</li><li>Manage every booking</li></> : <><li>Real-time parking availability</li><li>Simple hourly pricing</li><li>Fast, reliable reservations</li></>}
        </ul>
      </div>
    </aside>
  );
};

const AccountForm = ({ role, mode, setMode, savedProfile, saved, onSubmit }) => {
  const isPartner = role === "partner";
  const isLogin = mode === "login";

  return (
    <section className={`account-panel${isPartner ? " account-panel--partner" : ""}`}>
      <div className="account-panel-topline">
        <div>
          <p className="profile-kicker">{isPartner ? "PARTNER ACCOUNT" : "PARKER ACCOUNT"}</p>
          <h2>{isLogin ? "Welcome back." : isPartner ? "Start your partner profile." : "Make parking feel easy."}</h2>
          <p>{isLogin ? "Log in to continue to your ParkSphere account." : isPartner ? "Create an account first, then add your parking space details." : "Create your account and reserve your first spot faster."}</p>
        </div>
      </div>
      <form className="profile-form" onSubmit={onSubmit}>
        {!isLogin && <label>Full name<input name="name" defaultValue={!isPartner ? savedProfile?.name || "" : ""} placeholder="Your name" autoComplete="name" required /></label>}
        <label>Email address<input name="email" type="email" defaultValue={!isPartner ? savedProfile?.email || "" : ""} placeholder="you@example.com" autoComplete="email" required /></label>
        {!isLogin && <label>Phone number<input name="phone" type="tel" defaultValue={!isPartner ? savedProfile?.phone || "" : ""} placeholder="Your phone number" autoComplete="tel" required /></label>}
        {!isPartner && !isLogin && <label>Vehicle type<input name="vehicleType" defaultValue={savedProfile?.vehicleType || ""} placeholder="Car, bike, van..." required /></label>}
        <label>Password<input name="password" type="password" placeholder="At least 8 characters" minLength="8" autoComplete={isLogin ? "current-password" : "new-password"} required /></label>
        <button className="profile-submit" type="submit">{isLogin ? "Log in" : `Create ${isPartner ? "partner" : "parker"} account`}</button>
        {saved && !isLogin && <p className="profile-saved">Your account is saved on this device.</p>}
      </form>
      <div className="account-prompt">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button type="button" onClick={() => setMode(isLogin ? "signup" : "login")}>
          {isLogin ? "Sign up" : "Log in"}
        </button>
      </div>
      {isPartner && !isLogin && <Link className="profile-partner-link" to="/become-a-partner">Add your parking space details</Link>}
    </section>
  );
};

const PartnerProfile = ({ profile }) => (
  <section className="partner-profile-card">
    <div className="partner-profile-topline">
      <div><span className="profile-status">PARTNER</span><h2>{profile.name}</h2></div>
      <strong>Rs. {profile.hourlyRate}<small> / hour</small></strong>
    </div>
    <div className="partner-profile-details">
      <div><span>Space type</span><strong>{profile.parkingTypeLabel}</strong></div>
      <div><span>Capacity</span><strong>{profile.vehicleCapacity} vehicles</strong></div>
      <div><span>Address</span><strong>{profile.address}</strong></div>
      <div><span>Photos</span><strong>{profile.photos?.length || 0} uploaded</strong></div>
      <div><span>Available from</span><strong>{profile.availableFrom}</strong></div>
      <div><span>Available until</span><strong>{profile.availableUntil}</strong></div>
    </div>
    <Link className="profile-partner-link" to="/become-a-partner">Edit parking details</Link>
  </section>
);

export default Profile;
