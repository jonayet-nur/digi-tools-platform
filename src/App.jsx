
import { Suspense } from 'react'
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
function App() {
  const productPromise = fetchProduct()
  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
    <Stats></Stats>

    <Suspense>
      <ProductSection productPromise={productPromise}></ProductSection>
      
    </Suspense>
    </>
  )
}

export default App
