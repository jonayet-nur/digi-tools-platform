
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Stats from './components/StatsBanner/Stats'
import ProductSection from './components/ProductSection/ProductSection'
import Card from './components/ui/Card'


const fetchProduct = async()=>{
const res = await fetch("card.json")
return res.json()
}
//ata buy now te click korle koy ta click hoyce ata dekar jonno

function App() {
  const productPromise = fetchProduct()
  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
    <Stats></Stats>

    <Suspense fallback={<div className='flex justify-center items-center gap-5 min-h-screen'>
      <span className="loading loading-ring loading-xs"></span>
<span className="loading loading-ring loading-sm"></span>
<span className="loading loading-ring loading-md"></span>
<span className="loading loading-ring loading-lg"></span>
<span className="loading loading-ring loading-xl"></span>
     </div>}>
      <ProductSection productPromise={productPromise}></ProductSection>
      
    </Suspense>
    </>
  )
}

export default App
