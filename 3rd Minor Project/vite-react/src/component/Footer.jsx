import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    const [email, setEmail] = useState('');
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your email handling logic here
      
      setEmail('');
    };
  return (
    <><footer className="text-white body-font bg-gray-800">
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-white  text-xl">Store</span>
        </a>
        <p className="mt-2 text-sm text-white">Looking for the best Products Shop Now?</p>
      </div>
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3"> Page</h2>
          <nav className="list-none mb-10">
            <li>
              <Link to="/" className="text-white text-sm ">Home</Link>
            </li>
            <li>
            <Link to="/about" className="text-white text-sm ">About</Link>
            </li>
            <li>
            <Link to="/contact" className="text-white text-sm ">Contact</Link>
            </li>
            <li>
            <Link to="/products" className="text-white text-sm ">Products</Link>
            </li>
          </nav>
        </div>
       
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Page</h2>
          <nav className="list-none mb-10">
          <li>
              <Link to="/" className="text-white text-sm ">Home</Link>
            </li>
            <li>
            <Link to="/about" className="text-white text-sm ">About</Link>
            </li>
            <li>
            <Link to="/contact" className="text-white text-sm ">Contact</Link>
            </li>
            <li>
            <Link to="/products" className="text-white text-sm ">Products</Link>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Page</h2>
          <nav className="list-none mb-10">
          <li>
              <Link to="/" className="text-white text-sm ">Home</Link>
            </li>
            <li>
            <Link to="/about" className="text-white text-sm ">About</Link>
            </li>
            <li>
            <Link to="/contact" className="text-white text-sm ">Contact</Link>
            </li>
            <li>
            <Link to="/products" className="text-white text-sm ">Products</Link>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Newsletter</h2>
        
          <p className="mb-10 text-white text-sm ">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu</p>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label htmlFor="email" className="text-white text-sm" >Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className=" bg-blue-500 text-sm text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
        
      </form>
        </div>
      </div>
    </div>
    <div className="bg-gray-100">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className=" text-gray-800 text-sm text-center sm:text-left">© 2020 Interior —
          <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-800 ml-1" target="_blank">@examplegmail.com</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a className=" text-gray-800">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3  text-gray-800">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3  text-gray-800">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-800">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer></>
  )
}

export default Footer