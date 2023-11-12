import React from "react";
import style from "../css-modules/AuthPage.module.css";
import iconoDJ from "../assets/icon-dj.png";
import Input from "../components/formElement/Input";
import Button from "../components/formElement/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [resetLinkSent, setResetLinkSent] = useState(false);

  const handleForgotPassword = (e) => {
    e.preventDefault(); // Prevent default form submission behavior  // Logic to send a password reset request to the server
    // You might use a library like axios to make an HTTP request here
    // Assuming the request was successful and now we're displaying the success message
    setResetLinkSent(true);
  };

  return (
    <div className={style.homeContainer}>
      <img className={style.logo} src={iconoDJ} alt="Dreamy Jotter Logo" />
      <h2 style={{fontSize:"19.5px"}}>Account Recovery</h2>
      <p className={style.introText}>
      To reset your password, enter the email address you use to log in.
      </p>
      {resetLinkSent ? (
        <p>Password reset link sent to your email. Check your inbox.</p>
      ) : (
          <form className={style.buttonContainer}>
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} >Email</Input>
            <Button onClick={handleForgotPassword}>Send</Button>
          </form>
      )}
      <div className={style.additionalOptions}>
        <span>
        If you remember your password, feel free to log in. 
    Otherwise,{' '}
          <Link to={'/'} className={style.forgotPasswordLink}>
          click here to return to login.
          </Link>
        </span>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
