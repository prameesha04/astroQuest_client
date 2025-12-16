import InnovationForm from "./InnovationForm";
import InnovationList from "./InnovationList";
import "./Innovation.css";
export default function InnovationHome() {
  return (
    <div className="innovation-page">
  <div className="innovation-header">
    <h1>💡 Innovation Lab</h1>
    <p>Turn your ideas into space-grade solutions</p>
  </div>

  <form className="innovation-form">
    <InnovationForm />
  </form>

  <div className="innovation-list">
     <InnovationList />
  </div>
</div>

  );
}
