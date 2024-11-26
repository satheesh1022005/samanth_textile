import React from "react";
import Slider from "react-slick";
import { aboutData } from "../components/Data";
import "./About.css";
import time from "../assets/time.png";
import background from "../assets/image.png";

const About = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <main className="about">
      {/* Main section with content and carousel */}
      <div className="about-row">
        <section className="about-content">
          <h1>Samanth Textile</h1>
          <p>
            Established in 2012, Samanth Textile has been delivering
            high-quality textiles with an unmatched commitment to excellence.
            From humble beginnings to milestones, our journey reflects passion,
            precision, and innovation.
          </p>
        </section>

        <section className="about-carousel">
          <Slider {...carouselSettings}>
            <div className="card">
              <section className="header">
                <img src={time} width="40px" height="40px"></img>
                <h1>2012</h1>
              </section>

              <p>
                Our journey begins with a small, dedicated team aiming for
                excellence.
              </p>
            </div>
            <div className="card">
              <section className="header">
                <img src={time} width="40px" height="40px"></img>
                <h1>2015</h1>
              </section>
              <p>
                Expanding our horizons, we introduced modern textile innovations
                to the market.
              </p>
            </div>
            <div className="card">
              <section className="header">
                <img src={time} width="40px" height="40px"></img>
                <h1>2020</h1>
              </section>
              <p>
                Reaching global audiences and becoming a trusted name in
                textiles.
              </p>
            </div>
          </Slider>
        </section>
      </div>

      {/* Section for rounded cards */}
      <section className="about-items">
        {aboutData.map((item, index) => (
          <div className="about-card" key={index}>
            <img src={item.logo} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </section>
    </main>
  );
};

export default About;
