import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'

const Navbar = ({selectcartshow}) => {
   console.log(selectcartshow.length)
  return (
    <nav className='bg-white shadow-xl p-4 sticky top-0 z-50'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center '>
                {/*  nav logo left*/}
                <div className='flex items-center'>
                <h2 className='text-[#4F39F6] font-extrabold text-2xl'>DigiTools</h2>
                </div>

                {/* nav links */}
                <div >
                    <ul className='flex items-center gap-5 font-semibold text-[16px] text-[#101727]'>
                        <li className=''><a href="">Product</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </div>

                {/* nav right  */}

                <div className='flex gap-5 items-center'>
                <button className='relative'><FiShoppingCart></FiShoppingCart>{selectcartshow.length > 0 && (
    <span className='absolute -top-2 -right-2 bg-violet-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold'>
      {selectcartshow.length}
    </span>
  )}</button>
                <a href="">Login</a>
                <button className='p-2 bg-[#4F39F6] rounded-2xl text-sm text-white hover:bg-purple-700 transition-colors font-medium'>Get Started</button>
                </div>
            </div>
        </div>
    </nav>
        
  )
}

export default Navbar