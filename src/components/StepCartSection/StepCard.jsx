import React from 'react'
import pakageImg from "../../assets/package.png"
import userImg from "../../assets/user.png"
import rocketImg from "../../assets/rocket.png"
const StepCard = () => {
  return (
    <div className='bg-gray-100 grid  pb-8'>
        <div className='text-center mt-20 space-y-2 md:px-0 px-4'>
            <h2 className='font-bold text-3xl'>Get Started in 3 Steps</h2>
            <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
        </div>
       {/* cart section */}

      <section className='grid grid-cols-1 md:grid-cols-3 gap-5 container md:mx-auto my-9 mr-2 ml-2'>
        <div className=' mx-5 md:mx-0 '>
            
         <div className="card bg-base-100 w-full relative">
            <div className="bg-purple-500 w-8 h-8 rounded-full  absolute right-10 top-5"><span className=' text-white font-semibold left-2 absolute top-1'>01</span></div>
  <figure className="px-10 pt-10">
    <img
      src={userImg}
      alt="Shoes"
      className="rounded-full w-25 bg-purple-100 p-6" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Create Account</h2>
    <p>Sign up for free in seconds. No credit card required to get started.</p>
    
  </div>
</div>
      </div>



 <div className='mx-5 md:mx-0 '>
         <div className="card bg-base-100 w-full relative ">
            <div className="bg-purple-500 w-8 h-8 rounded-full  absolute right-10 top-5"><span className=' text-white font-semibold left-2 absolute top-1'>02</span></div>
  <figure className="px-10 pt-10">
    <img
      src={pakageImg}
      alt="Shoes"
      className="rounded-full w-25 bg-purple-100 p-6" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Choose Products</h2>
    <p className='w-2xs'>Browse our catalog and select the tools that fit your needs.</p>
    
  </div>
</div>
      </div>


 <div className='mx-5 md:mx-0'>
         <div className="card bg-base-100  w-full relative">
            <div className="bg-purple-500 w-8 h-8 rounded-full  absolute right-10 top-5"><span className=' text-white font-semibold left-2 absolute top-1'>03</span></div>
  <figure className="px-10 pt-10">
    <img
      src={rocketImg}
      alt="Shoes"
      className="rounded-full w-25 bg-purple-100 p-6" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Start Creating</h2>
    <p>Download and start using your premium tools immediately.</p>
  </div>

</div>
      </div>




      </section>











    </div>
  )
}

export default StepCard