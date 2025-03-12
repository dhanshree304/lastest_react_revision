import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-scroll";

const ProjectCard = ({ project }) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        height: "auto",

        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <div>
        <img src={project.img} alt="" height="250px" width="400px" />
      </div>
      <h1 style={{ marginTop: "9px", color: "yellow" }}>{project.name}</h1>
      <p style={{ marginTop: "11px", lineHeight: "20px" }}>
        {project.description}
      </p>
      <h4 style={{ marginTop: "11px", lineHeight: "20px" }}>
        <span style={{ color: "yellow" }}>Tech Stack: </span>
        {project.stack}
      </h4>
      <div
        style={{
          display: "flex",
          fontSize: "1.5rem",
          justifyContent: "space-around",
          marginTop: "20px",
          cursor: "pointer",
        }}
      >
        <div>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <IoLogoGithub />
          </a>
        </div>
        <div>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <BsFillSendFill />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
