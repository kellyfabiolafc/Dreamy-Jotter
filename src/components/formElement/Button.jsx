import React from 'react';
import style from "../../css-modules/Button.module.css";
function Button({children,onClick,className ,type ,disabled}) {
  return (
    <button onClick={onClick} type={type} disabled={disabled} className={`${style["universalButton"]} ${style[className]}`}>{children}</button>
  )
}

export default Button