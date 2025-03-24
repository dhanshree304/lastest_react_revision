import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom'

const Edit = () => {

const {id} =useParams()
const navigate=useNavigate()
const [item, setItem] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
  });


  const prefildData = (e) => {
    const {name,value} = e.target;
    setItem((prev)=>({...prev,[name]:value}));
  };
  const updateProduct = () => {
    return axios
      .patch(`http://localhost:8080/products/${id}`,item)
      .then((r) => navigate("/"))
      .catch((e) => console.log(e));
  };


  const fetchOneBook =()=>{
    return axios.get(`http://localhost:8080/products/${id}`)
    .then((r)=>{setItem(r.data)
      console.log(r.data)
    })
    
  }

  useEffect(()=>{
fetchOneBook()
  },[id])



  return (
    <div>
      <input
        type="text"
        name="image"
        value={item.image}
        onChange={prefildData}
      />
      <input
        type="text"
        name="title"
        value={item.title}
        onChange={prefildData}
      />

      <input
        type="text"
        name="category"
        value={item.category}
        onChange={prefildData}
      />
      <input
        type="number"
        name="price"
        value={item.price}
        onChange={prefildData}
      />
      <button onClick={updateProduct}>UPADTE</button>
    </div>
  );
}

export default Edit