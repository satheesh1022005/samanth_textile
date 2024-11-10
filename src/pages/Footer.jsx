import Contact from "../components/Contact";
import Footer1 from "../components/Footer1";
import "./Footer.css"
const Footer = () => {
    return (
        <>
            <section className="footer-main">
                <section className="footer-contact">
                    <Contact />
                </section>
                <section className="footer-map">
                    <section>Visit Our Location</section>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15651.408191987279!2d77.60285245!3d11.27228425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1730808568788!5m2!1sen!2sin" height={"100%"} weight="100%" loading="lazy" ></iframe>
                </section>
            </section>
            <section>
                <Footer1/>   
            </section>
            <section className="footer-end">All copyrights are reserved &copy; 2024 </section>
        </>
    )
}

export default Footer;