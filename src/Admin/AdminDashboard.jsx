import "./css/AdminDashboard.css";
import AdminUsers from "./AdminUsers";
import AdminInnovations from "./AdminInnovations";
import AdminMissions from "./AdminMissions";

export default function AdminDashboard() {
  return (
    <div className="admin-container">
      <div className="admin-header">🚀 AstroQuest Admin Control</div>

      <div className="admin-card">
        <AdminUsers />
      </div>

      <div className="admin-card">
        <AdminInnovations />
      </div>

      <div className="admin-card">
        <AdminMissions />
      </div>
    </div>
  );
}
