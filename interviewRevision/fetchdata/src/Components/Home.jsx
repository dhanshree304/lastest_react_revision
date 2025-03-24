import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import axios from 'axios';

const Home = () => {
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

  useEffect(() => {
    fetchData();
  }, []);
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
          <ProductCard product={product} fetchData={fetchData} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Home