import React from 'react'
import about1 from "../images/about1.jpg"
import about2 from "../images/about2.jpg"
import about3 from "../images/about3.jpg"
import about4 from "../images/about4.jpg"
const About1 = () => {
  return (
    <div style={{backgroundColor:" rgb(229, 213, 190)"}}><h1 className='text-yellow-700  font-medium py-10 text-center'>Providing Everything You Need</h1>
    <div className="flex flex-wrap p-4" >
      
      <div className="w-full sm:w-1/2 p-4">
        <div className="p-6 ">
          
          <p className='text-black font-medium  p-6'>WE HELP YOU TO GET <span className='text-yellow-700  '> THE BEST CREATIVE SOLUTIONS  </span> YOUR Choice </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 p-4">
        <div className=" p-6 ">
          
          <p className='text-black p-6' style={{fontSize:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Duis aut 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Duis aut pariatu </p>
        </div>
      </div>
    </div>
    <div
      className="relative h-screen bg-cover bg-center"
      style={{backgroundColor:" rgb(229, 213, 190)"}}
    >
      <div className="absolute inset-0 flex flex-wrap items-center justify-center p-4">
        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
        <div >
           
            <img  className=" rounded-lg " src={about1}/>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
        <div >
           
           <img  className=" rounded-lg " src={about2}/>
         </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
        <div >
           
           <img  className=" rounded-lg " src={about3}/>
         </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
          <div >
           
            <img  className=" rounded-lg " src={about4}/>
          </div>
        </div>
      </div>
    </div>







    </div>
  )
}

export default About1