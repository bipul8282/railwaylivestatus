import { atom } from "recoil";


export const traindata = atom({
    key:"traindata",
    default:[],
  })

  export const isLogin = atom({
    key: "isLogin",
    default : false
  })
  export const loginUser = atom({
    key: "loginUser",
    default : {}
  })