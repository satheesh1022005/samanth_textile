import React, { useState } from "react";
import product1 from "../assets/product1.jpg";
import instagramImage from "../assets/instagram.png"; // Adjust the path as necessary
import "./Do.css";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"; // Import specific icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Do = () => {
  const [activeObject, setActiveObject] = useState(0);

  // Array to hold data for each object (background images and text)
  const objects = [
    {
      id: 1,
      title: "Product 1",
      logo: faTwitter,
      img: product1,
      text: "Object 1 Content: This is a description that can take multiple lines to provide more information about the object.",
    },
    {
      id: 2,
      title: "Product 2",
      logo: faFacebookF,
      img: product1,
      text: "Object 2 Content: This is another description that can also take multiple lines.",
    },
    {
      id: 3,
      title: "Product 3",
      logo: faInstagram,
      img: product1,
      text: "Object 3 Content: Yet another description that can take up space and provide details.",
    },
    {
      id: 4,
      title: "Product 4",
      logo: faTwitter,
      img: product1,
      text: "Object 1 Content: This is a description that can take multiple lines to provide more information about the object.",
    },
    {
      id: 5,
      title: "Product 5",
      logo: faFacebookF,
      img: product1,
      text: "Object 2 Content: This is another description that can also take multiple lines.",
    },
    {
      id: 6,
      title: "Product 6",
      logo: faInstagram,
      img: instagramImage,
      text: "Object 3 Content: Yet another description that can take up space and provide details.",
    },
    {
      id: 7,
      title: "Product 7",
      logo: faTwitter,
      img: product1,
      text: "Object 1 Content: This is a description that can take multiple lines to provide more information about the object.",
    },
  ];

  return (
    <div className="do-main">
      <div className="content">
        <div
          key={objects[activeObject].id}
          className="object s-image"
          style={{
            backgroundImage: `url(${objects[activeObject].img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="sidebar-main">
            <div className="sidebar">
              {objects.map((obj, index) => (
                <button
                  key={obj.id}
                  className={`s-icon ${activeObject === index ? "active" : ""}`}
                  onClick={() => setActiveObject(index)}
                >
                  <div className="table-container">
                    <div className="table-row">
                      <div className="table-cell icon-cell">
                        <FontAwesomeIcon icon={obj.logo} className="s-icons" />
                      </div>
                      <div className="table-cell title-cell">
                        <div className="d-none d-sm-block">{obj.title}</div>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="text-overlay s-text-do">
            <h2 className="s-header">
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
