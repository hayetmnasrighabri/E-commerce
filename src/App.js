import React from 'react'
import NavBar from './components/NavBar'
import Slider from './components/Slider'
import ProductList from './components/ProductList'
import About from './components/About'
import {Routes, Route} from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<>
                                  <Slider/> 
                                   <ProductList/>                      </>
                                   }/>
        <Route path='About' element={<About/>}/>
        <Route path='Product/:productId' element={<ProductDetails/>} />
      </Routes>
      
      
    </div>
  )
}

export default App
