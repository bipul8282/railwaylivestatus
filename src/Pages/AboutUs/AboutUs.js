import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import style from "./AboutUs.module.css"

export default function AboutUs() {
  return (
    <>
    <Navbar />
    <div className={style.main}>
    
     <div className={style.container}>
     <h1>AboutUs</h1>
     <p>Welcome to the about us page of our railway website!</p>
   
<p>We are a team of dedicated professionals who are passionate about providing high-quality railway services to our customers. Our website serves as a one-stop-shop for all your railway needs, from booking tickets to checking train schedules and everything in between.</p>

<p>Our goal is to make your railway experience as smooth and convenient as possible. We understand that travelling by train can be stressful at times, and we want to do everything in our power to alleviate that stress.</p>

<p>We pride ourselves on providing excellent customer service. If you have any questions or concerns, our customer support team is available 24/7 to assist you. You can contact us by phone, email, or through our website's live chat feature.</p>

<p>Thank you for choosing our railway website for your travel needs. We look forward to serving you and providing you with the best possible railway experience.</p>
     </div>
    
      <img className={style.img} src="https://giffiles.alphacoders.com/213/21349.gif" alt="train" />
    </div>
    </>
  )
}
