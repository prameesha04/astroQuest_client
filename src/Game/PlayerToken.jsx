const emojiMap = {
  red: "🚀",
  blue: "🛰️",
  green: "👩‍🚀",
  yellow: "🛸",
};

const PlayerToken = ({ color }) => {
  return <div className="token">{emojiMap[color]}</div>;
};

export default PlayerToken;
