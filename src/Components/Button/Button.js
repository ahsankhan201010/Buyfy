import React from 'react'
import "./Button.css";
import Paragrapgh from '../Paragrapgh/Paragraph';

const Button = (props) => {
    var {children, backgroundColor="#4287f5", color="black", style, ...restProps} = props;
    return (
        <button {...restProps} style={{...style,background: backgroundColor}} className="button-container">
            <Paragrapgh fontColor={color} style={{letterSpacing: "0.2rem"}} fontSize={12} >{children}</Paragrapgh>
        </button>
    )
}

export default Button
