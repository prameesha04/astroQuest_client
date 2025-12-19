import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/AdminDashboard.css";

import AdminUsers from "./AdminUsers";
import AdminInnovations from "./AdminInnovations";
import AdminMissions from "./AdminMissions";

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("home");
  const [adminName, setAdminName] = useState("Admin");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.name) setAdminName(user.name);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="admin-layout">
      {/* ================= SIDEBAR ================= */}
      <aside className="admin-sidebar">
        <h1 className="sidebar-title">ASTRO QUEST</h1>

        <div className="admin-welcome">
          Welcome
          <span>{adminName}</span>
        </div>

        <div className="admin-menu">
          <button
            className={activeSection === "users" ? "active" : ""}
            onClick={() => setActiveSection("users")}
          >
            👥 Registered Users
          </button>

          <button
            className={activeSection === "innovations" ? "active" : ""}
            onClick={() => setActiveSection("innovations")}
          >
            💡 Innovations
          </button>

          <button
            className={activeSection === "missions" ? "active" : ""}
            onClick={() => setActiveSection("missions")}
          >
            🎯 Missions
          </button>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          🚪 Logout
        </button>
      </aside>

      {/* ================= CONTENT ================= */}
      <main className="admin-content">
        <div className="admin-body-header">
          <h1>AstroQuest Admin Control</h1>
          <p>
            Logged in as <span>{adminName}</span>
          </p>
        </div>

        {activeSection === "home" && (
          <div className="admin-home">
            <h2>👋 Welcome, {adminName}!</h2>
            <p>Select a section from the sidebar to begin.</p>
          </div>
        )}

        {activeSection === "users" && <AdminUsers />}
        {activeSection === "innovations" && <AdminInnovations />}
        {activeSection === "missions" && <AdminMissions />}
      </main>
    </div>
  );
}
