import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Product.css'
function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([])

  const getProducts = () => {
    fetch(`https://fakestoreapi.com/products`)
      .then(res => res.json())
      .then(data => setProducts(data));
  };

  const getCategories = () => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then(res => res.json())
      .then(data => setCategories(data)); 
  };
   const handleProductCategories=(catName)=>{
    fetch(`https://fakestoreapi.com/products/category/${catName}`)
    .then(res=>res.json())
    .then(data=>setProducts(data))
   }
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <div>
      <h2 className="text-center">Listes des Produits</h2>
      <div className="container">
        {categories.map((cat) => (
          <button className='btn btn_info' onClick={()=>handleProductCategories(cat)} key={cat}>
            {cat}
          </button>
        ))}
        <div className="row">
          {products.map((product) => (
            <div className="col-3" key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;