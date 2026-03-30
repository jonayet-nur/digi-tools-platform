import React from 'react'

const Stats = () => {
  return (
    <div className=" shadow w-full  bg-linear-to-r from-violet-700 via-purple-600 to-violet-500 p-16 my-8 ">
     
    <div className='grid md:grid-cols-3 gap-10 justify-center items-center md:pl-50 '> 
 <div className="">
    <div className="font-extrabold text-5xl text-white">50K+</div>
    <div className="text-xl text-white md:border-r-2 border-gray-300 ">Active Users</div>
    
  </div>


  <div className="">
    <div className="font-extrabold text-5xl text-white">200+</div>
    <div className="text-xl text-white md:border-r-2 border-gray-300">Premium Tools</div>
  </div>

  <div className="">
    <div className="font-extrabold text-5xl text-white">4.9</div>
    <div className="text-xl text-white">Rating</div>
  </div>

  
     </div>






</div>
  )
}

export default Stats