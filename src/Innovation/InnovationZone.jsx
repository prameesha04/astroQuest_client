import axios from "axios";

const InnovationZone = () => {
  const dailyChallenge = async () => {
    await axios.post("http://localhost:5000/astro/daily", {
      userId: "USER_ID",
    });
    alert("Daily Challenge Completed!");
  };

  return (
    <div>
      <h2>Innovation Zone</h2>
      <button onClick={dailyChallenge}>Daily Space Challenge</button>
    </div>
  );
};

export default InnovationZone;
