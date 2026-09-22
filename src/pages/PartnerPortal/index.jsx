import { useState } from "react";
import { Link } from "react-router-dom";
import parkingLot from "../../assets/parking-hero-realistic.png";
import "./index.css";

const defaultPartner = {
  name: "ParkSphere Partner",
  parkingTypeLabel: "Your parking area",
  hourlyRate: 50,
  vehicleCapacity: 12,
  address: "Add your parking address",
};

const PartnerPortal = ({ view }) => {
  const savedProfile = JSON.parse(localStorage.getItem("parkSphereProfile") || "null");
  const partner = savedProfile?.role === "partner" ? savedProfile : defaultPartner;
  const [sessionSaved, setSessionSaved] = useState(false);

  const saveSession = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    localStorage.setItem("parkSphereSession", JSON.stringify({
      date: data.get("date"),
      startTime: data.get("startTime"),
      endTime: data.get("endTime"),
      vehicleType: data.get("vehicleType"),
      spaces: data.get("spaces"),
      createdAt: new Date().toISOString(),
    }));
    setSessionSaved(true);
  };

  if (view === "session") {
    return <StartSession partner={partner} saved={sessionSaved} onSubmit={saveSession} />;
  }

  if (view === "ratings") {
    return <Ratings partner={partner} />;
  }

  return <Dashboard partner={partner} />;
};

const PortalFrame = ({ partner, eyebrow, title, description, children }) => (
  <main className="partner-portal-page">
    <div className="partner-portal-shell">
      <header className="portal-heading">
        <div>
          <p className="portal-kicker">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="portal-account"><span>PARTNER</span><strong>{partner.name}</strong></div>
      </header>
      {children}
    </div>
  </main>
);

const Dashboard = ({ partner }) => {
  const session = JSON.parse(localStorage.getItem("parkSphereSession") || "null");

  return (
    <PortalFrame partner={partner} eyebrow="PARTNER DASHBOARD" title="A clearer view of your parking business." description="Manage your space, see your next parking session, and understand how drivers experience your location.">
      <section className="portal-metrics">
        <article><span>Today&apos;s earnings</span><strong>Rs. 1,240</strong><small>+12% from last week</small></article>
        <article><span>Vehicles parked</span><strong>24</strong><small>Across {partner.vehicleCapacity || 12} available spaces</small></article>
        <article><span>Average rating</span><strong>4.8 <em>★</em></strong><small>From 86 driver reviews</small></article>
      </section>
      <section className="portal-dashboard-grid">
        <article className="portal-feature-card portal-listing-card">
          <div className="portal-card-heading"><div><p className="portal-kicker">YOUR LISTING</p><h2>{partner.parkingTypeLabel}</h2></div><span className="live-dot">LIVE</span></div>
          <p>{partner.address}</p>
          <div className="listing-details"><span>Rs. {partner.hourlyRate} / vehicle / hour</span><span>{partner.vehicleCapacity || 12} spaces</span></div>
          <Link className="portal-link-button" to="/partner-start-session">Start a session <span>↗</span></Link>
        </article>
        <article className="portal-feature-card next-session-card">
          <p className="portal-kicker">NEXT SESSION</p>
          {session ? <><h2>{session.date}</h2><p>{session.startTime} to {session.endTime}</p><span>{session.spaces} spaces reserved for {session.vehicleType}</span></> : <><h2>No session planned</h2><p>Open a session when your parking area is ready for drivers.</p><Link className="portal-text-link" to="/partner-start-session">Plan your first session</Link></>}
        </article>
      </section>
      <section className="portal-quote"><span>“</span><p>Great parking starts with a partner who makes arrival feel simple.</p><small>ParkSphere partner promise</small></section>
    </PortalFrame>
  );
};

const StartSession = ({ partner, saved, onSubmit }) => (
  <PortalFrame partner={partner} eyebrow="START A SESSION" title="Open your space when drivers need it." description="Choose the time window, tell us what vehicles you can welcome, and make your parking area visible to nearby drivers.">
    <section className="session-layout">
      <div className="session-visual"><img src={parkingLot} alt="Parking lot ready for a new session" /><div><span>YOUR SPACE</span><strong>{partner.parkingTypeLabel}</strong><small>{partner.address}</small></div></div>
      <form className="session-form" onSubmit={onSubmit}>
        <p className="portal-kicker">SESSION DETAILS</p>
        <h2>When can drivers arrive?</h2>
        <label>Date<input name="date" type="date" required /></label>
        <div className="session-time-grid"><label>From<input name="startTime" type="time" required /></label><label>Until<input name="endTime" type="time" required /></label></div>
        <label>Vehicle type<select name="vehicleType" defaultValue="cars"><option value="cars">Cars</option><option value="bikes">Bikes</option><option value="vans">Vans and SUVs</option><option value="all">All vehicles</option></select></label>
        <label>Spaces available<input name="spaces" type="number" min="1" max={partner.vehicleCapacity || 100} defaultValue={partner.vehicleCapacity || 1} required /></label>
        <div className="session-rate"><span>Your rate</span><strong>Rs. {partner.hourlyRate || 50}<small> / vehicle / hour</small></strong></div>
        <button className="portal-primary-button" type="submit">Publish parking session</button>
        {saved && <p className="session-success">Your session is live and saved on this device.</p>}
      </form>
    </section>
  </PortalFrame>
);

const Ratings = ({ partner }) => (
  <PortalFrame partner={partner} eyebrow="DRIVER RATINGS" title="Trust is built one arrival at a time." description="See what drivers say about your parking area and keep improving the experience around it.">
    <section className="ratings-summary"><div><strong>4.8</strong><span>★★★★★</span><small>86 total reviews</small></div><div className="rating-bars"><span><b>5</b><i style={{ width: "86%" }}></i><b>74</b></span><span><b>4</b><i style={{ width: "28%" }}></i><b>10</b></span><span><b>3</b><i style={{ width: "8%" }}></i><b>2</b></span><span><b>2</b><i style={{ width: "0%" }}></i><b>0</b></span></div></section>
    <section className="review-grid"><article><span>★★★★★</span><p>“Easy to find, spacious, and exactly as described. I will use this spot again.”</p><small>Priya S. · parked today</small></article><article><span>★★★★☆</span><p>“The entrance was clear and the owner was very helpful when I arrived.”</p><small>Arjun M. · parked yesterday</small></article><article><span>★★★★★</span><p>“A reliable option for my office commute. The hourly rate is fair.”</p><small>Neha R. · parked this week</small></article></section>
  </PortalFrame>
);

export default PartnerPortal;
