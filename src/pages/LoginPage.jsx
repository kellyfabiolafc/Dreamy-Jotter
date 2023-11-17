import style from "../css-modules/AuthPage.module.css";
import css from "../css-modules/Button.module.css";
import iconoDJ from "../assets/icon-dj.png";
import Button from "../components/formElement/Button";
import Input from "../components/formElement/Input";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// Ahora puedes acceder a los servicios de Firebase utilizando las referencias en el objeto `firebase`

import { UserAuth } from "../context/AuthContext";
import { useEffect } from "react";

function LoginPage() {
  const {googleSignIn,user}= UserAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      await googleSignIn(); // Llama a la función signInWithGoogle
     navigate("/dashboard");
    } catch (error) {
      console.error("Error al autenticar con Google:", error);
    }
  };
  useEffect(()=>{
if(user!=null){navigate("/dashboard")}
  },[user])

  return (
    <div className={style.homeContainer}>
      <img className={style.logo} src={iconoDJ} alt="Dreamy Jotter Logo" />
      <form className={style.buttonContainer}>
        <button   type="button" onClick={handleGoogleSignIn} className={css.universalInput}>
          <div className={style.googleButtonContent}>
            <i
              className="bx bxl-google"
              style={{
                marginRight: "8px",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                color: "#CF8193",
              }}
            />
            <span>Continue with Google</span>
          </div>
        </button>

        <span>or</span>
        <Input>Email</Input>
        <Input>Password</Input>
        <Button>Login</Button>
      </form>

      <div className={style.additionalOptions}>
        <span>
          Did you forget your password ?{" "}
          <Link to={"/forgot-password"} className={style.forgotPasswordLink}>Get it back</Link>
        </span>
        <span>
          You do not have an account?{" "}
         <Link to={"/register"} className={style.registerLink}>Sign up</Link>
        </span>
      </div>
    </div>
  );
}

export default LoginPage;
