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
        <div className={styles.title}>Dreamy Jotter {user.displayName}</div>
      </div>
   <button onClick={logOutt} className={styles.iconlogOut}><box-icon  name='log-out'></box-icon></button> 
  </header>
  )
}

export default Header