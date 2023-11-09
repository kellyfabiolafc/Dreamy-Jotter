import React, { Children } from 'react'
import style from "../../css-modules/Button.module.css"
const Input = ({children}) => {
  return (
    <input className={style["universalInput"]} placeholder={children}/>
  )
}

export default Input