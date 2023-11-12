import React from 'react';
import style from "../../css-modules/Button.module.css";
function Button({children,onClick}) {
  return (
    <button onClick={onClick}  className={style["universalButton"]}>{children}</button>
  )
}

export default Button