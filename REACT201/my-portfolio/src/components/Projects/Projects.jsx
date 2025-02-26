import React from "react";
import ProjectCard from "./ProjectCard";

const myProjects = [
  {
    img: "pop2.jpg",
    name: "Notes App",
    description:
      "A simple and intuitive notes application that allows users to create, edit, and delete notes.",
    stack: "MongoDB, Express.js, React.js, and Node.js ",
  },
  {
    img: "pop1.jpg",
    name: "BMI Calculator",
    description:
      "A Body Mass Index (BMI) Calculator that helps users determine their BMI based on height and weight inputs. Provides health recommendations based on BMI categories.",
    stack: "MongoDB, Express.js, React.js, and Node.js ",
  },
  {
    img: "pop3.jpg",
    name: "Todo App",
    description:
      "A task management app that enables users to add, edit, mark complete, and delete tasks.",
    stack: "Redux, MongoDB, Express.js, React.js, and Node.js ",
  },

  {
    img:"pop4.jpg" ,
    name: "Book-Management App",
    description:
      "A full-stack web application that allows users to add, update, delete, and search books in a collection.",
    stack: "Express.js, React.js,Redux,MongoDB,  and Node.js ",
  },

  {
    img: "pop5.jpg",
    name: "Weather App",
    description:
      "It is a weather app which gives information about current weather situtation of any city , one have to search the name of the city and it gives information about weahter condition",
    stack: "HTML,css,javascript",
  },
  {
    img: "pop6.jpg",
    name: "Myntra Clone",
    description:
      "Myntra is an E-commerce website where u can buy & see various kinds house hold materials and many more things .I have built exact copy of myntra. Its my solo project.",
    stack: "HTML,css,javascript",
  },
];

const Projects = () => {
  return (
    <div style={{ marginTop: "80px" }} id="project">
      <div>
        <h1 style={{ textAlign: "center" }}>Self Implemented Projects</h1>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "80px",
        }}
      >
        {myProjects.map((project, ind) => (
          <ProjectCard key={ind} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
