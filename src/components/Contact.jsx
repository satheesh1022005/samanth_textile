import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = () => {
    console.log(contact);
    alert("Thank you for your message!");
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2 className="contact-title">
          Have a query? Feel free to contact us!
        </h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-grid">
            <input
              placeholder="Enter Your Name"
              name="name"
              type="text"
              value={contact.name}
              onChange={(e) =>
                setContact((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              className="contact-input"
            />
            <input
              placeholder="Enter Email ID"
              name="email"
              type="email"
              value={contact.email}
              onChange={(e) =>
                setContact((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              className="contact-input"
            />
            <input
              placeholder="Enter Phone Number"
              name="phone"
              type="tel"
              value={contact.phone}
              onChange={(e) =>
                setContact((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              className="contact-input"
            />
            <input
              placeholder="Enter Subject"
              name="subject"
              type="text"
              value={contact.subject}
              onChange={(e) =>
                setContact((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              className="contact-input"
            />
          </div>
          <textarea
            placeholder="Write your message here"
            name="message"
            value={contact.message}
            onChange={(e) =>
              setContact((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            className="contact-textarea"
          ></textarea>
          <button onClick={handleSubmit} className="contact-button">
            Ask now!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
