import "./index.css";

const EvCharging = () => {
  return (
    <main className="main-container">
      <section className="hero-section">
        <button className="ev-button">⚡ EV Charging</button>

        <h1 className="main-heading">
          Charge where you <span className="span-element">park.</span>
        </h1>

        <p className="main-description">
          140+ CCS2 and Type 2 charge points across Hyderabad. Reserve a slot,
          pay per KWh and monitor charging from the app in real time.
        </p>
      </section>

      <section className="details-container">
        <div className="individual-container">
          <h2>140+</h2>
          <p>Charge Points</p>
        </div>

        <div className="individual-container">
          <h2>60KW</h2>
          <p>Avg Fast Charge</p>
        </div>

        <div className="individual-container">
          <h2>24/7</h2>
          <p>Live Availability</p>
        </div>

        <div className="individual-container">
          <h2>₹14</h2>
          <p>Starting Per KWh</p>
        </div>
      </section>

      <section className="stations-section">
        <h2 className="section-heading">Popular Stations</h2>

        <table className="stations-table">
          <thead>
            <tr>
              <th>STATION</th>
              <th>CONNECTOR</th>
              <th>PRICE</th>
              <th>AVAILABILITY</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Hitech City Club</td>
              <td>CCS2 • 60KW</td>
              <td>₹18 / KWh</td>
              <td>
                <span className="status available"></span>
                3 of 4 Available
              </td>
            </tr>

            <tr>
              <td>Jubilee Hills Plaza</td>
              <td>Type2 • 22KW</td>
              <td>₹14 / KWh</td>
              <td>
                <span className="status available"></span>
                2 of 6 Available
              </td>
            </tr>

            <tr>
              <td>Gachibowli Tech Park</td>
              <td>CCS2 • 120KW</td>
              <td>₹22 / KWh</td>
              <td>
                <span className="status busy"></span>
                1 of 2 Available
              </td>
            </tr>

            <tr>
              <td>Banjara Hills Mall</td>
              <td>Type2 • 22KW</td>
              <td>₹14 / KWh</td>
              <td>
                <span className="status available"></span>
                4 of 4 Available
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer className="footer">
        <div className="footer-card">
          <h2>Ready to Charge?</h2>
          <p>
            Find the nearest charging station, reserve your slot and start
            charging in just a few clicks.
          </p>
          <button className="book-button">Book Charging Slot</button>
        </div>
      </footer>
    </main>
  );
};

export default EvCharging;
