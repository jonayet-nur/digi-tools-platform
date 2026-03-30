import React, { use } from 'react'
import { FiDivideCircle } from 'react-icons/fi'
import AvailableCard from '../AvailableCard/AvailableCard'

const ProductSection = ({productPromise}) => {
    console.log(productPromise)
    const cardData = use(productPromise)
    console.log(cardData)
  return (
    <div className='w-10/12 mx-auto my-20'>
        <div className='text-center space-y-4'>
            <h2 className='font-bold text-4xl'>Premium Digital Tools</h2>
            <p className='text-[#627382]'>Choose from our curated collection of premium digital<br></br> products designed to boost your productivity and creativity.</p>
        </div>
        <div>
            <button>{cardData.length}</button> 
            <button></button>             

        </div>
        <AvailableCard cardData={cardData}></AvailableCard>
    </div>
  )
}

export default ProductSection