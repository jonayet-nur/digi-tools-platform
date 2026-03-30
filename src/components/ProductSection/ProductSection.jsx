import React, { use, useState } from 'react'
import { FiDivideCircle } from 'react-icons/fi'
import AvailableCard from '../AvailableCard/AvailableCard'
import SelectedCart from '../BuyNowCart/SelectedCart'

const ProductSection = ({productPromise}) => {
    console.log(productPromise)
    const cardData = use(productPromise)
    console.log(cardData)

    //button toggoling
    const[selectButton,setSelectedButton]=useState("products")
    console.log(selectButton)
  return (
   
     <div className='w-10/12 mx-auto my-20'>
        <div className='text-center space-y-4'>
            <h2 className='font-bold text-4xl'>Premium Digital Tools</h2>
            <p className='text-[#627382]'>Choose from our curated collection of premium digital<br></br> products designed to boost your productivity and creativity.</p>
        </div>
        <div className='text-center my-5'>
            <button onClick={()=> setSelectedButton("products")} className={`btn rounded-r-none rounded-l-2xl ${selectButton==="products"?"btn-primary":""}`}>Products</button> 
        <button onClick={()=> setSelectedButton("cart")} className={`btn rounded-l-none  rounded-r-2xl ${selectButton==="cart"?"btn-primary":""}`}>Cart</button>             

        </div>
     {selectButton ==="products" ?<AvailableCard cardData={cardData}></AvailableCard>:<SelectedCart></SelectedCart>}
    </div>
   
  
    
  )
}

export default ProductSection