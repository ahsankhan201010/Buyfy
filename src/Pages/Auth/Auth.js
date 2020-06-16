import React from "react";
import "./Auth.css";
import AuthForms from './../../Components/AuthForms/AuthForms';

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-img"> abc </div>
      <div className="flex auth-form-area">
        <AuthForms/>
      </div>
    </div>
  );
};

export default Auth;
