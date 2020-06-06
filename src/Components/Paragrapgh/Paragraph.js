import React from "react";
import "./Paragraph.css";
import { fontWeightParser } from './../../utility/utility';

const Paragrapgh = (props) => {
  var {
    children,
    fontColor = "black",
    fontWeight = "regular",
    fontSize = 16,
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
      className="paragrapgh-container"
    >
      {children}
    </div>
  );
};

export default Paragrapgh;
