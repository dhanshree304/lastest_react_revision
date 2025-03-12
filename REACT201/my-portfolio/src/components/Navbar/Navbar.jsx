import "./navbar.css";
import { Link } from "react-scroll";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <Link to="intro" smooth={true}>
        <h1 className="logo">
          <span style={{ color: "yellow" }}>D</span>HANSHREE
          <span style={{ color: "yellow" }}>U</span>PADHYE
        </h1>
      </Link>
      <div className="navbarLinks">
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-100}
          duration={500}
          to="intro"
          className="navLinks"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-100}
          duration={500}
          to="about"
          className="navLinks"
        >
          About
        </Link>
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-100}
          duration={500}
          to="project"
          className="navLinks"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-100}
          duration={500}
          to="tech-skill"
          className="navLinks"
        >
          Tech Skills
        </Link>
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-100}
          duration={500}
          to="contact"
          className="navLinks"
        >
          Contact
        </Link>
      </div>
      <Link to="" className="navbarLinks">
        <button className="resumeBtn">RESUME</button>
      </Link>

      <button className="menuTrigger" onClick={() => setOpen(!open)}>
        <IoMenuSharp />
      </button>

      {open && (
        <div className="menuContent">
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => setOpen(!open)}
              style={{
                color: "red",
                padding: "5px",
                fontSize: "1.5rem",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              <TiDelete />
            </button>
          </div>
          <div className="menuLinks">
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              duration={500}
              to="intro"
              className="navLinks"
              onClick={() => setOpen(!open)}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              duration={500}
              to="about"
              className="navLinks"
              onClick={() => setOpen(!open)}
            >
              About
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              duration={500}
              to="project"
              className="navLinks"
              onClick={() => setOpen(!open)}
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              duration={500}
              to="tech-skill"
              className="navLinks"
              onClick={() => setOpen(!open)}
            >
              Tech Skills
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              duration={500}
              to="contact"
              className="navLinks"
              onClick={() => setOpen(!open)}
            >
              Contact
            </Link>
            {/* <Link to="" className="navbarLinks"> */}
            <button className="resumeBtn" onClick={() => setOpen(!open)}>
              RESUME
            </button>
            {/* </Link> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
