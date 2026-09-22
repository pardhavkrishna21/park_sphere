import "./index.css";

const Pricing = ({ onAction }) => {
  return (
    <div className="main-container pricing-page">
      {/* Hero Section */}

      <section className="main-section">
        <button className="pricing-btn">Pricing</button>

        <h1>
          Free to use. <span>Simple to scale.</span>
        </h1>

        <p>
          Pay only for the parking and services you actually use.
          Membership is optional.
        </p>
      </section>

      {/* Pricing Cards */}

      <section className="pricing-section">
        {/* Free */}

        <div className="details free-subscription">
          <h3>PAY AS YOU GO</h3>

          <h1 className="price">Rs. 0</h1>

          <p>No membership</p>

          <ul>
            <li>Book any parking lot</li>
            <li>Standard partner pricing</li>
            <li>In-app payments</li>
            <li>Basic support</li>
          </ul>

          <button className="dark-btn" type="button" onClick={() => onAction({ title: "Get the ParkSphere app", description: "Leave your email and we’ll save a request for the app download details.", buttonLabel: "Send app details", type: "app" })}>Get the App</button>
        </div>

        {/* Sphere+ */}

        <div className="details paid-subscription">
          <div className="popular">MOST POPULAR</div>

          <h3>SPHERE+</h3>

          <h1 className="price">Rs. 199</h1>

          <p>per month</p>

          <ul>
            <li>10% off every booking</li>
            <li>Priority spot allocation</li>
            <li>Free monthly car wash</li>
            <li>Priority 24/7 support</li>
            <li>Waived cancellation fees</li>
          </ul>

          <button className="green-btn" type="button" onClick={() => onAction({ title: "Start Sphere+", description: "Leave your email and we’ll save your interest in the Sphere+ plan.", buttonLabel: "Join Sphere+", type: "sphere-plus" })}>Start Sphere+</button>
        </div>

        {/* Corporate */}

        <div className="details corporate-subscription">
          <h3>CORPORATE</h3>

          <h1 className="price">Custom</h1>

          <p>For fleets & teams</p>

          <ul>
            <li>Consolidated invoicing</li>
            <li>Employee sub-accounts</li>
            <li>Reserved bays at HQ</li>
            <li>Dedicated account manager</li>
            <li>API access</li>
          </ul>

          <button className="dark-btn" type="button" onClick={() => onAction({ title: "Talk to corporate sales", description: "Leave your email and our corporate parking team can follow up with a tailored plan.", buttonLabel: "Contact sales", type: "corporate" })}>Talk to Sales</button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
