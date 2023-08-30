import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/navbarComponents/NavBar";

const UserDetails = () => {
  const nav = useNavigate();
  const name = "New user";
  const [number, setNumber] = useState(""); // Initialize as state
  
  useEffect(() => {
    const storedNumber = localStorage.getItem("number");
    setNumber(storedNumber); // Set the number from localStorage
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("number"); // Change "userData" to "number"
    nav("/login");
  };

  return (
    <div>
      <NavBar />
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>Your account</h1>
        <div>
          <br />
          <p>Name: {name}</p>
          <p>Number: {number}</p>
        </div>
        <button style={{ background: "#dc3530" }} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
