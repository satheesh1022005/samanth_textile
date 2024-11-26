import React, { useEffect } from "react";
import maps from "../assets/maps.png";
import internet from "../assets/internet.png";
import phone from "../assets/communication.png";
import "./GlobalReach.css";

const GlobalReach = () => {
  useEffect(() => {
    // Function to trigger animation when element is in view
    const handleAnimation = (selector, animationClass) => {
      const elements = document.querySelectorAll(selector);

      // Set up the IntersectionObserver
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              console.log(`Element is in view: ${selector}`); // Debugging
              entry.target.classList.add(animationClass);
              observer.unobserve(entry.target); // Stop observing after the animation is triggered
            }
          });
        },
        { threshold: 1 } // Trigger when 50% of the element is in view
      );

      elements.forEach(element => observer.observe(element));

      // Cleanup observer when component unmounts
      return () => observer.disconnect();
    };

    // Observe the heading and description for animations
    handleAnimation(".main-heading", "animated");
    handleAnimation(".description", "fade-in");
  }, []);

  return (
    <section className="top">
      <div className="global-reach-section">
        <div className="content-left">
          <h1 className="main-heading">
            Spinning Excellence, <br />
            Weaving Trust Worldwide
          </h1>
        </div>

        <div className="content-right">
          <div className="icon-and-title">
            <div className="icon-align">
              <img src={internet} alt="Internet Icon" className="icon" />
              <h2 className="sub-heading">Global Reach</h2>
            </div>
            <img src={maps} alt="Map" className="map" />
          </div>

          <div className="map-and-description">
            <p className="description">
              With exports to other countries, we have established ourselves as a
              trusted provider on the international stage. Our commitment and
              dedication to quality bring us into the worldwide textile markets.
            </p>
          </div>
        </div>
      </div>

      <div className="global-footer">
        <div className="footer-banner">
          <img src={phone} alt="Phone Icon" className="phone-icon" />
          <p className="footer-text">
            For Pricing & Custom Orders, +91 9842222335
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
