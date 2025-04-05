import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


const FilterComp = ({setPageParams}) => {
const [,setSearchParams] = useSearchParams()
const [category,setCategory]=useState([])
const sortBy="price"
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
    order && (params.sortBy=sortBy)
    setPageParams((prev)=>({...prev,page:1}))
  }
  setSearchParams(params)
},[category,order,setSearchParams,setPageParams])
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="mt-10">
          
          <h1 className="text-2xl font-bold">Filter by Category</h1>
          <label className="text-xl font-medium ">History</label>

          <input
            className="h-4 w-4"
            type="checkbox"
            value="History"
            onChange={handleFilter}
            checked={category.includes("History")}
          />
          <br />

          <label className="text-xl font-medium">Business</label>
          <input
            className="h-4 w-4"
            type="checkbox"
            value="Business"
            onChange={handleFilter}
            checked={category.includes("Business")}
          />
          <br />
          <label className="text-xl font-medium">Fiction</label>
          <input
            className="h-4 w-4"
            type="checkbox"
            value="Fiction"
            onChange={handleFilter}
            checked={category.includes("Fiction")}
          />
        </div>
        <div className="mt-10">
          <h1 className="text-2xl font-bold">Sort by Price</h1>
          <label className="text-xl font-medium">Ascending</label>
          <input
            className="h-4 w-4"
            type="radio"
            value="asc"
            name="order"
            onChange={handleOrder}
            defaultChecked={order === "asc"}
          />
          <br />
          <label className="text-xl font-medium">Descending</label>
          <input
            className="h-4 w-4"
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
