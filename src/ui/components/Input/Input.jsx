import { baseInput, variants } from "./input.styles";
import classNames from "classnames";

const Input = ({type="text", error,className, ...props}) => {
    return (
        <input 
        type={type} 
        ref = {props.ref}
        className={classNames(
            baseInput,
            variants[error ? "error" : "default"],
            className
        )}
        {...props}
        />
    )
    
}

export default Input;