import React, { useState } from "react";
import instagramImage from "../assets/instagram.png"; // Adjust the path as necessary
import "./Do.css";
const Do = () => {
  const [activeObject, setActiveObject] = useState(0);

  // Array to hold data for each object (background images and text)
  const objects = [
    {
      id: 1,
      img: instagramImage,
      text: "Object 1 Content: This is a description that can take multiple lines to provide more information about the object.",
    },
    {
      id: 2,
      img: instagramImage,
      text: "Object 2 Content: This is another description that can also take multiple lines.",
    },
    {
      id: 3,
      img: instagramImage,
      text: "Object 3 Content: Yet another description that can take up space and provide details.",
    },
    {
      id: 4,
      img: instagramImage,
      text: "Object 4 Content: This description can be lengthy and informative as well.",
    },
  ];

  return (
    <div className="container">
      <div className="sidebar">
        {objects.map((obj, index) => (
          <button
            key={obj.id}
            className={`icon ${activeObject === index ? "active" : ""}`}
            onClick={() => setActiveObject(index)}
          >
            {obj.id}
          </button>
        ))}
      </div>
      <div className="content">
        <div
          key={objects[activeObject].id}
          className="object"
          style={{
            backgroundImage: `url(${objects[activeObject].img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="text-overlay">
            <h2 className="header">
              Header for Object {objects[activeObject].id}
            </h2>
            <p>{objects[activeObject].text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Do;
