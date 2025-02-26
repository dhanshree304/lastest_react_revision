import React from "react";
import TechSkillCard from "./TechSkillCard";

const images = [
  { img: "HTML5.png", skill: "HTML" },
  { img: "CSS3.png", skill: "CSS3" },
  { img: "JavaScript.png", skill: "Javascript" },
  { img: "TypeScript.png", skill: "Typescript" },
  { img: "react.png", skill: "React.js" },
  { img: "Redux.png", skill: "Redux" },
  { img: "MongoDB.png", skill: "MongoDB" },
  { img: "Express.png", skill: "Express" },
  { img: "Node.js.png", skill: "Node.js" },
  { img: "Firebase.png", skill: "Firebase" },
  { img: "Shadcn.png", skill: "Git" },
  { img: "Tailwind CSS.png", skill: "Tailwind CSS" },
  { img: "Shadcn.png", skill: "Shadcn" },
];

const TechSkills = () => {
  return (
    <div style={{ marginTop: "100px" }} id='tech-skill'>
      <div>
        <h1 style={{ textAlign: "center" }}>Tech Skills</h1>
      </div>
      <div
        style={{
          display: "grid",
         
          gridTemplateColumns: "repeat(6,1fr)",
          gap: "20px",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "80px",
         
        }}
      >
        {images.map((item, ind) => (
          <TechSkillCard key={ind} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TechSkills;
