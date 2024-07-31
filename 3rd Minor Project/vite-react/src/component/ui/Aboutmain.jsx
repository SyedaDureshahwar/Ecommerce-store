import React from 'react'
import about2 from "../images/about2.jpg"
import { Link } from 'react-router-dom'
const Aboutmain = () => {
  return (
    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-700">About Us
        <br class="hidden lg:inline-block"/><span className='text-gray-900'>Copper mug try-har</span>
      </h1>
      <p class="mb-8 leading-relaxed text-sm">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-yellow-800 border-0 py-2 px-6 focus:outline-none hover:  rounded text-lg"><Link to="/products">Shop now</Link></button>
        <button class="ml-4 inline-flex bg-gray-700  border-0 py-2 px-6 focus:outline-no text-white rounded text-lg"><Link to="/contact">Contact</Link></button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src={about2}/>
    </div>
  </div>
  
</section>
  )
}

export default Aboutmain