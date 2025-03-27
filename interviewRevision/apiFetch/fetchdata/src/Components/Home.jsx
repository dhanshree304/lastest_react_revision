import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

const Home = () => {
  const [data, setData] = useState([]);
  const { token} = useContext(AuthContext);

  function fetchData() {
    console.log(token,"asdff")
    return axios
      .get(`http://localhost:7676/product`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res.data); //..it is an array [] det to a array [] for further mapping
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(token);
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "40px",
        }}
      >
        {data.map((product) => (
          <ProductCard
            product={product}
            fetchData={fetchData}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
