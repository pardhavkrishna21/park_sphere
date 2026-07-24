import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import EvCharging from "./pages/EvCharging";
import InfoPage from "./pages/InfoPage";

const pageContent = {
  features: {
    title: "Smart Parking Features",
    description:
      "Find nearby spaces, compare live availability, reserve before you arrive, and manage EV charging in one flow.",
    items: ["Live parking status", "Slot reservation", "EV charger discovery", "Secure digital payments"],
  },
  "how-it-works": {
    title: "How ParkSphere Works",
    description:
      "Search your destination, choose a parking or charging slot, reserve it, and follow simple arrival details.",
    items: ["Search by area", "Pick a slot", "Confirm booking", "Park or charge"],
  },
  services: {
    title: "Parking Services",
    description:
      "ParkSphere supports everyday parking, commercial parking partners, and EV charging station discovery.",
    items: ["Hourly parking", "Monthly passes", "Partner dashboards", "EV charging support"],
  },
  pricing: {
    title: "Simple Pricing",
    description:
      "Compare parking and charging prices before booking so there are no surprises when you arrive.",
    items: ["Parking from Rs. 30/hour", "EV charging from Rs. 14/kWh", "Monthly plans available", "No hidden fees"],
  },
};

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<InfoPage page={pageContent.features} />} />
        <Route path="/how-it-works" element={<InfoPage page={pageContent["how-it-works"]} />} />
        <Route path="/services" element={<InfoPage page={pageContent.services} />} />
        <Route path="/pricing" element={<InfoPage page={pageContent.pricing} />} />
        <Route path="/evcharging" element={<EvCharging />} />
        <Route path="*" element={<InfoPage page={pageContent.features} />} />
      </Routes>
    </>
  );
}

export default App;
