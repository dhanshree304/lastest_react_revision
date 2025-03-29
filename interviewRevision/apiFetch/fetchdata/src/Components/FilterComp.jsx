import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterComp = ({page,limit}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCatFilter = searchParams.get("category");
  const initialOrderFilter = searchParams.get("order");

  const [category, setCategory] = useState(initialCatFilter || "");
const sortBy ="price"
  const [order, setOrder] = useState(initialOrderFilter || "");

  const handleFilter = (e) => {
    setCategory(e.target.value)
    // setSearchParams((prev)=>({...prev,category:e.target.value}))
  };

  console.log(category,order,initialCatFilter)
  const handleOrder = (e) => {
    setOrder(e.target.value)
    // setSearchParams((prev)=>({...prev,order:e.target.value,sortBy:sortBy}))
  };
   
  useEffect(() => {
    let params = {};
    params.page=page
    params.limit=limit
    if (category || order ) {

      category && (params.category = category);
      order && (params.order = order);
      params.sortBy = sortBy;
params.page=1
    }
    setSearchParams(params);
  }, [category, order, setSearchParams,page,limit]);

  return (
    <div>
      <div>
        <h3>Filter from category</h3>
        <select value={category} defaultValue={category} onChange={handleFilter}>
          <option>Select Category</option>

          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
          <option value="women's clothing">women's clothing</option>
          <option value="men's clothing">men's clothing</option>
        </select>
      </div>

      <div>
        <h3>Sort by Order</h3>

        <label>Ascending</label>
        <input
          type="radio"
          value="asc"
          name="order"
          onChange={handleOrder}
          defaultChecked={order === "asc"}
        />

        <label>Desending</label>
        <input
          type="radio"
          value="desc"
          name="order"
          onChange={handleOrder}
          defaultChecked={order === "desc"}
        />
      </div>
    </div>
  );
};

export default FilterComp;
