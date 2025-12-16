import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminInnovations() {
  const [innovations, setInnovations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/admin/innovations", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setInnovations(res.data));
  }, []);

  return (
    <>
      <h2>💡 Innovations</h2>
      {innovations.map((i) => (
        <div key={i._id}>
          <b>{i.title}</b> by {i.user.name}
        </div>
      ))}
    </>
  );
}
