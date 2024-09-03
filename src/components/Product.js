import React from 'react'
import { Link } from 'react-router-dom'

function Product(props) {
  return (
    <div>
      <div className="card">
       <img src={props.product.image} className="card-img-top" alt={props.product.title}/>
       <p>price:{props.product.price}</p>
     <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
       <p className="card-text">{props.product.description}</p>
       <Link className="btn btn-primary" to={`/Product/${props.product.Id}`}>Details</Link>
  </div>
  </div>
    </div>
  )
}

export default Product
