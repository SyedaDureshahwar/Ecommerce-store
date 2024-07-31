import React from 'react'
import Testimonial from './ui/Testimonial'
import Aboutmain from './ui/Aboutmain'
import fixedbbg from "./images/about1.jpg"
import Servicesection from './ui/Servicesection'
import Contact from './Contact'
const About = () => {
  return (
    <div>
      <Aboutmain/>
     
      <Testimonial/>
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
      <Servicesection/>
      <Contact/>
    </div>
  )
}

export default About