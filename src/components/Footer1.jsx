// Footer1.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Footer1.css"; // Custom CSS file

const Footer1 = () => {
  return (
    <div className="custom-footer bg-dark text-white pt-4 pb-4">
      <div className="container">
        <div className="row d-flex justify-content-between ">
          {/* About Us Section */}
          <div className="col-md-6 mb-3 custom-footer-about p-3">
            <section>
              <h5 className="custom-footer-heading">Samanth Textiles</h5>
              <p className="custom-footer-text">
                At TextileWorks, we’re dedicated to producing high-quality
                textiles with a focus on sustainability and craftsmanship
              </p>
            </section>
          </div>
          <div className="col-md-3 custom-footer-contact">
            <h5 className="custom-footer-heading">Address</h5>
            <p className="custom-footer-text">
              64B, Periyathottam, Sendevipalyam
            </p>
            <p className="custom-footer-text">Ichipatti post, Somanur</p>
            <p className="custom-footer-text">
              <a href="mailto:SAMANTHTEXTILES@gmail.com">
                Email: SAMANTHTEXTILES@gmail.com
              </a>
            </p>
            <p className="custom-footer-text">
              <a href="tel:9842222335">Phone: 9842222335</a>
            </p>
          </div>
          <div className="col-md-2">
            <ul className="custom-footer-links  d-flex flex-column">
              <h5 className="custom-footer-heading">Quick Links</h5>
              <li>
                <div href="#" className="custom-footer-link">
                  Home{" "}
                </div>
              </li>
              <li>
                <div href="#" className="custom-footer-link">
                  About{" "}
                </div>
              </li>
              <li>
                <div href="#" className="custom-footer-link">
                  Products{" "}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
