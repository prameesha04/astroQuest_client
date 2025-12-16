import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/admin/users", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <>
      <h2>👥 Registered Users</h2>
      {users.map((u) => (
        <div key={u._id} className="admin-item">
          <span>{u.name}</span> — {u.email}
        </div>
      ))}
    </>
  );
}
