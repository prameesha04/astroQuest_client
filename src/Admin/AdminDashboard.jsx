import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/admin/missions", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setMissions(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>🚀 Admin Mission Dashboard</h1>

      {missions.map((m) => (
        <div
          key={m._id}
          style={{
            background: "#1a1f4a",
            color: "white",
            padding: "15px",
            margin: "10px 0",
            borderRadius: "10px",
          }}
        >
          <h3>{m.title}</h3>
          <p>{m.description}</p>
        </div>
      ))}
    </div>
  );
}

