
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Stats from './components/StatsBanner/Stats'
import ProductSection from './components/ProductSection/ProductSection'
import Card from './components/ui/Card'
import { ToastContainer } from 'react-toastify'
import StepCard from './components/StepCartSection/StepCard'
import Transparent from './components/TransparentCard/Transparent'
import Footer from './components/Footer/Footer'


const fetchProduct = async()=>{
const res = await fetch("card.json")
return res.json()
}


function App() {
  //ata buy now te click korle koy ta click hoyce ata dekar jonno
  const [selectcartshow,setSelectedCartShow]= useState([])

  // const productPromise = fetchProduct()
   const [productPromise] = useState(() => fetchProduct())
  return (
    <>
    
     <Navbar selectcartshow={selectcartshow}></Navbar>
     <Banner></Banner>
    <Stats></Stats>

    <Suspense fallback={<div className='flex justify-center items-center gap-5 min-h-screen'>
      <span className="loading loading-ring loading-xs"></span>
<span className="loading loading-ring loading-sm"></span>
<span className="loading loading-ring loading-md"></span>
<span className="loading loading-ring loading-lg"></span>
<span className="loading loading-ring loading-xl"></span>
     </div>}>
      <ProductSection productPromise={productPromise} setSelectedCartShow={setSelectedCartShow}  selectcartshow = {selectcartshow} ></ProductSection>
    </Suspense>
    <StepCard></StepCard>
    <Transparent></Transparent>
    <Footer></Footer>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App
