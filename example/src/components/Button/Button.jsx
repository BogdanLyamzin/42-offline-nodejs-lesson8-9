const Button = ({type, handleClick, children}) => {
    return <button type={type} onClick={handleClick}>{children}</button>
}

Button.defaultProps = {
    type: "button",
    handleClick: ()=> {},
}

export default Button;