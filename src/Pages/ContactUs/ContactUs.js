import React from 'react'
import style from "./ContactUs.module.css"
import { FiPhoneCall } from 'react-icons/fi';
import {BsWhatsapp} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import Navbar from '../../Component/Navbar/Navbar';


export default function ContactUs() {
  return (
    <div className={style.main}>
    <Navbar />
      <h1>ContactUs</h1>
      <p style={{fontSize:'35px',backgroundColor:'#ab75a5c9'}}>We're very approachable and would love to speak to you.
        Feel free to call, send us an email, Tweet us or simply complete the enquiry form.  
      </p>
      <FiPhoneCall/>
      <h4>For Calls</h4>
      <h2>+7 9213273040</h2><br/><br/>

     <BsWhatsapp/>
      <h4>FOR SMS AND WHATSAPP </h4>
      <h2>+7 9213273040</h2><br/><br/>

      <AiOutlineMail/>
      <h4>EMAIL</h4>
      <h2>info@russianrailways.com</h2>
    </div>
  )
}
