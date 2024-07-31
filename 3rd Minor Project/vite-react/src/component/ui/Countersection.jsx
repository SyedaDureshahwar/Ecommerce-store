import React from 'react'
import Counter from './Counter'
const Countersection = () => {
  return (
    <>
     <div className="flex    justify-center space-x-4 p-4" style={{backgroundColor:"black"}}>
      <div className="w-full sm:w-1/3 p-4">
        <div className="bg-yellow-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-lg text-white font-semibold mb-4">PRODUCTS</h2>
          <Counter start={0} end={190} duration={2000} />
        </div>
      </div>
      <div className="w-full sm:w-1/3 p-4">
        <div className="bg-yellow-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-lg text-white font-semibold mb-4">BRANDS </h2>
          <Counter start={50} end={150} duration={3000} />
        </div>
      </div>
      <div className="w-full sm:w-1/3 p-4">
        <div className="bg-yellow-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-lg text-white font-semibold mb-4">SATISFY CUSTOMER</h2>
          <Counter start={0} end={40} duration={4000} />
        </div>
      </div>
    </div>
    </>
  )
}

export default Countersection