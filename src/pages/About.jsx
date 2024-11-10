import { aboutData } from "../components/Data";
import "./About.css";
import background from "../assets/image.png"
const About = () => {
    return (
        <>
            <main className="about">
            <section className="about-back">
                    <img src={background} />
                </section>
                <section className="about-head">
                    <h1>Samanth Textile</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi dolor qui esse, quisquam sit architecto voluptatum a velit! Earum sint dolor error quis iusto eligendi perferendis rerum incidunt suscipit.</p>
                </section>
                <section className="about-items">
                    {
                        aboutData.map(item => (
                            <div className="about-cards">
                                <img src={item.logo} />
                                {item.name}
                            </div>
                        ))
                    }
                </section>
                
            </main>
        </>
    )
}
export default About;