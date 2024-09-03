import React from 'react'

function Product(props) {
  return (
    <div>
      <div className="card">
       <img src={props.product.image} className="card-img-top" alt={props.product.title}/>
     <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
       <p className="card-text">{props.product.description}</p>
       <button className="btn btn-primary">Details</button>
  </div>
  </div>
    </div>
  )
}

export default Product
