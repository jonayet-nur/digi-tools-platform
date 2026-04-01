import React from 'react'
import Card from '../ui/Card'

const AvailableCard = ({cardData,setSelectedCartShow,selectcartshow,productPrice,setProductPrice}) => {
    // console.log(cardData)
  return (
    
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {
            cardData.map((singleCard)=>{
                return <Card key={singleCard.id} singleCard={singleCard} setSelectedCartShow={setSelectedCartShow} selectcartshow={selectcartshow} productPrice={productPrice}setProductPrice={setProductPrice}></Card>
            })
        }
    </div>
  )
}

export default AvailableCard