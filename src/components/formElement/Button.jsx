import React from 'react';
import style from "../../css-modules/Button.module.css";
function Button({children,onClick,className}) {
  return (
    <button onClick={onClick}  className={`${style["universalButton"]} ${style[className]}`}>{children}</button>
  )
}

export default Button