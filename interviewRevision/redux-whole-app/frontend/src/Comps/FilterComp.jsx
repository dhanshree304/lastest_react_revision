import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterComp = () => {
const [searchParams,setSearchParams] = useSearchParams()
const [category,setCategory]=useState([])
const [order,setOrder] = useState("")

const handleFilter=(e)=>{
const newCategories = [...category]
if(newCategories.includes(e.target.value)){
  newCategories.splice(newCategories.indexOf(e.target.value),1)
}else{
  newCategories.push(e.target.value)
}
setCategory(newCategories)
}


const handleOrder=(e)=>{
  setOrder(e.target.value)
}


useEffect(()=>{
  const params ={}
  if(category || order){
    category && (params.category=category);
    order && (params.order=order)
setSearchParams(params)
  }
},[category,order,setSearchParams])
  return (
    <>
      <div className="flex flex-col text-ali">
        <div className="mt-10">
          <h1 className="text-2xl font-bold">Filter by Category</h1>
          <label className="text-xl mt-10 ml-2">History</label>

          <input
          className="h-4 w-4"
            type="checkbox"
            value="History"
            onChange={handleFilter}
            checked={category.includes("History")}
          />
          <br />
          <label>Business</label>
          <input
            type="checkbox"
            value="Business"
            onChange={handleFilter}
            checked={category.includes("Business")}
          />
          <br />
          <label>Fictional</label>
          <input
            type="checkbox"
            value="Fictional"
            onChange={handleFilter}
            checked={category.includes("Fictional")}
          />
        </div>
        <div className="mt-10">
          <h1 className="text-2xl font-bold">Sort by Price</h1>
          <label>Ascending</label>
          <input
            type="radio"
            value="asc"
            name="order"
            onChange={handleOrder}
            defaultChecked={order === "asc"}
          />
          <br />
          <label>Descending</label>
          <input
            type="radio"
            value="desc"
            name="order"
            onChange={handleOrder}
            defaultChecked={order === "desc"}
          />
          <br />
        </div>
      </div>
    </>
  );
};

export default FilterComp;
