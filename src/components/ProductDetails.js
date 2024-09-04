import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Product from './Product'
function ProductDetails() {
  const params= useParams()
   console.log(params)
  const productId = params.productId
  const [products, setProducts]=useState([])
  const [categorie, setCategorie]=useState()

 useEffect(()=>{
  fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then((products)=>setProducts(products))
        },[])
  return (
    <div className='Details'>
      <h1>Product Details {productId}</h1>
       <Product product={products} showDetailsButton={false} />
    </div>
  )
}

export default ProductDetails
