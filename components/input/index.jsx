import Styles from "./input.module.scss"

const Input = ({type, placeholder, pattern, required}) => {
    return (
        <input type={type} name="" id="" placeholder={placeholder} pattern={pattern} required={required} className={Styles.input}/>
    );
}

export default Input;