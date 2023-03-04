import React, { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import AboutUs from "./Pages/AboutUs/AboutUs"
import ContactUs from "./Pages/ContactUs/ContactUs"
import Card from './Component/Card/Card'
import TrainLivePage from './Pages/TrainLivePage/TrainLivePage'
// import SignUp from './SignUp/SignUp'
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'
import Loader from './Component/Loader/Loader'
// import Login from './Login/Login'


export default function App() {
  const [fetchData , setFetchData] = useState([])
  console.log('update')
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/*' element={<SignUp />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/Home' element={<Home setFetchData={setFetchData} />}></Route>
      <Route path='/AboutUs'element={<AboutUs />}></Route>
      <Route path='/ContactUs'element={<ContactUs  />}></Route>   
      <Route path='/Card'element={fetchData.length > 0? <Card fetchData={fetchData}/> : <Loader />}></Route>
      <Route path='/TrainLivePage' element={<TrainLivePage/>}></Route>
     </Routes>
     </BrowserRouter> 
    </div>
  )
}
