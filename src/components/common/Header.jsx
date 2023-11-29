import React, { useEffect } from 'react';
import styles from "../../css-modules/Header.module.css";
import logo from "../../assets/dark-logo.png";
import 'boxicons';
import Button from '../formElement/Button';
import { UserAuth } from '../../context/AuthContext';
function Header() {
  const {user,logOut}=UserAuth();
  const logOutt = async() => {
try{
  await logOut();
}
catch ( error){
  console.log(error);
}
  }
  //  useEffect(()=>{
  //   if()
  //  })
  return (
    <header className={styles.header}>
    <div className={styles.logoContainer}>
        <img src={logo} alt="Dreamy Jotter Logo" className={styles.logo} />
        <div className={styles.title}>Dreamy Jotter</div>
      </div>
   <div onClick={logOutt} className={styles.iconlogOut}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtklEQVR4nO2UMQ7CMAxFcxwG2JjgAlQcKjYnAJszAQO14QoFFcFUTlAUBFuLmpQMkfolb/F/sh19Ywb5SJGWAnRV5DqkBPkiSFkrwD0INdcvBKj4MUE/c/1UUoC9AlVxAEA713Oy67Eg3WMAKmfeBPnfioAf5xVPXO/R0kiBS2+A2M3MdFRueRowAc0jA7j7ipBuCR0ZYn9TfOfOQZGfSUdF7QWIHteClPWBCFCR2+2iFTDINOgFKO1J+kBxedIAAAAASUVORK5CYII="/></div> 
  </header>
  )
}

export default Header