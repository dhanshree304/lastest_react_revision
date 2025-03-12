import React from "react";
import ProjectCard from "./ProjectCard";
import "./projects.css";

const myProjects = [
  {
    img: "pop2.jpg",
    name: "Notes App",
    description:
      "A simple and intuitive notes application that allows users to create, edit, and delete notes.",
    stack: "MongoDB, Express.js, React.js, and Node.js ",
    githubLink:
      "https://github.com/dhanshree304/backend_Code/tree/main/NOTESAPP",
    liveLink: "https://cute-hamster-07e107.netlify.app",
  },
  {
    img: "pop1.jpg",
    name: "BMI Calculator",
    description:
      "A Body Mass Index (BMI) Calculator that helps users determine their BMI based on height and weight inputs. Provides health recommendations based on BMI categories.",
    stack: "MongoDB, Express.js, React.js, and Node.js ",
    githubLink:
      "https://github.com/dhanshree304/backend_Code/tree/main/BMICALCI",
    liveLink: "https://warm-cranachan-1579be.netlify.app",
  },
  {
    img: "pop3.jpg",
    name: "Todo App",
    description:
      "A task management app that enables users to add, edit, mark complete, and delete tasks.",
    stack: "Redux, MongoDB, Express.js, React.js, and Node.js ",
    githubLink:
      "https://github.com/dhanshree304/lastest_react_revision/tree/main/REACT201/todo__app",
    liveLink:
      "https://67be12d3329343fd8725dacb--genuine-crepe-4b8fc7.netlify.app",
  },

  {
    img: "pop4.jpg",
    name: "Event-management",
    description:
      "Designed and developed a comprehensive event management application to streamline event planning, attendee registration, scheduling, and communication.",
    stack: "Express.js, React.js,Redux,MongoDB,  and Node.js ",
    githubLink:
      "https://github.com/dhanshree304/lastest_react_revision/tree/main/REACT201/event-decor",
    liveLink: "",
  },

  {
    img: "pop5.jpg",
    name: "Weather App",
    description:
      "It is a weather app which gives information about current weather situtation of any city , one have to search the name of the city and it gives information about weahter condition",
    stack: "HTML,css,javascript",
    githubLink:
      "https://github.com/dhanshree304/Learing_basaic-advanced_js/tree/main/30-days-30-projects/WEATHER_APP_day-1",
    liveLink: "https://gleeful-malabi-27a0ca.netlify.app",
  },
  {
    img: "pop6.jpg",
    name: "Myntra Clone",
    description:
      "Myntra is an E-commerce website where u can buy & see various kinds house hold materials and many more things .I have built exact copy of myntra. Its my solo project.",
    stack: "HTML,css,javascript",
    githubLink: "https://github.com/dhanshree304/Myntra_website_Clone",
    liveLink: "https://phenomenal-yeot-9044a4.netlify.app",
  },
];

const Projects = () => {
  return (
    <div id="project" className="projectDiv">
      <div>
        <h1 style={{ textAlign: "center" }}>Self Implemented Projects</h1>
      </div>
      <div className="projectMainDiv">
        {myProjects.map((project, ind) => (
          <ProjectCard key={ind} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
