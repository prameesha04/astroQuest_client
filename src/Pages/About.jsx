import React from "react";
import SpaceBackground from "../Components/SpaceBackground";
import "./css/About.css";

const About = () => {
  return (
    <div className="about-page min-h-[120vh] pb-32">
      {/* Space Animated Background */}
      <SpaceBackground />

      <div className="about-overlay">
        <div className="about-container">
          <h1 className="about-title">ABOUT • ASTRO_QUEST</h1>

          {/* What is Astro Quest */}
          <div className="about-card">
            <h2 className="card-heading">What is ASTRO_QUEST?</h2>

            <p className="card-text">
              <strong>ASTRO_QUEST</strong> is a futuristic, space-themed
              adventure platform designed to challenge your{" "}
              <strong>focus, timing, reflexes, and strategic thinking</strong>.
              Every mission sends you deeper into the galaxy, traveling through
              nebula clouds, asteroid storms, energy tunnels, and forgotten
              cosmic ruins.
            </p>

            <p className="card-text">
              As levels progress, the game becomes more intense — introducing
              asteroid showers, gravity distortions, hyperspace waves, and
              cosmic traps. Each challenge is crafted to improve your reaction
              time and decision-making.
            </p>

            <p className="card-text">
              <strong>ASTRO_QUEST</strong> blends immersive visuals, fast-paced
              gameplay, and deep space exploration to offer a thrilling cosmic
              journey that pushes your skills to the limit.
            </p>

            <p className="card-text">
              Whether you're exploring star systems, unlocking hidden missions,
              or surviving cosmic hazards,{" "}
              <strong>
                ASTRO_QUEST delivers a high-energy sci-fi adventure
              </strong>
              filled with mystery, strategy, and interstellar excitement.
            </p>
          </div>

          {/* Key Features */}
          <div className="about-card">
            <h2 className="card-heading">Key Features</h2>
            <ul className="features-list">
              <li> Dynamic space missions with increasing difficulty</li>
              <li> Interactive cosmic environments & animations</li>
              <li> Power-ups, shield boosts & special abilities</li>
              <li> Strategic gameplay for all experience levels</li>
              <li> Smooth futuristic UI & immersive sound effects</li>
              <li> Unlockable levels, story paths & hero upgrades</li>
            </ul>
          </div>

          {/* Mission Section */}
          <div className="about-card">
            <h2 className="card-heading">Our Mission</h2>
            <p className="card-text">
              Our mission is to create a space adventure where players can
              explore the universe, overcome challenges, and enjoy a futuristic
              gaming experience enriched with creativity and sci-fi wonder.
              ASTRO_QUEST was built with passion, innovation, and a love for
              cosmic exploration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
