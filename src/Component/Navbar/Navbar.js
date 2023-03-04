import { Link, useNavigate } from 'react-router-dom'
import style from './Navbar.module.css'
import { isLogin ,loginUser} from "../../Atom/Atom";
import { useRecoilState ,useRecoilValue } from "recoil";
export default function Navbar(){
    const [loginStatus, setLoginStatus] = useRecoilState(isLogin)
    const logUser = useRecoilValue(loginUser)
    const navigate = useNavigate()
    const handleLogout=()=>{
        setLoginStatus(false)
        navigate("/login")
    }
    return(
        <>
        <div className={style.main}>
        <div className={style.logo}>
        <Link className={style.logo} to='/Home'>
        <img width="80px" src="https://cdn.pixabay.com/photo/2014/03/24/17/21/amtrak-295512_960_720.png" alt="logo" />
        <h3>Live Train Status</h3>
        </Link>
        </div>
        <div className={style.option}>
        <h3><Link className={style.navLinnk} to="/Home">Home </Link></h3>
        <h3><Link className={style.navLinnk} to="/AboutUs">About </Link></h3>
      
        <h3><Link className={style.navLinnk} to="/ContactUs">Contact </Link></h3>
       
        <h3>{logUser.name}</h3>
        <button className={style.btn} onClick={handleLogout}>Log-Out</button>
        </div>
        </div>
        </>
    )
}