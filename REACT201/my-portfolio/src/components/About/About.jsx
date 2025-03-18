import React from "react";
import "./about.css";
const About = () => {
  return (
    <div id="about">
      <div>
      
        <h1 style={{textAlign:"center"}}>About Me</h1>
      </div>
      <div className="aboutMain">
        <div className="aboutImgDiv">
          <img
            src="about.svg"
            alt="profile"
           className="aboutImage"
           
          />
        </div>
        <div className="aboutParaDiv">
          <p className="aboutPara">
            My name is Dhanshree Upadhye and I enjoy creating things that live on
            the internet. I'm a Full-Stack Web Developer with the ability to
            learn and collaborate in rapidly changing environments and
            compositions. Worked through 1000+ hours of Bootcamp structure
            learning JavaScript, Node.Js, React.Js, MongoDB, Express, HTML5, and
            CSS3. I am passionate about solving technical problems, researching
            and developing new sites and technologies. I undertake and challenge
            myself to always improve, by being proactive, diligent, responsible,
            and committed to finding the perfect solution to any problem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
