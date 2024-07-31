import React from 'react'
import Herosection from './ui/Herosection';
import Countersection from './ui/Countersection';
import About1 from './ui/About1';
import Servicesection from './ui/Servicesection';
import Divider from './ui/Divider';
import ProductCardhome from './ui/ProductCardhome';
import Contact from './Contact';
const Home = () => {
   
    
  return (
    <div>
       
        <Herosection/>
       
        <Countersection/>
       
        
        <Divider/>
        <ProductCardhome/>
        <About1/>
        <Contact/>
      
    </div>
  )
}

export default Home