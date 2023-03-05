import React, { useEffect, useState } from 'react';
import style from "./Login.module.css"
import { useNavigate } from 'react-router-dom';
import { isLogin ,loginUser} from '../Atom/Atom';
import { useSetRecoilState } from 'recoil';
export default  function Login() {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ userList , setUserList] = useState([])
  const navigate = useNavigate()
  const setLogin = useSetRecoilState(isLogin)
  const setLoginUser = useSetRecoilState(loginUser)

 useEffect(()=>{
  const userData = JSON.parse(localStorage.getItem("contacts"))
  setUserList(userData)
 },[])

  const handleSubmit = (e) => {
    e.preventDefault();
  
  const userFind = userList.find(x=> x.email === email && x.password === password)
   if (userFind) {
    alert(`${userFind.name} you are logged-in`);
    setLogin(true)
    setLoginUser(userFind)
    navigate('/Home')
   }else{
    alert('Yous need to register first')
    navigate('/')
   }
    // everything is valid
    

  
    setEmail('');
   
    setPassword("");
    // alert('Contact added successfully.');
    navigate("/Home")
  };

  return (
    <div className={style.main}>
   
      <form className={style.form} style={{ fontSize: '20px' }} onSubmit={handleSubmit}>
      <h1>Login</h1>
      
        <section >
          <label htmlFor="email">Email</label>
          <input
           className={style.intBox}
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </section>
       
        <section >
          <label htmlFor="password">Password</label>
          <input
          className={style.passwordinput}
            id="password"
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </section>
        
        <button  type="submit">Submit</button>
      </form>
    </div>
  );
}


