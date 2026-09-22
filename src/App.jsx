<<<<<<< HEAD
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ActionModal from "./components/ActionModal";
import Header from "./components/Header";
import parkingScene from "./assets/parking-hero-realistic.png";
import Home from "./pages/Home";
import EvCharging from "./pages/EvCharging";
import InfoPage from "./pages/InfoPage";
import Pricing from "./pages/Pricing";
import Partner from "./pages/Partner";
import Profile from "./pages/Profile";
import PartnerPortal from "./pages/PartnerPortal";
=======
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import EvCharging from "./pages/EvCharging";
import InfoPage from "./pages/InfoPage";
>>>>>>> 2fe95f65debea785dd6cb2604a298fff1e388beb

const pageContent = {
  features: {
    title: "Smart Parking Features",
    description:
<<<<<<< HEAD
      "ParkSphere brings together live parking availability, smart search tools, digital reservations, and EV charging visibility into one seamless travel experience. It helps drivers save time, avoid unnecessary circling, and make better parking decisions before they even leave home.",
    image: parkingScene,
    accent: "linear-gradient(135deg, #eef2ff 0%, #dbeafe 100%)",
    items: [
      "Live parking status with real-time occupancy updates across nearby lots and zones.",
      "Slot reservation that secures your space before arrival and minimizes parking uncertainty.",
      "EV charger discovery that helps drivers locate nearby charging stations and plan longer trips.",
      "Secure digital payments that make checkout simple, quick, and predictable.",
    ],
    highlights: [
      { label: "Live availability", value: "250+" },
      { label: "Average search time", value: "< 2 mins" },
      { label: "Digital bookings", value: "92%" },
    ],
    stats: [
      "Traffic-aware parking suggestions",
      "Flexible reservation windows",
      "Multi-location search and route planning",
    ],
=======
      "Find nearby spaces, compare live availability, reserve before you arrive, and manage EV charging in one flow.",
    items: ["Live parking status", "Slot reservation", "EV charger discovery", "Secure digital payments"],
>>>>>>> 2fe95f65debea785dd6cb2604a298fff1e388beb
  },
  "how-it-works": {
    title: "How ParkSphere Works",
    description:
<<<<<<< HEAD
      "The process is designed to feel effortless: locate your destination, compare nearby options, book in seconds, and enter your parking zone with confidence. Every step is simple enough for daily commuters while still giving drivers control and clarity.",
    image: parkingScene,
    accent: "linear-gradient(135deg, #ecfeff 0%, #e0f2fe 100%)",
    items: [
      "Search by area, destination, or neighborhood to find parking near your route.",
      "Compare lots based on price, walking distance, accessibility, and vehicle fit.",
      "Reserve your space instantly and receive clear arrival guidance and timing details.",
      "Park or charge smoothly and complete your trip without the usual stress of last-minute finds.",
    ],
    steps: [
      { title: "Search", detail: "Start with your destination, preferred time, and parking needs to surface the best nearby options." },
      { title: "Compare", detail: "Review live availability, pricing, walking distance, and convenience so you can pick the right spot fast." },
      { title: "Reserve", detail: "Secure your slot in a few taps and save your details for a smooth pickup or charging stop." },
      { title: "Arrive", detail: "Follow the app guidance, park confidently, and enjoy a much more relaxed arrival experience." },
    ],
=======
      "Search your destination, choose a parking or charging slot, reserve it, and follow simple arrival details.",
    items: ["Search by area", "Pick a slot", "Confirm booking", "Park or charge"],
>>>>>>> 2fe95f65debea785dd6cb2604a298fff1e388beb
  },
  services: {
    title: "Parking Services",
    description:
<<<<<<< HEAD
      "ParkSphere supports daily commuters, residents, fleets, and EV drivers with flexible parking solutions designed for real-life routines. From quick hourly parking to long-term plans and charging support, we make urban mobility more manageable.",
    image: parkingScene,
    accent: "linear-gradient(135deg, #fef3c7 0%, #fef9c3 100%)",
    items: [
      "Hourly parking for short visits, errands, meetings, and quick city trips.",
      "Monthly passes and commuter plans for people who need reliable parking every day.",
      "Business and partner dashboards for enterprise parking, fleet coordination, and operational visibility.",
      "EV charging support for electric vehicles, longer journeys, and power-ready travel stops.",
    ],
    highlights: [
      { label: "Daily parking", value: "24/7" },
      { label: "Business fleet", value: "Custom" },
      { label: "Charge support", value: "140+" },
    ],
    stats: [
      "Corporate accounts and shared parking access",
      "Fleet-ready reports and operational support",
      "Resident parking support for regular commuters",
    ],
=======
      "ParkSphere supports everyday parking, commercial parking partners, and EV charging station discovery.",
    items: ["Hourly parking", "Monthly passes", "Partner dashboards", "EV charging support"],
>>>>>>> 2fe95f65debea785dd6cb2604a298fff1e388beb
  },
  pricing: {
    title: "Simple Pricing",
    description:
      "Compare parking and charging prices before booking so there are no surprises when you arrive.",
    items: ["Parking from Rs. 30/hour", "EV charging from Rs. 14/kWh", "Monthly plans available", "No hidden fees"],
  },
};

function App() {
<<<<<<< HEAD
  const [action, setAction] = useState(null);

  return (
    <>
      <Header onAction={setAction} />
      <Routes>
        <Route path="/" element={<Home onAction={setAction} />} />
        <Route path="/features" element={<InfoPage page={pageContent.features} />} />
        <Route path="/how-it-works" element={<InfoPage page={pageContent["how-it-works"]} />} />
        <Route path="/services" element={<InfoPage page={pageContent.services} />} />
        <Route path="/pricing" element={<Pricing onAction={setAction} />} />
        <Route path="/evcharging" element={<EvCharging onAction={setAction} />} />
        <Route path="/become-a-partner" element={<Partner />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/partner-dashboard" element={<PartnerPortal view="dashboard" />} />
        <Route path="/partner-start-session" element={<PartnerPortal view="session" />} />
        <Route path="/partner-ratings" element={<PartnerPortal view="ratings" />} />
        <Route path="*" element={<InfoPage page={pageContent.features} />} />
      </Routes>
      {action && <ActionModal action={action} onClose={() => setAction(null)} />}
=======
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
>>>>>>> 2fe95f65debea785dd6cb2604a298fff1e388beb
    </>
  );
}

export default App;
