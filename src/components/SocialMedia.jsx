import { socialMedia } from "./Data";
import "./Contact.css"
const SocialMedia=()=>{
    return(
        <>
            <section className="social-media">
                <div className="social-items">
                {
                    socialMedia.map(item=>(
                        <div className="social-logo">
                            <img src={item.logo} width={"100%"} />
                        </div>
                    ))
                }
                </div>
            </section>
        </>
    )
}
export default SocialMedia;