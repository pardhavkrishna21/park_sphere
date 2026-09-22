import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

const parkingTypes = {
  flat: { label: "Flat parking area", rate: 50, unit: "per vehicle / hour" },
  garage: { label: "Garage", rate: 70, unit: "per vehicle / hour" },
  open: { label: "Open area", rate: 40, unit: "per vehicle / hour" },
  covered: { label: "Covered parking", rate: 60, unit: "per vehicle / hour" },
};

const Partner = () => {
  const navigate = useNavigate();
  const [parkingType, setParkingType] = useState("flat");
  const [photos, setPhotos] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const selectedType = parkingTypes[parkingType];

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const partner = {
      role: "partner",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      parkingType,
      parkingTypeLabel: selectedType.label,
      hourlyRate: selectedType.rate,
      rateUnit: selectedType.unit,
      vehicleCapacity: formData.get("vehicleCapacity"),
      availableFrom: formData.get("availableFrom"),
      availableUntil: formData.get("availableUntil"),
      photos: photos.map((photo) => photo.name),
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("parkSphereProfile", JSON.stringify(partner));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="partner-page">
        <section className="partner-success">
          <p className="partner-kicker">PARTNER APPLICATION SAVED</p>
          <h1>Your parking area is ready for review.</h1>
          <p>We saved your location, availability, rate, and photo details on this device.</p>
          <div className="partner-success-actions">
            <Link className="partner-primary-link" to="/profile">View partner profile</Link>
            <button type="button" className="partner-secondary-button" onClick={() => navigate("/")}>Back home</button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="partner-page">
      <section className="partner-intro">
        <div>
          <p className="partner-kicker">PARKSPHERE PARTNERS</p>
          <h1>Turn your unused space into a parking business.</h1>
          <p>Sign in as a partner, list your parking area, set your availability, and earn for every vehicle that parks with you.</p>
        </div>
        <div className="partner-rate-note">
          <span>Starting rate</span>
          <strong>Rs. {selectedType.rate}</strong>
          <small>{selectedType.unit}</small>
        </div>
      </section>

      <form className="partner-form" onSubmit={handleSubmit}>
        <div className="partner-form-heading">
          <div>
            <p className="partner-kicker">PARTNER SIGN UP</p>
            <h2>Tell us about your space</h2>
          </div>
          <span className="form-step">01 / 02</span>
        </div>

        <div className="partner-form-grid">
          <label>
            Full name
            <input name="name" type="text" placeholder="Your name" autoComplete="name" required />
          </label>
          <label>
            Email address
            <input name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
          </label>
          <label>
            Phone number
            <input name="phone" type="tel" placeholder="Your phone number" autoComplete="tel" required />
          </label>
          <label>
            Available vehicle capacity
            <input name="vehicleCapacity" type="number" min="1" placeholder="e.g. 10" required />
          </label>
          <label className="partner-field-wide">
            Parking area address
            <textarea name="address" rows="3" placeholder="Full address and a nearby landmark" required />
          </label>
        </div>

        <fieldset>
          <legend>What kind of parking space is it?</legend>
          <div className="parking-type-grid">
            {Object.entries(parkingTypes).map(([value, type]) => (
              <label className={`parking-type-option${parkingType === value ? " is-selected" : ""}`} key={value}>
                <input type="radio" name="parkingType" value={value} checked={parkingType === value} onChange={() => setParkingType(value)} />
                <span>{type.label}</span>
                <strong>Rs. {type.rate}<small> / hour</small></strong>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="partner-form-grid">
          <label>
            Available from
            <input name="availableFrom" type="datetime-local" required />
          </label>
          <label>
            Available until
            <input name="availableUntil" type="datetime-local" required />
          </label>
        </div>

        <label className="photo-upload">
          <span>Parking area photos</span>
          <small>Upload clear photos of the entrance, parking spaces, and surroundings.</small>
          <input type="file" accept="image/*" multiple required onChange={(event) => setPhotos(Array.from(event.target.files || []))} />
          {photos.length > 0 && <strong>{photos.length} photo{photos.length === 1 ? "" : "s"} selected</strong>}
        </label>

        <div className="partner-submit-row">
          <p>Rate: <strong>Rs. {selectedType.rate} {selectedType.unit}</strong></p>
          <button type="submit" className="partner-submit-button">Create partner profile</button>
        </div>
      </form>
    </main>
  );
};

export default Partner;
