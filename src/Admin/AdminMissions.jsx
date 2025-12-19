import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaEdit, FaEye } from "react-icons/fa";

export default function AdminMissions() {
  const [missions, setMissions] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [viewMission, setViewMission] = useState(null);

  const token = localStorage.getItem("token");

  // FETCH ALL MISSIONS
  const fetchMissions = async () => {
    try {
      const res = await axios.get(
        "https://astroquest-server.onrender.com/api/admin/missions",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMissions(res.data);
    } catch (err) {
      console.error("Failed to fetch missions", err);
    }
  };

  useEffect(() => {
    fetchMissions();
  }, []);

  // ADD MISSION
  const addMission = async () => {
    if (!title) return;
    try {
      await axios.post(
        "https://astroquest-server.onrender.com/api/admin/missions/create",
        { title, description },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTitle("");
      setDescription("");
      fetchMissions();
    } catch (err) {
      console.error("Add mission failed", err);
    }
  };

  // UPDATE MISSION
  const updateMission = async (id) => {
    try {
      await axios.put(
        `https://astroquest-server.onrender.com/api/admin/missions/${id}`,
        { title, description },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setEditingId(null);
      setTitle("");
      setDescription("");
      fetchMissions();
    } catch (err) {
      console.error("Update mission failed", err);
    }
  };

  // DELETE MISSION
  const deleteMission = async (id) => {
    try {
      await axios.delete(
        `https://astroquest-server.onrender.com/api/admin/missions/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchMissions();
    } catch (err) {
      console.error("Delete mission failed", err);
    }
  };

  return (
    <div className="mission-container">
      <h2>Missions Control</h2>

      {/* ADD / UPDATE SECTION */}
      <div className="mission-add">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Mission title"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Mission description"
          className="mission-textarea"
        />

        <button
          onClick={editingId ? () => updateMission(editingId) : addMission}
        >
          {editingId ? "Update Mission" : "Add Mission"}
        </button>
      </div>

      {/* MISSIONS LIST */}
      <div className="mission-list">
        {missions.map((m) => (
          <div key={m._id} className="mission-card">
            <span>{m.title}</span>

            <div className="mission-actions">
              {/* VIEW */}
              <FaEye title="View" onClick={() => setViewMission(m)} />

              {/* EDIT */}
              <FaEdit
                title="Edit"
                onClick={() => {
                  setEditingId(m._id);
                  setTitle(m.title);
                  setDescription(m.description || "");
                }}
              />

              {/* DELETE */}
              <FaTrash title="Delete" onClick={() => deleteMission(m._id)} />
            </div>
          </div>
        ))}
      </div>

      {/* VIEW POPUP */}
      {viewMission && (
        <div className="mission-popup">
          <div className="popup-card">
            <h3>{viewMission.title}</h3>
            <p>{viewMission.description || "No description added"}</p>
            <button onClick={() => setViewMission(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
