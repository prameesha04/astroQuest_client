import "./css/Dashboard.css";
import { useNavigate } from "react-router-dom";
import SpaceBackground from "../Components/SpaceBackground";
const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <SpaceBackground />
      <h1 className="text-6xl">🚀 Conquer Astro Challenge</h1>

      <div className="card-container">
        <div className="dash-card" onClick={() => navigate("/quiz")}>
          🧠
          <h3 className="text-2xl">Space Quiz</h3>
          <p>Test your cosmic knowledge</p>
        </div>

        <div className="dash-card" onClick={() => navigate("/boardgame")}>
          🎮
          <h3 className="text-2xl">Astro Board Quest</h3>
          <p>Play & explore planets</p>
        </div>

        <div className="dash-card" onClick={() => navigate("/innovation")}>
          🌟
          <h3 className="text-2xl">Daily Challenge</h3>
          <p>Earn bonus XP</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
