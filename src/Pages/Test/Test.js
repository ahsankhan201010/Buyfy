import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Test = () => {
  var myInterval = null;
  var [counter, setCounter] = useState(0);
  //   var [email, setEmail] = useState("email");
  //   var [password, setPassword] = useState("password");
  var [myForm, myFormValueSetter] = useState({
    email: "",
    password: "",
  });
  var handleFormInput = (e) => {
    var { value, name } = e.target;
    myFormValueSetter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  var { email, password } = myForm;
//   console.log(myForm);
  //CDM
  //   useEffect(() => {
  //         console.log("hello world")
  //     },[])
  //SCP
  //   useEffect(() => {
  //         console.log("hello world")
  //     },[counter])

  //CWU
  //   useEffect(() => {
  //     return () => {
  //       console.log("m out");
  //     };
  //   }, []);

    // useEffect(() => {
    //   console.log("component mounted")
    //   myInterval = setInterval(() => {
    //       console.log("hello")
    //   }, 200);
    //   return () => {
    //       console.log("component unmounted")
    //       clearInterval(myInterval)
    //   }
    // }, []);

  return (
    <div>
      <h1>Test Page</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        +
      </button>
      <button onClick={() => setCounter((prevState) => prevState - 1)}>
        -
      </button>
      <form>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleFormInput}
        />
        <input
          type="text"
          name="password"
          value={password}
          onChange={handleFormInput}
        />
      </form>
    </div>
  );
};

export default Test;
