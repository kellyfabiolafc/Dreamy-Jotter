import style from "../css-modules/HomePage.module.css";
import iconoDJ from "../assets/icon-dj.png";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className={style["container-home"]}>
      <img className={style.logo} src={iconoDJ} alt="Dreamy Jotter Logo" />
      <div className={style["container-buttons"]}>
        <button className={style["btn-google"]}>
          <div className={style["conteiner-btn-google"]}>
            <i
              className="bx bxl-google"
              style={{
                marginRight: "8px",
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
              }}
            />
            <span>Continue with Google</span>
          </div>
        </button>

        <span>or</span>
        <button className={style["btn-light"]}>Email</button>
        <button className={style["btn-light"]}>Password</button>
        <Link className={style["btn"]} >Login</Link>
      </div>
    </div>
  );
}

export default HomePage;
