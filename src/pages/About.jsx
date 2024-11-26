import React from "react";
import Slider from "react-slick";
import { aboutData } from "../components/Data";
import "./About.css";
import time from "../assets/time.png";
import background from "../assets/image.png";
const milestonesData = [
  {
    year: "2012",
    description:
      "Our journey begins with a small, dedicated team aiming for excellence.",
  },
  {
    year: "2015",
    description:
      "Expanding our horizons, we introduced modern textile innovations to the market.",
  },
  {
    year: "2020",
    description:
      "Reaching global audiences and becoming a trusted name in textiles.",
  },
];
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
            {milestonesData.map((milestone, index) => (
              <div className="card" key={index}>
                <section className="header">
                  <img
                    src={time}
                    alt={`Milestone ${milestone.year}`}
                    width="40px"
                    height="40px"
                  />
                  <h1>{milestone.year}</h1>
                </section>
                <p>{milestone.description}</p>
              </div>
            ))}
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
