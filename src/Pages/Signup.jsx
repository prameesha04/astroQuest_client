import React, { useState } from "react";
import "./css/Auth.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SpaceBackground from "../Components/SpaceBackground";
import logo from "../assets/image.png";

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/signup", {
        username,
        email,
        password,
      });

      if (res.data) {
        navigate("/dashboard"); // ✅ REDIRECT HERE
      }
    } catch (error) {
      alert("Signup failed");
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
          <p className="subtitle">Sign up and start exploring the universe</p>

          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Full Name"
              className="auth-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
