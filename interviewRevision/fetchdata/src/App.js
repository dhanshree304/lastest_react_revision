import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ProductCard from "./Components/ProductCard";




function App() {
  const [data, setData] = useState([]);
 

  const fetchData = () => {
    return axios
      .get(`http://localhost:8080/products`)
      .then((res) => {
        setData(res.data); //..it is an array [] det to a array [] for further mapping
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };


 


 useEffect(()=>{
  fetchData()
 },[])
  return (
    <div className="App">
      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "40px",
        }}
      >
        {data.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
