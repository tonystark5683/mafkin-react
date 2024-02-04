import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Hero from "./components/Hero/Hero";
import BrandingVedio from "./components/BrandingVedio/BrandingVedio";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import OurDiff from "./components/OurDiff/OurDiff";
import { motion, useAnimation } from "framer-motion";
import Section from "./components/Section/Section";
import Partner from "./components/Partners/Partner";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import OurProcess from "./components/OurProcess/OurProcess";
import OurTeam from "./components/OurTeam/OurTeam";
import Map from "./components/Map/Map";
import GoToTop from "./components/GoToTop/GoToTop";
import Contact from "./components/Contact/Contact";
import HBottom from "./components/HBottom/HBottom";
import AboutUs from "./components/AboutUs/AboutUs";
import Timeline from "./components/Timeline/Timeline";
import Brocure from "./components/Brochure/Brocure";
import { useState, useEffect } from "react";
import Preloader from "./components/Preloader/Preloader";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust the delay as needed

    // Cleanup function
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      {loading ? (
        // Display the preloader while content is loading
        <Preloader />
      ) : (
        // Display the main content once loading is complete
        <>
          <Navbar />
          {/* <AboutUs/> */}
          <Hero />
          <HBottom />
          {/* <BrandingVedio /> */}
          <Section />
          <div className="ocean-bg1">
            <WhatWeDo />
            {/* <OurDiff /> */}
          </div>
          <Brocure />
          {/* <OurProcess /> */}
          {/* <Partner /> */}
          <Map />
          <div className="ocean-bg2">
            <Timeline />
          </div>
          {/* <Faq /> */}
          {/* <OurTeam /> */}
          <Contact />
          <GoToTop />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
