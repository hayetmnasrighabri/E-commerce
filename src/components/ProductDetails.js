import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Product from './Product'
function ProductDetails() {
  const params= useParams()
   console.log(params)
  const productId = params.productId
  const [products, setProducts]=useState([])
 useEffect(()=>{
  fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then((products)=>setProducts(products))
 },[])
  return (
    <div>
      <h1>Product Details {productId}</h1>
       <Product product={products}/>
    </div>
  )
}

export default ProductDetails
