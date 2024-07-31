import React from 'react'
import { Link } from 'react-router-dom';
const ThankuPage = () => {
  return (
    <div className='py-20'>

        <div className='text-yellow-500'>  Thanku For Shopping</div>
       <div className='mt-10 flex flex-wrap justify-center'> <button type="button" class="focus:outline-none px-10 py-5 text-white bg-indigo-500 hover:bg-indigo-700  focus:ring-4 focus:ring-yellow-700 font-medium rounded-lg text-sm me-2 mb-2 dark:focus:ring-yellow-900"> <Link to="/products">Continue Shopping</Link></button>
       <button type="button" class="focus:outline-none px-10 py-5 text-white bg-yellow-500 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-700 font-medium rounded-lg text-sm me-2 mb-2 dark:focus:ring-yellow-900"> <Link to="/">Home</Link></button></div>
    </div>
  )
}

export default ThankuPage
