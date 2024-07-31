import React from 'react'
import fixedbbg from "../images/about1.jpg"
import { Link } from 'react-router-dom'
const Divider = () => {
  return (
    <>

<div style={{backgroundColor:" white"}}>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <h1 class="sm:text-3xl text-2xl font-medium text-yellow-700 title-font text-center  mb-20" >FIND PRODUCTS OF YOUR CHOICE
        <p style={{fontSize:"15px",color:"black"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>tempor incididunt ut labore Duis aute irure dolor in reprehenderit  <br/>velit esse cillum dolore eu fugiat nulla pariatu</p>
      <br class="hidden sm:block"/>
    </h1>
    <div class="flex justify-center">
        <button class="inline-flex text-white bg-yellow-800 border-0 py-2 px-6 focus:outline-none hover:  rounded text-lg"><Link to="/products">Shop now</Link></button>
        <button class="ml-4 inline-flex bg-gray-700  border-0 py-2 px-6 focus:outline-no text-white rounded text-lg"><Link to="/contact">Contact</Link></button>
      </div>
  </div>
  
</section>

    </div>
    
<div
      className="bg-fixed h-72 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${fixedbbg})`, 
      }}
    >
      <div >
        <h1 className="text-4xl text-black font-bold text-center">EXPLORE THE STORE WE <br/> ARE PROUD OF</h1>
       
      </div>
    </div>
    </>
  )
}

export default Divider