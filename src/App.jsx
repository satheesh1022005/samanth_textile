import React, { useRef } from "react";
import Nav from "./pages/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./pages/Carousel";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Do from "./pages/Do";
import Customer from "./components/home/Customer";
import Machine from "./pages/Machine";
import GlobalReach from "./pages/GlobalReach";

function App() {
  // References for each section
  const carouselRef = useRef(null);
  const aboutRef = useRef(null);
  const doRef = useRef(null);
  const customerRef = useRef(null);
  const machineRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Pass scrollToSection and refs to Navbar */}
      <Nav
        scrollToSection={scrollToSection}
        refs={{
          carouselRef,
          aboutRef,
          doRef,
          customerRef,
          machineRef,
          contactRef,
        }}
      />
      <div ref={carouselRef}>
        <Carousel />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={doRef}>
        <Do />
      </div>
      <div ref={customerRef}>
        <Customer />
      </div>
      <div ref={machineRef}>
        <Machine />
      </div>
      <div ref={contactRef}>
        <Footer />
      </div>
    </>
  );
}

export default App;
