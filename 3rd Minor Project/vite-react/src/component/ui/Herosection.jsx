import React from 'react'
import "./Herosection.css"
import { Link } from 'react-router-dom';
const Herosection = () => {
  return (
<div
      className="h-screen w-full bg bg-cover bg-center flex  flex-col items-center justify-center"
     
    >
      <h1 className="text-black text-4xl font-bold text-center">
      LUXURIOUS, CREATIVE AND <br/>COMFORTABLE PRODUCTS
      </h1><br/>
      <button type="button" class="focus:outline-none px-10 py-5 text-white bg-yellow-700 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-700 font-medium rounded-lg text-sm me-2 mb-2 dark:focus:ring-yellow-900"><Link to="/products">SHOP NOW</Link></button>
    </div>
  )
}

export default Herosection