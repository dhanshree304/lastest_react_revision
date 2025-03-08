import React from 'react'
import { BsFillSendFill } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { Link } from 'react-scroll';

const ProjectCard = ({project}) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        height: "auto",
        width:"30%",
        borderRadius:"10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <div>
        <img src={project.img} alt="" height="250px" width="200px" />
      </div>
      <h1 style={{ marginTop: "7px", color: "yellow" }}>{project.name}</h1>
      <p style={{ marginTop: "7px", lineHeight: "20px" }}>
        {project.description}
      </p>
      <h4 style={{ marginTop: "8px", lineHeight: "20px" }}>
        <span style={{ color: "yellow" }}>Tech Stack: </span>
        {project.stack}
      </h4>
      <div
        style={{
          display: "flex",
          fontSize: "1.5rem",
          justifyContent: "space-around",
          marginTop: "20px",
          cursor:"pointer"
        }}
      >
        <div>
          <Link>
         
            <IoLogoGithub />
          </Link>
        </div>
        <div>
          <Link>
            <BsFillSendFill />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard