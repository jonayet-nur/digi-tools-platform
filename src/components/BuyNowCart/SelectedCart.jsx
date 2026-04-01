import { ToastContainer, toast } from 'react-toastify';
import React from 'react'
import Card from '../ui/Card'
import { MdDelete } from 'react-icons/md'


import { 
  FaUser, FaStar, FaCrown, FaRocket,
  FaBuilding, FaGraduationCap, FaCalendar, FaBriefcase 
} from "react-icons/fa";

const icons = {
  FaUser,
  FaStar,
  FaCrown,
  FaRocket,
  FaBuilding,
  FaGraduationCap,
  FaCalendar,
  FaBriefcase
};
const SelectedCart = ({selectcartshow,setSelectedCartShow,productPrice,setProductPrice}) => {
    console.log(selectcartshow)

    const removeDeleteCart = (cartedSelect)=>{
        // console.log(cartedSelect,"delete work")
        const filterCart = selectcartshow.filter(removeCart=> removeCart.name != cartedSelect.name)
        setSelectedCartShow(filterCart)
        toast.info(` Remove are Successful`);
        //remove button click for total amount decrease
      setProductPrice(prev => {
  const newValue = prev - cartedSelect.price
  return Math.round(newValue * 100) / 100
})
       
    }

    const procedHandle =()=>{
        setProductPrice(0)
        setSelectedCartShow([])
if (selectcartshow.length === 0) {
    toast.error("No cart selected");
     
}else{
    toast.success(" Proceed Successful");
}
       
         
    }
  return (
    
       
        <div className='border-2 border-gray-200 shadow-xl p-10 rounded-2xl'>
             <h1 className='font-bold text-xl text-[#101727a4]'>Your Cart</h1>
          
          {
            selectcartshow.length===0?<div>
            <h2 className='text-center font-semibold text-2xl'>No product available</h2>
          </div>:
            selectcartshow.map(( cartedSelect) => {
                const Icon = icons[cartedSelect.icon];
                return <div  className='flex justify-between items-center border-2 border-gray-200  rounded-2xl p-5 shadow-gray-100 shadow-xl mt-3'>
            <div className='flex gap-6 '>
            <span className='md:text-3xl  text-blue-800 bg-white  border-2 border-gray-200 md:p-4 rounded-full text-xl  p-2'>{Icon &&  <Icon />}</span>
            <div >
                <h2 className='font-bold md:text-2xl'> {cartedSelect.name}</h2>
                <p className='text-gray-400'>$ {cartedSelect.price}</p>
            </div>
            </div>
            <button className='btn text-red-500' onClick={()=>removeDeleteCart(cartedSelect)}><MdDelete></MdDelete></button>

            
        </div>
            })
          
          }










         <div  className='flex justify-between p-5'>
                 <p className='text-gray-500'>total</p>
                <p className='text-[20px] font-bold'>$ {productPrice.toFixed(2)}</p>
            </div>
             <button onClick={ procedHandle} className='btn rounded-full w-full text-white bg-linear-to-r from-blue-500 to-purple-500'>Proceed to Checkout</button>
        </div>
   
  )
}

export default SelectedCart