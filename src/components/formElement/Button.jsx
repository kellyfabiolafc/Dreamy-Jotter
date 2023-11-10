import React from 'react';
import style from "../../css-modules/Button.module.css";
function Button({children}) {
  return (
    <button className={style["universalButton"]}>{children}</button>
  )
}

export default Button