import React from "react";
import { Link } from "react-scroll";
import { FaShoppingBag } from "react-icons/fa";
import "./home.css"


const Home = () => {
  return (
    <div id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span>
          I'm <span className="introName">Dhanshree</span>
          <br />
          Full-Stack Web Developer
        </span>
        <p className="introPara">
          Creative and detail-oriented Web Designer with experience in 100+
          small and large projects . Proficient in
          UI/UX design, responsive web development, and modern design trends to
          create visually appealing and user-friendly websites.
       
        </p>
        <Link to="contact">
          <button className="hireMeBtn">
            <FaShoppingBag className="bg" />
            Hire Me!
          </button>
        </Link>
        <img src="myself.svg" alt="profile" className="myImage" />
      </div>
    </div>
  );
};

export default Home;
