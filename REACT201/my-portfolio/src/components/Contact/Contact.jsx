import React from "react";
import { RiGithubFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import "./contact.css"

const Contact = () => {
  return (
    <div id="contact" >
      <h1 style={{ textAlign: "center" }}>Contact Me</h1>
      <p style={{ textAlign: "center" ,marginTop:"10px"}}>Please fill out the form below to discuss any work opportunities.</p>
      <div
        style={{
          marginTop: "80px",
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
          <form action="">
            <input type="text" placeholder="Name" />
            <br />
            <input type="email" placeholder="Email" />
            <br />
            <input type="text" placeholder="Type Your Message" />
            <br />
            <input type="submit" value="Send" id="submitBtn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
