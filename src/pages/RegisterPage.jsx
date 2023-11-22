import style from "../css-modules/AuthPage.module.css";
import iconoDJ from "../assets/icon-dj.png";
import Input from "../components/formElement/Input";
import Button from "../components/formElement/Button";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useState } from "react";

function RegisterPage() {
  const { registerWithGmail } = UserAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterWithGmail = async () => {
    try {
      // Llama a la función de registro con Gmail con la información del usuario
      await registerWithGmail(username, email, password);
    } catch (error) {
      console.error('Error al registrar con Gmail:', error);
      // Puedes mostrar un mensaje de error al usuario si lo deseas
    }
  };

  return (
    <div className={style.homeContainer}>
      <img className={style.logo} src={iconoDJ} alt="Dreamy Jotter Logo" />
      <p className={style.introText}>Unlock your inner world on Dreamy Jotter. Capture your thoughts, memories, and reflections in a realm crafted just for you. Pen down your essence!</p>
      <form className={style.buttonContainer}>
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
        <Button onClick={handleRegisterWithGmail}> Create</Button>
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

export default RegisterPage;
