import React, { useRef } from "react";
import "./Machine.css";
import machine1 from "../assets/machine1.jpg";
import machine2 from "../assets/machine2.jpg";
import machine3 from "../assets/machine3.jpg";
import machine4 from "../assets/machine4.jpg";

const slidesData = [
  {
    name: "Sulzer",
    description:
      "Sulzer machines are known for their efficiency in high-speed textile weaving, ensuring precision and durability.",
    image: machine1,
  },
  {
    name: "Airjet-710",
    description:
      "The Airjet-710 excels in air-jet weaving, combining speed and energy efficiency for modern textile production.",
    image: machine2,
  },
  {
    name: "Airjet-810",
    description:
      "With advanced air-jet technology, the Airjet-810 delivers superior weaving performance for premium fabrics.",
    image: machine3,
  },
  {
    name: "Sizing Machine",
    description:
      "Sizing Machines prepare yarns for weaving by coating them with protective solutions to enhance strength and durability.",
    image: machine4,
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
