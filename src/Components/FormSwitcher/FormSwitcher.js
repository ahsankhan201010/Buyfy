import React from "react";
import "./FormSwitcher.css";
import Button from "./../Button/Button";

const FormSwitcher = ({ formType, setFormType }) => {
  return (
    <div className="form-switcher-container">
      <div className="switcher-signin">
        <Button onClick={() => setFormType("signIn")} backgroundColor="transparent">
          <div style={{ color: formType === "signIn" ? "black" : "#a8a8a8" }}>
            SIGN IN
          </div>
          <div
            style={{
              background:
                formType === "signIn"
                  ? "var(--color-theme-primary)"
                  : "#a8a8a8",
            }}
            className="switcher-underline"
          ></div>
        </Button>
      </div>
      <div className="switcher-signup">
        <Button onClick={() => setFormType("signUp")} backgroundColor="transparent">
          <div style={{ color: formType === "signUp" ? "black" : "#a8a8a8" }}>
            SIGN UP
          </div>
          <div
            style={{
              background:
                formType === "signUp"
                  ? "var(--color-theme-primary)"
                  : "#a8a8a8",
            }}
            className="switcher-underline"
          ></div>
        </Button>
      </div>
    </div>
  );
};

export default FormSwitcher;
