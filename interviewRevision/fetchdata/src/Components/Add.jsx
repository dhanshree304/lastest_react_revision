import React, { useState } from "react";

const Add = () => {
  const [item, setItem] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
  });
  return (
    <div>
      <input type="text" value={item.title} />
      <input type="text" value={item.image}/>
      <input type="text" value={item.category}/>
      <input type="number" value={item.price}/>
    </div>
  );
};

export default Add;
