import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const SingleItem = () => {

  const {token} = useContext(AuthContext)
    const {id}=useParams()
    const [product,setProduct]=useState({})

const getOneBook=()=>{
    return axios
      .get(`http://localhost:7676/product/${id}`,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        }})
      .then((r) => {
        setProduct(r.data);
        console.log(r);
      })
      .catch((e) => console.log(e));
}


    useEffect(()=>{
        getOneBook()
    },[id])
  return (
    <div>
      <img src={product?.image || ""} alt="productPic" height="200" width="200" />
      <h1>{product.title}</h1>
      <h2>{product.category}</h2>
      <h3>{product.price}</h3>
      <h3>{product.rate}</h3>
    
    </div>
  );
}

export default SingleItem