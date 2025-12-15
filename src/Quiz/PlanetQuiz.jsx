import React, { useState } from "react";
import quizData from "./quizData";
import "./PlanetQuiz.css";
import KidsSpaceBackground from "../Components/KidsSpaceBackground";    

const PlanetQuiz = ({ level, unlockNext }) => {
  const question = quizData[level].question;
  const options = quizData[level].options;
  const answer = quizData[level].answer;

  const [selected, setSelected] = useState(null);
  const [correct, setCorrect] = useState(false);

  const handleSelect = (opt) => {
    setSelected(opt);
    if (opt === answer) {
      setCorrect(true);
      setTimeout(unlockNext, 1200);
    }
  };

  return (
    <div className="quiz-space">
      <KidsSpaceBackground />
      {/* ✨ STARS */}
      <div className="stars"></div>
      <div className="stars2"></div>

      {/* 🚀 QUIZ CARD */}
      <div className="quiz-card">
        <h2 className="planet-title">🪐 {quizData[level].planet} Mission</h2>

        <p className="question">{question}</p>

        <div className="options">
          {options.map((opt, i) => (
            <button
              key={i}
              className={`option ${
                selected === opt ? (opt === answer ? "correct" : "wrong") : ""
              }`}
              onClick={() => handleSelect(opt)}
              disabled={selected}
            >
              {opt}
            </button>
          ))}
        </div>

        {correct && <div className="success">🚀 Mission Completed!</div>}
      </div>
    </div>
  );
};

export default PlanetQuiz;
