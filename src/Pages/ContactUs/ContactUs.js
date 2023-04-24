import React from "react";
import style from "./ContactUs.module.css";
import { FiPhoneCall } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Navbar from "../../Component/Navbar/Navbar";
import Image from "./Contact.png";

export default function ContactUs() {
  return (
    <div className={style.main}>
      <Navbar />

      <div className={style.container}>
        <div className={style.detailBox}>
          <h1>ContactUs</h1>
          <div>
          <h5>
            We're very approachable and would love to speak to you. Feel free to
            call, send us an email, Tweet us or simply complete the enquiry
            form.
          </h5>
          </div>
         
          <div>
            <FiPhoneCall />
            <h4>For Calls</h4>
            <h2>91 9213273040</h2>
          </div>

          <div>
            <BsWhatsapp />
            <h4>FOR SMS AND WHATSAPP </h4>
            <h2>91 9213273040</h2>
          </div>

          <div>
            <AiOutlineMail />
            <h4>EMAIL</h4>
            <h2>info@indianrailway.com</h2>
          </div>
        </div>

        <img className={style.img} src={Image} atl="Logo" />
      </div>
    </div>
  );
}
