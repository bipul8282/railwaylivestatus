import React, { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import AboutUs from "./Pages/AboutUs/AboutUs"
import ContactUs from "./Pages/ContactUs/ContactUs"
import Card from './Component/Card/Card'
import TrainLivePage from './Pages/TrainLivePage/TrainLivePage'
import SignUp from './Login/SignUp'


export default function App() {
  const [fetchData , setFetchData] = useState([])
  console.log('update')
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<SignUp />}></Route>
      <Route path='/Home' element={<Home setFetchData={setFetchData} />}></Route>
      <Route path='/AboutUs'element={<AboutUs />}></Route>
      <Route path='/ContactUs'element={<ContactUs  />}></Route>   
      <Route path='/Card'element={<Card fetchData={fetchData}/>}></Route>
      <Route path='/TrainLivePage' element={<TrainLivePage/>}></Route>
     </Routes>
     </BrowserRouter> 
    </div>
  )
}
