import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'
function Product({product, showDetailsButton = true}) {
  return (
    <div>
      <div className="card">
       <img src={product.image} className="card-img-top" alt={product.title}/><hr/>
       <p className='price'>price: {product.price}$</p><hr/>
     <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
       <p className="card-text">{product.description}</p>
       {showDetailsButton &&
       <Link className="btn btn-primary" to={`/Product/${product.id}`}>Details</Link>
}
       </div>
  </div>
    </div>
  )
}

export default Product
