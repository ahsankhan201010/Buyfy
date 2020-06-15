import React from "react";
import "./Auth.css";
import FormsContainer from "./../../Components/FormsContainer/FormsContainer";
import SignInForm from "./../../Components/SignInForm/SignInForm";

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-img"> abc </div>
      <div className="flex auth-form-area">
        <FormsContainer style={{ transform: "translateX(-4rem)" }}>
          <div className="form-grid">
            <div className="form-switcher"></div>
            <div className="form-fields">
              <SignInForm />
            </div>
          </div>
        </FormsContainer>
      </div>
    </div>
  );
};

export default Auth;
