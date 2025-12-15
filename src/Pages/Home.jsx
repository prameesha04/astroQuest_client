import React from "react";
import "./css/Home.css";
import { Link } from "react-router-dom";
import astrounaut from "../assets/astrounaut.png";
import SpaceBackground from "../Components/SpaceBackground";

const Home = () => {
  return (
    <>
      {/* ⭐ Space Background MUST be outside main container */}
      <SpaceBackground />

      <div className="landing-container">
        <div className="hero">
          <div className="hero-text">
            <h1>Explore the Universe of Productivity</h1>
            <p>
              Manage tasks, explore insights, and navigate your personal
              universe with <span>ASTRO_QUEST </span>.
            </p>

            <div className="hero-buttons">
              <Link to="/signup" className="glow-btn">
                Get Started
              </Link>
              <Link to="/login" className="glow-outline-btn">
                Login
              </Link>
            </div>
          </div>

          {/* ⭐ Floating Astronaut */}
          <div className="hero-img">
            <img
              src={astrounaut}
              className="floating-astronaut size-4xl"
              alt="Floating Astronaut"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
