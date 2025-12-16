const VictoryScreen = ({ winner, onReplay, onDashboard }) => {
  return (
    <div className="victory-screen">
      <h1>🏆 {winner.name} Wins!</h1>
      <button onClick={onReplay}>Play Again</button>
      <button onClick={onDashboard}>Go to Dashboard</button>
    </div>
  );
};

export default VictoryScreen;
