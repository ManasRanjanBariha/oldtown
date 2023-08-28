import React from "react";

const Login = () => {
  return (
    <>
      <div className="loginbox">
        <div className="container">
          <div className="form">
            <h1>Hi there!</h1>
            <div className="inside">
              <label className="label">SignIn or SignUp</label>
              <input
                placeholder="Mobile Number*"
                type="text"
                name="newnumber"
                autocomplete="off"
                id="login-input"
                className="textinputbox"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
