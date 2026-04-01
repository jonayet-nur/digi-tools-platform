import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'

const Navbar = ({selectcartshow}) => {
//    console.log(selectcartshow.length)
  return (
    <nav className='bg-white shadow-xl p-4 sticky top-0 z-50'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center '>
                {/*  nav logo left*/}
                <div className='flex items-center'>
                <h2 className='text-[#4F39F6] font-extrabold text-4xl'>DigiTools</h2>
                </div>

                {/* nav links */}
                <div className='md:block hidden'>
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
    <span className='absolute -top-3 -right-4 bg-violet-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold'>
      {selectcartshow.length}
    </span>
  )}</button>
                <a href="">Login</a>
                <button className='p-2 bg-[#4F39F6] rounded-2xl text-sm text-white hover:bg-purple-700 transition-colors font-medium md:block hidden'>Get Started</button>

<div className="dropdown md:hidden block">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow  -ml-12 ">
         <li className=''><a href="">Product</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="">FAQ</a></li>
      </ul>
    </div>
              </div>
            </div>
        </div>
    </nav>
        
  )
}

export default Navbar