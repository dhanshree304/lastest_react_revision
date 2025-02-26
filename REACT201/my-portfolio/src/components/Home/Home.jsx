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
          Full-Stack Web Developer{" "}
        </span>
        <p className="introPara">
          I am a skilled web designer worked on 100 + small big projects
        </p>
        <Link to='contact'>
          <button className="hireMeBtn">
            <FaShoppingBag className="bg"/> 
             Hire Me!
          </button>
        </Link>
        <img src="MyImage.jpg" alt="profile" className="myImage" />
      </div>
    </div>
  );
};

export default Home;
