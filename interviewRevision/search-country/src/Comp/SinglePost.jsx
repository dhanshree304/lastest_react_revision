import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SinglePost = () => {
const {id} = useParams()
const [post ,setPost] =useState({})

const fetchOnePost =async()=>{

    try {
        const resp = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        console.log(resp)
        setPost(resp.data)
        
    } catch (error) {
        console.log(error)
        
    }
    

}


useEffect(()=>{
    fetchOnePost(id)
},[id])

  return (
    <div>

        <h1>{post.title}</h1>


    </div>
  )
}

export default SinglePost