import { useState } from "react";

const GameZone = () => {
  const [position, setPosition] = useState(0);

  const rollDice = () => {
    const dice = Math.floor(Math.random() * 6) + 1;
    setPosition(position + dice);
  };

  return (
    <div>
      <h1>🎮 Astro Board Game</h1>
      <p>Rocket Position: {position}</p>
      <button onClick={rollDice}>Roll Dice 🎲</button>
    </div>
  );
};

export default GameZone;
