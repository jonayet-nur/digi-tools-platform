import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
   <section className='bg-[#101727] p-10 my-5'>
   <div className='w-10/12 mx-auto'>
    
 <footer className="grid md:grid-cols-5 grid-cols-2 gap-5 ">
    <div className='mr-10'>
        <h1 className=' text-white text-2xl font-bold '>DigiTools</h1>
        <p className='  text-[#ffffff9e] line-clamp-3 '>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
    </div>
    <div className='flex flex-col text-[#ffffff9e]' >
    <h6 className="text-white font-bold">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </div>
  <div  className='flex flex-col   text-[#ffffff9e]'>
    <h6 className="text-white font-bold">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </div>
  <div  className='flex flex-col   text-[#ffffff9e]'>
    <h6 className="text-white font-bold">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>

  <div className=' text-gray-600'>
    <h5 className='mb-2 text-white font-bold'>Social Links</h5>
    <div className='flex gap-2 '>
        <a href="" className='bg-white p-2 rounded-full'><FaInstagram></FaInstagram></a>
     <a href="" className='bg-white p-2 rounded-full'><FaFacebookSquare></FaFacebookSquare></a>
      <a href="" className='bg-white p-2 rounded-full'><FaXTwitter></FaXTwitter></a>
    </div>
  </div>

</footer>
   <hr className="h-0.5 bg-gray-600 border-none my-5" />
   <div className='text-gray-500 flex justify-between md:flex-row flex-col'>
    <p className='text-gray-500'> &copy; 2026 Digitools.All rights reserved.</p>
   <div className=' flex gap-5 '>
     <a href="">Privacy Policy </a>
    <a href=""> Terms of Service</a>
    <a href="">Cookies</a>
   </div>
   </div>
   </div>
   
   </section>
  )
}

export default Footer