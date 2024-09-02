import React, { useEffect, useState } from 'react'
import Product from './Product'
function ProductList() {
  const [products, setProducts]=useState([])
  useEffect(()=>{

  fetch(`https://fakestoreapi.com/products`)
            .then(res=>res.json())
            .then(data=>setProducts(data)
             
              )
},[])
  return (
    <div>
      <h2 className='text-center'>Listes des Produits</h2>
      <div className='container'>
      <div className='row'>
      { products.map((product)=>{
        return(
        <div className='col-3' key={product.id}>
        <Product product={product}/>
        </div>
        )     
})}
        
    </div>
</div>

    </div>
  )
}

export default ProductList
