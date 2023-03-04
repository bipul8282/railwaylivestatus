import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { isLogin } from "../../Atom/Atom";
import { useRecoilValue } from "recoil";


import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Atom/Footer/Footer";

function Home({setFetchData}) {
  const navigate = useNavigate();
  const [number, setNumber] = useState("");
  const loginStatus = useRecoilValue(isLogin)
  useEffect(()=>{
    if(!loginStatus){
      navigate('/login')
    }
  },[])
  function handleClick(number) {
    if(!number){
      alert("Please search by number")
    }else{

   
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "43e138d2a8mshdd5783f8629f9afp105103jsnfac1b0bd9c7a",
        "X-RapidAPI-Host": "indian-railway-irctc.p.rapidapi.com",
      },
    };

    fetch(
      `https://indian-railway-irctc.p.rapidapi.com/getTrainId?trainno=${number}`,
      options
    )
      .then((response) => response.json())
      .then((response) =>   setFetchData(response))
      .catch((err) => console.error(err));
     navigate('/Card')
    }
  }
    // console.log(trainList, "predicted train by number");

  return (
    <>{loginStatus && 
      <div className={style.homeMain}>
        <Navbar />
       
        <div className={style.App}>
          <div className={style.main}>
            <h3>SEARCH BY TRAIN</h3>
            <input
              type="text"
              value={number}
              className={style.inputContainer}
              placeholder="Train Number"
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            <button
              className={style.btnContainer}
              onClick={() => handleClick(number)}
            >
              Check Status
            </button>{" "}
          </div>
        </div>
        <Footer  className={style.footer}/>
      </div>
    }
    </>
  );
}

export default Home;
