import React, { useState, useEffect } from "react";
import axios from "axios";
import quizData from "./quizData";
import PlanetQuiz from "./PlanetQuiz";
import "./Quiz.css";
import sun from "../assets/planets/sun.png";

const QuizZone = () => {
  const [unlocked, setUnlocked] = useState(0);
  const [activeLevel, setActiveLevel] = useState(null);

  const userId = localStorage.getItem("userId");

  // 🔹 LOAD PROGRESS FROM DB
  useEffect(() => {
    if (!userId) return;

    axios
      .get(`http://localhost:5000/progress/${userId}`)
      .then((res) => {
        setUnlocked(res.data.unlockedLevel || 0);
      })
      .catch((err) => console.error(err));
  }, [userId]);

  // 🔹 SAVE PROGRESS TO DB
  const saveProgress = (level) => {
    if (!userId) return;

    axios.post("http://localhost:5000/progress/update", {
      userId,
      unlockedLevel: level,
    });
  };

  // 🔹 QUIZ VIEW
  if (activeLevel !== null) {
    return (
      <PlanetQuiz
        level={activeLevel}
        unlockNext={() => {
          const nextLevel = unlocked + 1;
          setUnlocked(nextLevel);
          saveProgress(nextLevel); // ✅ SAVE TO DB
          setActiveLevel(null);
        }}
      />
    );
  }

  // 🔹 ORBIT MAP VIEW
  return (
    <div className="orbit-space">
      <div className=" flex items-center justify-center">
        <h1 className="text-7xl text-amber-50">SPACE QUIZ STATION</h1>
      </div>

      {/* ☀️ SUN */}
      <div className="sun">
        <img src={sun} alt="Sun" />
      </div>

      {/* 🪐 PLANETS ORBITING */}
      {quizData.map((planet, index) => (
        <div key={index} className={`orbit orbit-${index}`}>
          <div
            className={`planet ${index <= unlocked ? "active" : "locked"}`}
            onClick={() => index <= unlocked && setActiveLevel(index)}
          >
            <img src={planet.img} alt={planet.planet} />
            <span>{planet.planet}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizZone;
