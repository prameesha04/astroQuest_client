// 🎓 Apply education rule based on question answer
export const applyEducationRule = (cell, isCorrect, currentPosition) => {
  // 🚀 Rocket (ladder)
  if (cell.type === "rocket") {
    return isCorrect ? cell.to : currentPosition;
  }

  // 🕳️ Blackhole (snake)
  if (cell.type === "blackhole") {
    return isCorrect ? currentPosition : cell.to;
  }

  // 🧱 Normal cell
  return isCorrect ? currentPosition : Math.max(0, currentPosition - 1);
};

// 🎲 Main move logic
export const movePlayer = (player, dice, boardData, isCorrect) => {
  let newPosition = player.position + dice;

  // 🏁 Winning condition
  if (newPosition >= boardData.length - 1) {
    return {
      ...player,
      position: boardData.length - 1,
      winner: true,
    };
  }

  const cell = boardData[newPosition];

  // 🧠 Apply education logic
  newPosition = applyEducationRule(cell, isCorrect, newPosition);

  return {
    ...player,
    position: newPosition,
    winner: false,
  };
};
