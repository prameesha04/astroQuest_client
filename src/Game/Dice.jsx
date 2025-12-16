import { useState } from "react";

const Dice = ({ rollDice }) => {
  const [value, setValue] = useState("🎲");

  const handleRoll = () => {
    const num = Math.floor(Math.random() * 6) + 1;
    setValue(num);
    rollDice(num);
  };

  return (
    <button className="dice-btn" onClick={handleRoll}>
      {value}
    </button>
  );
};

export default Dice;
