import style from "../css-modules/AuthPage.module.css";
import iconoDJ from "../assets/icon-dj.png";
import Input from "../components/formElement/Input";
import Button from "../components/formElement/Button";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import validator from "validator";
function RegisterPage() {
  const { registerWithGmail } = UserAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isEmailValid = (email) => {
    return validator.isEmail(email);
  };
  
  const handleRegisterWithGmail = async () => {
    try {
      const trimmedEmail = email.trim();
      console.log('Email:', email);
      console.log('Trimmed Email:', trimmedEmail);
  
      if (!isEmailValid(trimmedEmail)) {
        throw new Error("Correo electrónico inválido");
      }
  
      console.log('Calling registerWithGmail');
      await registerWithGmail(username, trimmedEmail, password);
    } catch (error) {
      console.error('Error al registrar con Gmail:', error);
    }
  };
  

  return (
    <div className={style.homeContainer}>
      <img className={style.logo} src={iconoDJ} alt="Dreamy Jotter Logo" />
      <p className={style.introText}>
        Unlock your inner world on Dreamy Jotter. Capture your thoughts,
        memories, and reflections in a realm crafted just for you. Pen down your
        essence!
      </p>
      <form
        className={style.buttonContainer}
        onSubmit={(e) => {
          e.preventDefault();
          handleRegisterWithGmail();
        }}
      >
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <Button type="submit"> Create</Button>
      </form>
      <div className={style.additionalOptions}>
        <span>
          Do you already have an account?{" "}
          <Link to={"/"} className={style.forgotPasswordLink}>
            Enter
          </Link>
        </span>
      </div>
    </div>
  );
}

export default RegisterPage;
