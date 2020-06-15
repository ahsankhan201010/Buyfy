import React, { useState } from "react";
import "./SignInForm.css";
import StyledInput from "./../StyledInput/StyledInput";
import Button from "./../Button/Button";

const SignInForm = () => {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  return (
    <div className="signin-form-comtainer">
      <form className="signin-form">
        <div className="signin-form-fields">
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
        <div className="signin-form-Btn">
          <Button backgroundColor="black" color="white" type="submit">SUBMIT</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
