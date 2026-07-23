import "./index.css";

const EvCharging = () => {
  return (
    <section className="ev-page">

      <div className="hero">

        <h1>
          Charge where you <span>park.</span>
        </h1>

        <p>
          140+ CCS2 and Type 2 charge points across Hyderabad.
        </p>

      </div>

      <div className="cards">

        <div className="card">
          <h2>140+</h2>
          <p>Charge Points</p>
        </div>

        <div className="card">
          <h2>60kW</h2>
          <p>Fast Charge</p>
        </div>

        <div className="card">
          <h2>24/7</h2>
          <p>Availability</p>
        </div>

        <div className="card">
          <h2>₹14</h2>
          <p>Starting Price</p>
        </div>

      </div>

    </section>
  );
};

export default EvCharging;