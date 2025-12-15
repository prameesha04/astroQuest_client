import React, { useState } from "react";
import "./css/Auth.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SpaceBackground from "../Components/SpaceBackground";
import logo from "../assets/image.png";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/signup", {
        name, // ✅ Correct variable
        email,
        password,
      });

      if (res.data) {
        alert("Signup successful!");
        navigate("/dashboard");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <>
      <SpaceBackground />
      <div className="auth-container">
        <div className="auth-box">
          <div className="auth-logo">
            <img src={logo} alt="AstroQuest Logo" />
          </div>
          <h2>Begin Your Cosmic Journey</h2>

          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Full Name"
              className="auth-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="auth-btn">
              Sign Up
            </button>
          </form>

          <p className="switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
