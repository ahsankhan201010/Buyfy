import React from "react";
import "./Header.css";
import { fontWeightParser } from './../../utility/utility';

const Header = (props) => {
  var {
    children,
    fontColor = "black",
    fontWeight = "bold",
    fontSize = 32,
    style = {}
  } = props;
  var fontWeightValue = fontWeightParser(fontWeight);
  return (
    <div
      style={{
        color: fontColor,
        fontWeight: fontWeightValue,
        fontSize: `${fontSize / 10}rem`,
        ...style
      }}
      className="header-container"
    >
      {children}
    </div>
  );
};

export default Header;
