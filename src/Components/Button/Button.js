import React from 'react'
import "./Button.css";
import Paragrapgh from '../Paragrapgh/Paragraph';

const Button = (props) => {
    var {children, ...restProps} = props;
    return (
        <button {...restProps} className="button-container">
            <Paragrapgh style={{letterSpacing: "0.2rem"}} >{children}</Paragrapgh>
        </button>
    )
}

export default Button
