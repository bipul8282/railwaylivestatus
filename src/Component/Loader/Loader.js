import style from './Loader.module.css'
export default function Loader() {
    return(
        <>
        <div className={style.main}>
        <div className={style.loader}></div>
        </div>
        </>
    )
}