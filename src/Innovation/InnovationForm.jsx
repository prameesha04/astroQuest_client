import { useState } from "react";
import axios from "axios";

export default function InnovationForm() {
  const [form, setForm] = useState({
    innovatorName: "",
    controller: "",
    innovationTitle: "",
    innovationType: "",
    innovationIdea: "",
    toolsUsed: "",
  });

  const submitInnovation = async () => {
    await axios.post(
      "https://astroquest-server.onrender.com/api/innovation/add",
      form
    );
    alert("Innovation saved!");
    setForm({
      innovatorName: "",
      controller: "",
      innovationTitle: "",
      innovationType: "",
      innovationIdea: "",
      toolsUsed: "",
    });
  };

  return (
    <div>
      <h2>Submit Your Innovation</h2>

      <input
        placeholder="Innovator Name"
        value={form.innovatorName}
        onChange={(e) => setForm({ ...form, innovatorName: e.target.value })}
      />

      <input
        placeholder="Controller / Guide"
        value={form.controller}
        onChange={(e) => setForm({ ...form, controller: e.target.value })}
      />

      <input
        placeholder="Innovation Title"
        value={form.innovationTitle}
        onChange={(e) => setForm({ ...form, innovationTitle: e.target.value })}
      />

      <select
        value={form.innovationType}
        onChange={(e) => setForm({ ...form, innovationType: e.target.value })}
      >
        <option value="">Select Type</option>
        <option>Education</option>
        <option>Game</option>
        <option>Space</option>
        <option>AI</option>
      </select>

      <textarea
        placeholder="Innovation Idea"
        value={form.innovationIdea}
        onChange={(e) => setForm({ ...form, innovationIdea: e.target.value })}
      />

      <input
        placeholder="Tools Used (React, MongoDB...)"
        value={form.toolsUsed}
        onChange={(e) => setForm({ ...form, toolsUsed: e.target.value })}
      />

      <button onClick={submitInnovation}>Submit</button>
    </div>
  );
}
