import React from "react";
import "./RoundBtn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const RoundBtn = (props) => {
    var {link} = props;
  return (
    <Link to={link}>
      <div className="round-btn flex">
        <FontAwesomeIcon icon={faAngleRight} color="white" size="5x" />
      </div>
    </Link>
  );
};

export default RoundBtn;
