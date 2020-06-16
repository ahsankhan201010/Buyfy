import React,{useState} from "react";
import FormsContainer from './../FormsContainer/FormsContainer';
import SignInForm from './../SignInForm/SignInForm';
import SignUpForm from "../SignUpForm/SignUpForm";
import FormSwitcher from "../FormSwitcher/FormSwitcher";

const AuthForms = () => {
    var [formType, setFormType] = useState("signIn");
  return (
      <FormsContainer style={{ transform: "translateX(-4rem)" }}>
        <div className="form-grid">
          <div className="form-switcher">
              <FormSwitcher  setFormType={setFormType}  formType={formType}/>
          </div>
          <div className="form-fields">
           { formType === "signIn" ?  <SignInForm /> : <SignUpForm/>}
          </div>
        </div>
      </FormsContainer>
  );
};

export default AuthForms;
