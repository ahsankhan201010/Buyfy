import React from 'react'
import "./Button.css";
import Paragrapgh from '../Paragrapgh/Paragraph';

const Button = (props) => {
    var {children, fontSize = 12, backgroundColor="#4287f5", color="black", style, ...restProps} = props;
    return (
        <button {...restProps} style={{...style,background: backgroundColor}} className="button-container">
            <Paragrapgh fontColor={color} style={{letterSpacing: "0.2rem"}} fontSize={fontSize} >{children}</Paragrapgh>
        </button>
    )
}

export default Button
