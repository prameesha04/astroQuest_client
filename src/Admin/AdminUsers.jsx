import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/admin/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);
      setLoading(false);
      console.log(users);
    } catch (err) {
      console.error("ADMIN USERS ERROR", err.response?.data || err.message);
      setLoading(false);
    }
  };

  if (loading) return <p>Loading users...</p>;

  return (
    <div>
      <h2>Registered Users</h2>
      {users.length === 0 ? (
        <p>No users registered yet.</p>
      ) : (
        users.map((u) => (
          <div
            key={u._id}
            className="admin-item"
            style={{ padding: "8px", borderBottom: "1px solid #ddd" }}
          >
            <b>{u.name}</b> — {u.email}
            <span style={{ marginLeft: 8, color: "#00c3ff" }}>({u.role})</span>
          </div>
        ))
      )}
    </div>
  );
}
