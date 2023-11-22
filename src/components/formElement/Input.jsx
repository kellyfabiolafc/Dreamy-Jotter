
import style from "../../css-modules/Button.module.css";
const Input = ({children , placeholder}) => {
  return (
    <input className={style["universalInput"]} placeholder={placeholder}/>
  )
}

export default Input