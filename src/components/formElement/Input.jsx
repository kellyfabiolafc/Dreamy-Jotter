
import style from "../../css-modules/Button.module.css";
const Input = ({children , placeholder , type ,value , onChange}) => {
  return (
    <input  onChange={onChange} value={value} className={style["universalInput"]} placeholder={placeholder} type={type}/>
  )
}

export default Input