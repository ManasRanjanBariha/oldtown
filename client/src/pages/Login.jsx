import React, { useState, useEffect } from "react";
import NavBar from "../components/navbarComponents/NavBar";
const Login = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showOtpEntry, setShowOtpEntry] = useState(false);
  const defaultOtp = "1234";
  // New state for OTP entry

  useEffect(() => {
    const isValidMobile = /^\d{10}$/.test(phone);
    setIsValid(isValidMobile);
  }, [phone]);

  const handleChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSendOtp = () => {
    if (!isValid) {
      alert("Enter a valid phone number!!!");
    } else {
      alert("OTP sent successfully");

      setShowOtpEntry(true);
    }
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (otp === defaultOtp) {
      alert("OTP matched! Submission successful.");
    } else {
      alert("Incorrect OTP. Please try again.");
    }

    // Handle form submission
  };

  return (
    <>
      <NavBar />

      <div className="loginbox">
        <div className="container">
          <div className="form">
            <h1>Hi there!</h1>
            <div className="inside">
              <label className="label">SignIn or SignUp</label>
              <input
                placeholder="Mobile Number*"
                required
                type="tel"
                maxLength="10"
                onChange={handleChange}
                name="newnumber"
                autoComplete="off"
                id="login-input"
                className="textinputbox"
                value={phone}
                pattern="[0-9]{10}"
              />
              {showOtpEntry && (
                <div style={{ marginTop: "16px" }}>
                  <label className="label">Enter OTP</label>
                  <input
                    className="otpInput"
                    placeholder="Enter OTP"
                    required
                    type="text"
                    value={otp}
                    onChange={handleOtpChange}
                  />
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "center" }}>
                {showOtpEntry ? (
                  <button
                    style={{
                      background: "black",
                      textAlign: "center",
                      width: "50%",
                    }}
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    style={{
                      background: "black",
                      textAlign: "center",
                      width: "50%",
                    }}
                    type="button"
                    // disabled={!isValid}
                    onClick={handleSendOtp}
                  >
                    Send OTP
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
