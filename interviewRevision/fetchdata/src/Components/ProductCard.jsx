


import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div style={{border:"1px solid black"}}>
        <img src={product.image} alt="" height="200" width="200" />
        <h1>{product.title}</h1>
        <h2>{product.category}</h2>
        <h3>{product.price}</h3>
        <h3>{product.rate}</h3>
    <button>DELETE</button>
    <button>EDIT</button>
    
    
    </div>
  )
}

export default ProductCard