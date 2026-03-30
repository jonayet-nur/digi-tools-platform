import React from 'react'
import Card from '../ui/Card'

const AvailableCard = ({cardData}) => {
    console.log(cardData)
  return (
    
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {
            cardData.map((singleCard)=>{
                return <Card key={singleCard.id} singleCard={singleCard}></Card>
            })
        }
    </div>
  )
}

export default AvailableCard