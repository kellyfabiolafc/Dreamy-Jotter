import style from "../css-modules/HomePage.module.css";
import iconoDJ from "../assets/dreamyJ-icon-nav.png"
 function HomePage() {
    return (
      <div className={style["container-home"]}>
        <h1 className={style.title} >Dreamy Jotter</h1>
        <img className={style.logo} src={iconoDJ} alt="Dreamy Jotter Logo" />
        <div className={style["container-buttons"]}>
        <button className={style["btn-login"]}>Login</button>
        <button className={style["btn-sign"]}>Sign Up</button>
        </div>
        
      </div>
    )
  }
  
export default HomePage;