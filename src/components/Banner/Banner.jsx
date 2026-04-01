import React from 'react'
import { CiPlay1 } from 'react-icons/ci'
import { FaRegCircleDot } from 'react-icons/fa6'
import BannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <main className='my-15'>
        <div className='container mx-auto flex gap-10 items-center md:flex-row flex-col'>
            {/* banner left */}
            <div className='flex-1 space-y-5 ml-10'>
             <div className='badge bg-purple-100 p-4 rounded-2xl relative'>
              {/* outer circle */}
              <div className='w-6 h-6 bg-purple-900 rounded-full opacity-20 relative md:block hidden'></div>
              <div className='w-3 h-3 bg-purple-600 rounded-full opacity-70 md:absolute left-[22px] md:block hidden '></div><span className='text-purple-600 font-semibold '>New: AI-Powered Tools Available</span>
             </div>
          <h2 className='font-bold text-4xl md:text-6xl text-[#101727]'>Supercharge Your <br></br>Digital Workflow</h2>
          <p className='text-[#627382]'>Access premium AI tools, design assets, templates, and productivity<br></br> software-all in one place. Start creating faster today.Explore Products</p>
          <button className='p-3 bg-[#4F39F6] rounded-3xl text-sm text-white hover:bg-purple-700 transition-colors font-medium cursor-pointer'>Explore Products</button>
          <button className='btn btn-outline btn-info rounded-3xl ml-4'> <CiPlay1></CiPlay1> Watch Demo</button>
            </div >
            {/* banner right img */}
            <div className=' object-cover flex justify-center md:mx-0 mx-4 group overflow-hidden rounded-2xl'>
                <img src={BannerImg} alt="" className='' />
            </div>

        </div>
    </main>

    
  )
}

export default Banner