import React, { useState } from "react";
import instagramImage from "../assets/instagram.png"; // Adjust the path as necessary
import "./Do.css";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import specific icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Do = () => {
  const [activeObject, setActiveObject] = useState(0);

  // Array to hold data for each object (background images and text)
  const objects = [
    {
      id: 1,
      title: 'Home',
      logo: faTwitter,
      img: 'https://th.bing.com/th/id/OIP.sCPZXf5O54t_5mJAXHSGtwAAAA?rs=1&pid=ImgDetMain',
      text: "Object 1 Content: This is a description that can take multiple lines to provide more information about the object.",
    },
    {
      id: 2,
      title: 'About',
      logo: faFacebookF,
      img:'https://th.bing.com/th/id/OIP.aPhNiFy6xavOJcChswZORQHaEK?rs=1&pid=ImgDetMain',
      text: "Object 2 Content: This is another description that can also take multiple lines.",
    },
    {
      id: 3,
      title: 'Contact',
      logo: faInstagram,
      img: instagramImage,
      text: "Object 3 Content: Yet another description that can take up space and provide details.",
    },
    {
      id: 1,
      title: 'Home',
      logo: faTwitter,
      img: 'https://th.bing.com/th/id/OIP.sCPZXf5O54t_5mJAXHSGtwAAAA?rs=1&pid=ImgDetMain',
      text: "Object 1 Content: This is a description that can take multiple lines to provide more information about the object.",
    },
    {
      id: 2,
      title: 'About',
      logo: faFacebookF,
      img:'https://th.bing.com/th/id/OIP.aPhNiFy6xavOJcChswZORQHaEK?rs=1&pid=ImgDetMain',
      text: "Object 2 Content: This is another description that can also take multiple lines.",
    },
    {
      id: 3,
      title: 'Contact',
      logo: faInstagram,
      img: instagramImage,
      text: "Object 3 Content: Yet another description that can take up space and provide details.",
    },
    {
      id: 1,
      title: 'Home',
      logo: faTwitter,
      img: 'https://th.bing.com/th/id/OIP.sCPZXf5O54t_5mJAXHSGtwAAAA?rs=1&pid=ImgDetMain',
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
        ><div className="sidebar-main">
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
            <div className="text-overlay s-text-do">
              <h2 className="s-header">
                Header for Object {objects[activeObject].id}
              </h2>
              <p>{objects[activeObject].text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Do;
