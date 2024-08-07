import React from 'react'
import { Link } from 'react-router-dom'
const Servicesection = () => {
  return (
    <div style={{backgroundColor:" white"}}>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <h1 class="sm:text-3xl text-2xl font-medium text-yellow-800 title-font text-center  mb-20" >Design Services
        <p style={{fontSize:"15px",color:"black"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>tempor incididunt ut labore Duis aute irure dolor in reprehenderit  <br/>velit esse cillum dolore eu fugiat nulla pariatu</p>
    
    </h1>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex border-solid border-2 border-yellow-800">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-yellow-800  mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Shooting Stars</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
          <button type="button" class="focus:outline-none px-5 py-5 text-white bg-yellow-700 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-700 font-medium rounded-lg text-sm me-2 mb-2 mt-2 dark:focus:ring-yellow-900"> <Link to="/products">SHOP NOW</Link></button>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex border-solid border-2 border-y-yellow-800">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-yellow-800 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">The Catalyzer</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
          <button type="button" class="focus:outline-none px-5 py-5 text-white bg-yellow-700 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-700 font-medium rounded-lg text-sm me-2 mb-2 mt-2 dark:focus:ring-yellow-900"> <Link to="/products">SHOP NOW</Link></button>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex border-solid border-2 border-yellow-800">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-yellow-800  mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Neptune</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
          <button type="button" class="focus:outline-none px-5 py-5 text-white bg-yellow-700 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-700 font-medium rounded-lg text-sm me-2 mb-2 mt-2 dark:focus:ring-yellow-900"> <Link to="/products">SHOP NOW</Link></button>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Servicesection