import { API_BASE } from '@/Utils/util'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'

const SingleBook = () => {

  const [book,setBook] = useState({})

  const {id} = useParams()

  const fetchOneBook =async()=>{

    try {
      const resp = await axios.get(`${API_BASE}/books/single-book/${id}`);
      setBook(resp.data.book);
    } catch (error) {
      console.log(error)
    }

  }


  useEffect(()=>{
    fetchOneBook()
  },[id])
  return (
    <div>
      <img
        className=""
        src="https://png.pngtree.com/png-clipart/20230417/original/pngtree-business-book-cover-design-template-png-image_9060635.png"
        height="200px"
        width="200px"
        alt=""
      />
      <h1 className="text-2xl font-bold mt-2">{book.title}</h1>
      <h2 className="text-xl">{book.category}</h2>
      <h3 className="font-bold">{book.price}</h3>
    </div>
  );
}

export default SingleBook