import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import FilterComp from "./FilterComp";
import { useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";

const Home = () => {
  const [searchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(0);
  const pageParam = searchParams.get("page");

  const [params, setParams] = useState({ page: pageParam || 1, limit: 4 });

  const [data, setData] = useState([]);
  const { token } = useContext(AuthContext);

  function fetchData(params) {
    console.log(token, "asdff");
    return axios
      .get(`http://localhost:7676/product`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
        params: params,
      })
      .then((res) => {
        setData(res.data.products);
        setTotalPages(res.data.totalPages);
        //..it is an array [] det to a array [] for further mapping
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    const orderBy = searchParams.get("order");
    const sortBy = searchParams.get("sortBy");

    let getProductParams = {
      category: searchParams.get("category"),
      sortBy: sortBy, //price
      order: orderBy, //asc desc

      ...params, //page limit
    };
    fetchData(getProductParams);
    console.log(getProductParams);
  }, [searchParams, params]);
  console.log(token);
  return (

    <div>
     
        <div>
          <FilterComp page={params.page} limit={params.limit} />
        
        
          <Pagination
            params={params}
            setParams={setParams}
            totalPages={totalPages}
          />
        
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "40px",
          marginTop: "40px",
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
