import React, { useRef, useState } from "react";
import { RiGithubFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [contact, setConatct] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setError({ name: "", email: "", message: "" });
    setConatct((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
     if (contact.name === "") {
      setError({
        name: "please enter name",
        email: "",
        message: "",
      });
    } else if (contact.email === "") {
      setError({
        name: "",
        email: "please enter email",
        message: "",
      });
    } else if (contact.message === "") {
      setError({
        name: "",
        email: "",
        message: "please enter message",
      });
    } else {
      emailjs
        .sendForm("service_6fooekt", "template_eeloeh7", form.current, {
          publicKey: "B1zsdntg-_nhtpGER",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setConatct({ name: "", email: "", message: "" });
            setError({ name: "", email: "", message: "" });
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div id="contact">
      <h1 style={{ textAlign: "center" }}>Contact Me</h1>
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        Please fill out the form below to discuss any work opportunities.
      </p>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div className="emojiDiv">
          <h1 className="emoji">
            <RiGithubFill /> GitHub
          </h1>
          <h1 className="emoji">
            <MdEmail /> Email
          </h1>
          <h1 className="emoji">
            <FaPhone /> Phone
          </h1>
          <h1 className="emoji">
            <GrLinkedin /> Linkedin
          </h1>
        </div>

        <div>
          <form action="" ref={form} onSubmit={sendEmail}>
            <input
              name="name"
              value={contact.name}
              type="text"
              placeholder="Name"
              className="inputs"
              onChange={handleChange}
            />
            {error.name && (
              <p style={{ color: "red", fontSize: "12px" }}>{error.name}</p>
            )}
            <br />
            <input
              name="email"
              value={contact.email}
              type="email"
              placeholder="Email"
              className="inputs"
              onChange={handleChange}
            />
            {error.email && (
              <p style={{ color: "red", fontSize: "12px" }}>{error.email}</p>
            )}
            <br />
            <textarea
              name="message"
              value={contact.message}
              type="text"
              rows={5}
              placeholder="Type Your Message"
              className="textarea"
              onChange={handleChange}
            />
            {error.message && (
              <p style={{ color: "red", fontSize: "12px" }}>{error.message}</p>
            )}
            <br />
            <input type="submit" value="Send" id="submitBtn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
