import { AppBar } from "@mui/material";
import React from "react";
import NavBar from "../components/navbarComponents/NavBar";
const Login = () => {
  return (
    <>
      <NavBar/>
      <div className="loginbox">
        <div className="container">
          <div className="form">
            <h1>Hi there!</h1>
            <div className="inside">
              <label className="label">SignIn or SignUp</label>
              <input
                placeholder="Mobile Number*"
                required
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
