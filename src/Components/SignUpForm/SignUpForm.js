import React, { useState } from "react";
import "./SignUpForm.css";
import StyledInput from "./../StyledInput/StyledInput";
import Button from "./../Button/Button";
import { connect } from 'react-redux';
import { signup } from './../../Redux/user/userActions';

const SignUpForm = ({signup}) => {
  var [fullName, setFullName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var handleFormSubmit = (e) => {
    e.preventDefault()
    var auth = {
      fullName,
      email,
      password
    }
    signup(auth)
  }
  return (
    <div className="signup-form-comtainer">
      <form onSubmit={handleFormSubmit} className="signup-form">
        <div className="signup-form-fields">
          <StyledInput
            value={fullName}
            placeholder="full name"
            onChange={(e) => setFullName(e.target.value)}
            style={{margin:"1rem 0rem"}}
          />
          <StyledInput
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            style={{margin:"1rem 0rem"}}
          />
          <StyledInput
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            style={{margin:"1rem 0rem"}}
          />
        </div>
        <div className="signup-form-Btn">
          <Button backgroundColor="black" color="white" type="submit">SIGN UP</Button>
        </div>
      </form>
    </div>
  );
};

var actions = {
  signup
}

export default connect(null, actions)(SignUpForm);
