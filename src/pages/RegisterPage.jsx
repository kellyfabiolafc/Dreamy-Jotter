import style from "../css-modules/AuthPage.module.css";
import iconoDJ from "../assets/icon-dj.png";
import Input from "../components/formElement/Input";
import Button from "../components/formElement/Button";
import { Link } from "react-router-dom";
 function RegisterPage() {
  return (
    <div className={style.homeContainer}>
      <img className={style.logo} src={iconoDJ} alt="Dreamy Jotter Logo" />
      <p className={style.introText}>Unlock your inner world on Dreamy Jotter. Capture your thoughts, memories, and reflections in a realm crafted just for you. Pen down your essence!</p>
      <form className={style.buttonContainer}>
        <Input>Username</Input>
        <Input>Email</Input>
        <Input>Password</Input>
        <Button>Create</Button>
      </form>
      <div className={style.additionalOptions}>
        <span>
        Do you already have an account?{" "}
          <Link to={"/"} className={style.forgotPasswordLink}>Enter</Link>
        </span>
        
      </div>
    </div>
  );
}
export default RegisterPage