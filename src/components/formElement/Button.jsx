import React from 'react';
import style from "../../css-modules/Button.module.css";
function Button({children,onChange}) {
  return (
    <button onChange={onChange}  className={style["universalButton"]}>{children}</button>
  )
}

export default Button