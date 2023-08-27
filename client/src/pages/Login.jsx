import React from "react";

const Login = () => {
  return (
    <div class="loginbox">
        <div class="container">
            <div class="form">
                <h1>Hi there!</h1>
            <div class="inside">
            <label class="label">SignIn or SignUp</label>
            <input
             placeholder="Mobile Number*"
             type="text"
             name="newnumber"
             autocomplete="off"
              id="login-input"
             class="textinputbox"
            ></input>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Login;
