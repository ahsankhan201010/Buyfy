import React, { useState } from "react";
import "./SignInForm.css";
import StyledInput from "./../StyledInput/StyledInput";
import Button from "./../Button/Button";
import Paragrapgh from "./../Paragrapgh/Paragraph";
import { connect } from 'react-redux';
import { signin } from './../../Redux/user/userActions';

const SignInForm = ({signin}) => {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  var handleFormSubmit = (e) => {
    e.preventDefault()
    var auth = {
      email,
      password
    }
    signin(auth)
  }
  return (
    <div className="signin-form-comtainer">
      <form onSubmit={handleFormSubmit} className="signin-form">
        <div className="signin-form-fields">
          <StyledInput
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            style={{ margin: "1rem 0rem" }}
          />
          <StyledInput
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            style={{ margin: "1rem 0rem" }}
          />
        </div>
        <div className="signin-form-Btn">
          <Button backgroundColor="black" color="white" type="submit">
            SIGN IN
          </Button>
          <div className="signin-separator flex">
            <Paragrapgh fontSize={12}>OR</Paragrapgh>
          </div>
          <Button backgroundColor="black" color="white" type="submit">
            SIGN IN WITH GOOGLE
          </Button>
        </div>
      </form>
    </div>
  );
};

var actions = {
  signin
}

export default connect(null,actions)(SignInForm);
