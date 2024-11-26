import Contact from "../components/Contact";
import Footer1 from "../components/Footer1";
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialMedia } from "../components/Data"; // Adjust the path as needed
const Footer = () => {
  return (
    <>
      <Contact />
      <section className="footer-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15651.408191987279!2d77.60285245!3d11.27228425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1730808568788!5m2!1sen!2sin"
          height={"100%"}
          weight="100%"
          loading="lazy"
        ></iframe>
      </section>
      <section className="bg-dark p-5 pb-0">
        <Footer1 />
      </section>
      <div className="bg-dark d-flex justify-content-center p-3 pt-5">
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
      <section className="footer-end bg-dark p-3">All copyrights are reserved &copy; 2024 </section>
    </>
  )
}

export default Footer;
