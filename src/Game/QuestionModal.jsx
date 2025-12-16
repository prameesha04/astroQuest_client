import { useEffect, useState } from "react";
import "./QuestionModal.css";

const QuestionModal = ({ question, onAnswer }) => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null); // "correct" | "wrong"

  // ⏱️ Countdown timer
  useEffect(() => {
    if (timeLeft === 0 && !result) {
      handleAnswer(null); // timeout = wrong
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (option) => {
    if (result) return;

    const isCorrect = option === question.answer;
    setSelected(option);
    setResult(isCorrect ? "correct" : "wrong");

    // ⏳ Show feedback for 1.5s, then move player
    setTimeout(() => {
      onAnswer(option);
    }, 1500);
  };

  return (
    <div className="question-overlay">
      <div className="question-card">
        <h2 className="question-title">🧠 Space Question</h2>

        {/* TIMER */}
        <div className="timer">⏱️ {timeLeft}s</div>

        <p className="question-text">{question.question}</p>

        <div className="options-grid">
          {question.options.map((opt) => {
            let className = "option-tab";

            if (selected) {
              if (opt === question.answer) className += " correct";
              else if (opt === selected) className += " wrong";
            }

            return (
              <button
                key={opt}
                className={className}
                disabled={!!result}
                onClick={() => handleAnswer(opt)}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {/* FEEDBACK */}
        {result && (
          <div className={`feedback ${result}`}>
            {result === "correct" ? "✔ Correct!" : "❌ Wrong!"}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionModal;
