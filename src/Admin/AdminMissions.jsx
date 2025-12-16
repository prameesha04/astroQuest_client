import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminMissions() {
  const [missions, setMissions] = useState([]);
  const [title, setTitle] = useState("");

  const fetchMissions = () => {
    axios
      .get("http://localhost:5000/api/admin/missions", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setMissions(res.data));
  };

  useEffect(fetchMissions, []);

  const addMission = async () => {
    await axios.post(
      "http://localhost:5000/api/admin/missions/create",
      { title },
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );
    fetchMissions();
  };

  return (
    <>
      <h2>📝 Missions</h2>
      <input
        className="admin-input"
         onChange={(e) => setTitle(e.target.value)}
      />
      <button className="admin-btn" onClick={addMission}>
        Add
      </button>
      {missions.map((m) => (
        <p key={m._id}>{m.title}</p>
      ))}
    </>
  );
}
