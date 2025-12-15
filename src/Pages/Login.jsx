import React, { useState } from "react";
import "./css/Auth.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SpaceBackground from "../Components/SpaceBackground";
import logo from "../assets/image.png";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      if (res.data) {
        navigate("/dashboard"); // ✅ REDIRECT HERE
      }
    } catch (error) {
      alert("Invalid login credentials");
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

          <h2>Welcome Back, Explorer</h2>
          <p className="subtitle">Login to continue your Astro_Quest</p>

          <form onSubmit={handleLogin}>
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
              Login
            </button>
          </form>

          <p className="switch">
            New here? <Link to="/signup">Create an Account</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
