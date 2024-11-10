// Footer1.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialMedia } from "./Data"; // Adjust the path as needed
import './Footer1.css'; // Custom CSS file

const Footer1 = () => {
    return (
        <div className="custom-footer bg-dark text-white pt-4 pb-4">
            <div className="container">
                <div className="row">
                    {/* About Us Section */}
                    <div className="col-md-6 mb-3">
                        <section>
                        <h5 className="custom-footer-heading">About Us</h5>
                        <p className="custom-footer-text">
                            At TextileWorks, we’re dedicated to producing high-quality textiles with a focus on sustainability and craftsmanship
                        </p>
                        </section>
                        <div className="">
                        <ul className="custom-footer-links  d-flex">
                            <li><div href="#" className="custom-footer-link">Home  </div></li>
                            <li><div href="#" className="custom-footer-link">About </div></li>
                            <li><div href="#" className="custom-footer-link">Products </div></li>
                            <li><div href="#" className="custom-footer-link">Shop</div></li>
                            <li><div href="#" className="custom-footer-link">Products </div></li>
                        </ul>
                    </div>
                    </div>

                    {/* Quick Links Section */}
                    

                    {/* Follow Us Section */}
                    <div className="col-md-3 mb-3">
                        <h5 className="custom-footer-heading">Follow Us</h5>
                        <div className="d-flex">
                            {socialMedia.map((media, index) => (
                                <a 
                                    key={index} 
                                    href={media.url} 
                                    className="custom-footer-social-link text-decoration-none d-flex align-items-center"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon icon={media.logo} className="custom-footer-icon me-2" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="col-md-3 custom-footer-contact">
                        <h5 className="custom-footer-heading">Contact Us</h5>
                        <p className="custom-footer-text">123 Textile Lane</p>
                        <p className="custom-footer-text">Fabric City, TX 78945</p>
                        <p className="custom-footer-text">Email: contact@textileworks.com</p>
                        <p className="custom-footer-text">Phone: (123) 456-7890</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer1;
