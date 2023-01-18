import React from 'react'
import Home from "./Home"
import About from "./About"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
 
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      
       
        </Routes>

      </BrowserRouter>




    </div>
  )
}

export default App