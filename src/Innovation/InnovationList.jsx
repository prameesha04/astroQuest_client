import { useEffect, useState } from "react";
import axios from "axios";

export default function InnovationList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/innovation/all")
      .then((res) => setList(res.data));
  }, []);

  return (
    <div>
      <h2>Submitted Innovations</h2>

      {list.map((item) => (
        <div key={item._id}>
          <h4>{item.innovationTitle}</h4>
          <p>
            <b>Innovator:</b> {item.innovatorName}
          </p>
          <p>
            <b>Controller:</b> {item.controller}
          </p>
          <p>{item.innovationIdea}</p>
        </div>
      ))}
    </div>
  );
}
