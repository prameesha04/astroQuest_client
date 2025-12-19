import { useEffect, useState } from "react";
import axios from "axios";
import "./css/Admin.css";

export default function AdminInnovations() {
  const [innovations, setInnovations] = useState([]);

  useEffect(() => {
    axios
      .get("https://astroquest-server.onrender.com/api/admin/innovations", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setInnovations(res.data))
      .catch(console.error);
  }, []);

  return (
    <>
      <h2>💡 User Innovations</h2>

      {innovations.map((i) => (
        <div key={i._id} className="admin-card">
          <h3>{i.innovationTitle}</h3>

          <p>
            <b>Innovator:</b> {i.innovatorName}
          </p>
          <p>
            <b>Controller:</b> {i.controller}
          </p>
          <p>
            <b>Type:</b> {i.innovationType}
          </p>

          <p className="idea">{i.innovationIdea}</p>

          <p className="tools">🛠 {i.toolsUsed}</p>

          <small>📅 {new Date(i.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </>
  );
}
