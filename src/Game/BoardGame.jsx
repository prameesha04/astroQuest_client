import { useState } from "react";
import boardData from "./boardData";
import { movePlayer } from "./boardLogic";
import Dice from "./Dice";
import PlayerToken from "./PlayerToken";
import VictoryScreen from "./VictoryScreen";
import GameZone from "./GameZone";
import QuestionModal from "./QuestionModal";
import { getRandomQuestion } from "./getRandomQuestion";
import axios from "axios";
import "./BoardGame.css";

const initialPlayers = [
  { id: 0, name: "🚀 Player 1", position: 0, color: "red" },
  { id: 1, name: "🛰️ Player 2", position: 0, color: "blue" },
  { id: 2, name: "🪐 Player 3", position: 0, color: "green" },
  { id: 3, name: "👩‍🚀 Player 4", position: 0, color: "yellow" },
];

const BoardGame = () => {
  const [players, setPlayers] = useState(initialPlayers);
  const [turn, setTurn] = useState(0);
  const [winner, setWinner] = useState(null);

  const [diceValue, setDiceValue] = useState(null);
  const [question, setQuestion] = useState(null);
  const [pendingDice, setPendingDice] = useState(null);

  // 🎯 Save winner to MongoDB
  const saveWinnerToDB = async (winnerPlayer) => {
    try {
      await axios.post("http://localhost:5000/api/board/save-winner", {
        winner: winnerPlayer.name,
        players,
      });
    } catch (err) {
      console.error("DB Save Error:", err);
    }
  };

  // 🎲 Dice roll → Ask question
  const rollDice = (dice) => {
    if (winner || question) return;

    setDiceValue(dice);
    setPendingDice(dice);

    const q = getRandomQuestion();
    setQuestion(q);
  };

  // 🧠 Handle answer
  const handleAnswer = (selected) => {
    const isCorrect = selected === question.answer;

    const updatedPlayers = [...players];
    const currentPlayer = players[turn];

    const moved = movePlayer(currentPlayer, pendingDice, boardData, isCorrect);

    updatedPlayers[turn] = moved;
    setPlayers(updatedPlayers);

    setQuestion(null);
    setPendingDice(null);

    if (moved.winner) {
      setWinner(moved);
      saveWinnerToDB(moved);
      return;
    }

    setTurn((turn + 1) % players.length);
  };

  // 🔁 Reset game
  const resetGame = () => {
    setPlayers(initialPlayers.map((p) => ({ ...p, position: 0 })));
    setTurn(0);
    setWinner(null);
    setDiceValue(null);
    setQuestion(null);
  };

  // 🏆 Victory Screen
  if (winner) {
    return (
      <VictoryScreen
        winner={winner}
        onReplay={resetGame}
        onDashboard={() => (window.location.href = "/dashboard")}
      />
    );
  }

  return (
    <GameZone>
      <h2>🌌 AstroQuest – Educational Board Game</h2>
      <h3>👉 Turn: {players[turn].name}</h3>

      {/* 🎲 Dice Value */}
      {diceValue && <h1 className="dice-value">🎲 {diceValue}</h1>}

      {/* 🧩 Board */}
      <div className="board">
        {boardData.map((cell) => (
          <div key={cell.id} className={`cell ${cell.type}`}>
            {players.map(
              (p) =>
                p.position === cell.id && (
                  <PlayerToken key={p.id} color={p.color} />
                )
            )}
          </div>
        ))}
      </div>

      {/* 🎲 Dice */}
      <Dice rollDice={rollDice} />

      {/* 🧠 Question Modal */}
      {question && (
        <QuestionModal question={question} onAnswer={handleAnswer} />
      )}
    </GameZone>
  );
};

export default BoardGame;
