import style from "../css-modules/AuthPage.module.css";
import css from "../css-modules/Button.module.css";
import iconoDJ from "../assets/icon-dj.png";
import Button from "../components/Button/Button";
import Input from "../components/Button/Input";

function LoginPage() {

  return (
    <div className={style.homeContainer}>
      <img className={style.logo} src={iconoDJ} alt="Dreamy Jotter Logo" />
      <form className={style.buttonContainer}>
        <button className={css.universalInput}>
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
          <span className={style.forgotPasswordLink}>Get it back</span>
        </span>
        <span>
          You do not have an account?{" "}
          <span className={style.registerLink}>Sign up</span>
        </span>
      </div>
    </div>
  );
}

export default LoginPage;
