import React from 'react'
import NavBar from './components/NavBar'
import Slider from './components/Slider'
import ProductList from './components/ProductList'
import About from './components/About'
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<>
                                  <Slider/> 
                                   <ProductList/>
                                   </>
                                   }/>
        <Route path='About' element={<About/>}/>
      </Routes>
      
      
    </div>
  )
}

export default App
