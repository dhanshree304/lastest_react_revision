
import './navbar.css'
import {Link} from 'react-scroll' 

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="intro" smooth={true}>
        <h1 className="logo">DHANSHREE UPADHYE</h1>
      </Link>
      <div>
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
      <Link to="">
        <button className="resumeBtn">RESUME</button>
      </Link>
    </div>
  );
}

export default Navbar