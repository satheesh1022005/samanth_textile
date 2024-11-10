import { useState } from "react";
import "./Contact.css";

const Contact=()=>{
    const[contact,setContact]=useState({
        username:'',
        email:'',
        message:''
    })
    const handleSubmit=()=>{
        console.log(contact)
    }
    return(
        <>
            <div className="contact-form">
                <section className="contact-head">Ask Your Queries</section>
                <section className="contact">
                <input
                    placeholder="Enter Your name"
                    name="username"
                    type="text"
                    onChange={(e)=>setContact(prev=>({...prev,[e.target.name]:e.target.value}))}
                />
                <input
                    placeholder="Enter Email Id"
                    name="email"
                    type="email"
                    onChange={(e)=>setContact(prev=>({...prev,[e.target.name]:e.target.value}))}
                />
                </section>
                <textarea
                    placeholder="Write message"
                    name="message"
                    onChange={(e)=>setContact(prev=>({...prev,[e.target.name]:e.target.value}))}
                ></textarea>
                <button
                    onClick={handleSubmit}
                >Submit</button>
            </div>
        </>
    )
}
export default Contact;