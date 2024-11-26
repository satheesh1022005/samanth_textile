import React, { useRef } from "react";
import "./Machine.css";
import img1 from "../assets/real.jpg";
import img2 from "../assets/real1.jpg";
import img3 from "../assets/real2.png";

const slidesData = [
  {
    name: "Switzerland",
    description: "X-Dev, Transforming code into visual poetry..!",
    image: img1,
  },
  {
    name: "Finland",
    description: "X-Dev, Transforming code into visual poetry..!",
    image: img2,
  },
  {
    name: "Iceland",
    description: "X-Dev, Transforming code into visual poetry..!",
    image: img3,
  },
  {
    name: "Australia",
    description: "X-Dev, Transforming code into visual poetry..!",
    image: img1,
  },
  {
    name: "Netherlands",
    description: "X-Dev, Transforming code into visual poetry..!",
    image: img2,
  },
  {
    name: "Ireland",
    description: "X-Dev, Transforming code into visual poetry..!",
    image: img3,
  },
];

const Machine = () => {
  const slideRef = useRef(null);

  const handleNext = () => {
    const items = slideRef.current.children;
    slideRef.current.appendChild(items[0]);
  };

  const handlePrev = () => {
    const items = slideRef.current.children;
    slideRef.current.prepend(items[items.length - 1]);
  };

  return (
    <section className="machine">
      <div className="containers">
        <div className="slide" ref={slideRef}>
          {slidesData.map((slide, index) => (
            <div
              key={index}
              className="item"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="content">
                <div className="name">{slide.name}</div>
                <div className="des">{slide.description}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="button">
          <button className="prev" onClick={handlePrev}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="next" onClick={handleNext}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Machine;
