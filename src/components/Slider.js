import React from 'react'
import ProductList from './ProductList'
import './Slider.css'
function Slider() {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.digitalschool.paris/sites/default/files/Chef%20de%20projet%20e-commerce_1140x350.jpg" className="d-block w-100 height-500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/photos-gratuite/achats-ligne-paiement-e-commerce-banque_53876-127604.jpg?t=st=1725027251~exp=1725030851~hmac=130a2b77ada3556a9471595922d25077b20013a484edddbb71590df30a0bf1fc&w=996" className="d-block w-100 height-500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.gainde2000.com/wp-content/uploads/2020/07/ecommerce-960x480.png" className="d-block w-100 height-500 " alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<ProductList/>
    </div>
  )
}

export default Slider
