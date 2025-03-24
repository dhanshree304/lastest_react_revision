import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleItem = () => {
    const {id}=useParams()
    const [product,setProduct]=useState({})

const getOneBook=()=>{
    return axios.get(`http://localhost:8080/products/${id}`)
    .then((r)=>{
        setProduct(r.data.data)
        console.log(r)})
    .catch((e)=>console.log(e))
}


    useEffect(()=>{
        getOneBook()
    },[id])
  return (
    <div>
      <img src={product.image} alt="" height="200" width="200" />
      <h1>{product.title}</h1>
      <h2>{product.category}</h2>
      <h3>{product.price}</h3>
      <h3>{product.rate}</h3>
    
    </div>
  );
}

export default SingleItem