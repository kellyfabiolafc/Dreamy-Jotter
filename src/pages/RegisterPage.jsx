import style from "../css-modules/LoginPage.module.css";
import iconoDJ from "../assets/icon-dj.png";
 function RegisterPage() {
  return (
    <div className={style.homeContainer}>
      <img className={style.logo} src={iconoDJ} alt="Dreamy Jotter Logo" />
      <p>Unlock your inner world on Dreamy Jotter. Capture your thoughts, memories, and reflections in a realm crafted just for you. Pen down your essence!</p>
      <form className={style.buttonContainer}>
        <input className={style.emailInput} placeholder="Username" />
        <input className={style.emailInput} placeholder="Email" />
        <input className={style.passwordInput} placeholder="Password" />
        <button className={style.loginButton}>Create</button>
      </form>
      <div className={style.additionalOptions}>
        <span>
        Do you already have an account?{" "}
          <span className={style.forgotPasswordLink}>Enter</span>
        </span>
        
      </div>
    </div>
  );
}
export default RegisterPage