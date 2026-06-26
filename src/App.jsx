import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickBooking from "./components/QuickBooking";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import Destinations from "./components/Destinations";
import Activities from "./components/Activities";
import Packages from "./components/Packages";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Location from "./components/Location";
import Footer from "./components/Footer";
import ScrollTools from "./components/ScrollTools";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollTools />

          <Navbar />

          <Hero />

          <QuickBooking />

          <WhyChooseUs />

          <About />

          <Destinations />

          <Activities />

          <Packages />

          <FAQ />

          <CTA />

          <Location />

          <Footer />
        </>
      )}
    </>
  );
}

export default App;