import React from 'react'

const TechSkillCard = ({item}) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        height: "150px",
       borderRadius:"10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <div>
        <img src={item.img} alt="img" height="80px" width="80px" />
      </div>
      <h4 style={{ marginTop: "10px", }}>{item.skill}</h4>
    </div>
  );
}

export default TechSkillCard