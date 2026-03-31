import React from 'react'

const Transparent = () => {
  return (
   <div className='my-10'>
     <div className='text-center mt-20 space-y-2 mb-8 md:px-0 px-4'>
            <h2 className='font-bold text-3xl'>Get Started in 3 Steps</h2>
            <p className='text-[#627382] text-center '>Start using premium digital tools in minutes, not hours.</p>
        </div>

    {/* card section pricing */}

  <section className='grid grid-cols-1 md:grid-cols-3 md:px-20 gap-4 px-8 '>
      <div className="card  bg-base-100 shadow-sm mx-auto container ">
  <div className="card-body  ">
     {/* tittle */}
      <h2 className="text-xl font-bold text-gray-800">Starter</h2>
      <p className="text-sm text-gray-400 mt-1 mb-5">Perfect for getting started</p>
  {/* price */}
      <div className="flex items-baseline gap-1 mb-5">
        <span className="text-4xl font-extrabold text-gray-800">$0</span>
        <span className="text-sm text-gray-400">/Month</span>
      </div>
    <ul className="mt-2 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>High-resolution image generation</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Customizable style templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Batch processing capabilities</span>
      </li>
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block rounded-2xl">Get Started Free</button>
    </div>
  </div>
</div>

 <div className="card bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-sm mx-auto container relative">
  <div className="card-body ">
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-100 px-4 py-1.5 rounded-lg whitespace-nowrap">
      <h2 className="text-amber-400 text-xs font-semibold">Most Popular</h2>
    </div>
     {/* tittle */}
      <h2 className="text-xl font-bold text-white">Pro</h2>
      <p className="text-sm text-white mt-1 mb-5">Best for professionals</p>
  {/* price */}
      <div className="flex items-baseline gap-1 mb-5">
        <span className="text-4xl font-extrabold text-white">$29</span>
        <span className="text-sm text-white">/Month</span>
      </div>
    <ul className="mt-2 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-white'>Access to all premium tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-white'>Unlimited templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-white'>Priority support</span>
      </li>
    </ul>
    <div className="mt-6">
      <button className="btn bg-white btn-block rounded-2xl text-purple-600">Start Pro Trial</button>
    </div>
  </div>
</div>
 <div className="card  bg-base-100 shadow-sm mx-auto container">
  <div className="card-body">
     {/* tittle */}
      <h2 className="text-xl font-bold text-gray-800">Enterprise</h2>
      <p className="text-sm text-gray-400 mt-1 mb-5">For teams and businesses</p>
  {/* price */}
      <div className="flex items-baseline gap-1 mb-5">
        <span className="text-4xl font-extrabold text-gray-800">$99</span>
        <span className="text-sm text-gray-400">/Month</span>
      </div>
    <ul className="mt-2 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Everything in Pro</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Team collaboration</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom integrations</span>
      </li>
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block rounded-2xl">Contact Sales</button>
    </div>
  </div>
</div>
  </section>

   </div>
  )
}

export default Transparent