import { useEffect, useState } from "react";
import {useSearchParams} from "react-router-dom"

const FilterComp = () => {

  const [searchParams,setSearchParams] = useSearchParams()
  const initialCategoryFilter=searchParams.getAll("category")
  const initialSort =searchParams.getAll("sort")
const [category,setCategory] = useState(initialCategoryFilter || [])
const [sort,setSort] = useState(initialSort[0] || "");




const handleFilter =(e)=>{
  const newCategories = [...category]
  if(newCategories.includes(e.target.value)){
    newCategories.splice(newCategories.indexOf(e.target.value),1)
  }else{
    newCategories.push(e.target.value)
  }
setCategory(newCategories)
}



const handleSort=(e)=>{
  setSort(e.target.value)
}

useEffect(()=>{
const params = {}
if(category || sort ){
  category && (params.category=category)
  sort && (params.sort = sort)
  setSearchParams(params)
}
},[category,sort,setSearchParams])
  return (
    <div>
      <h3>FILTER BY CATEGORY</h3>
      <div style={{ fontSize: "20px" }}>
        <label>Fictional</label>
        <input
          type="checkbox"
          value="Fictional"
          checked={category.includes("Fictional")}
          onChange={handleFilter}
        />
        <br />
        <br />

        <label>Science</label>
        <input
          type="checkbox"
          value="Science"
          checked={category.includes("Science")}
          onChange={handleFilter}
        />
        <br />
        <br />
        <label>Novel</label>
        <input
          type="checkbox"
          value="Novel"
          checked={category.includes("Novel")}//refresh kel tri persist rahat selection
          onChange={handleFilter}
        />
        <br />
        <br />
      </div>

      <h3>FILTER BY SORT </h3>
      <div style={{ fontSize: "20px" }}>
        <label>Ascending</label>
        <input
          type="radio"
          value="asc"
          onChange={handleSort}
          name="sort"
          defaultChecked={sort === "asc"}
        />
        <br />
        <br />
        <label>Descending</label>
        <input
          type="radio"
          value="desc"
          name="sort"//ek ch radio button select hot 
          onChange={handleSort}
          defaultChecked={sort === "desc"}//yamule ek refresh kel tri selected rahat 
        />
      </div>
    </div>
  );
};

export { FilterComp };
