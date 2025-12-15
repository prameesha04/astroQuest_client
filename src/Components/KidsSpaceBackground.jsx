import React from "react";
import "./KidsSpaceBackground.css";

const KidsSpaceBackground = () => {
  return (
    <div className="kids-space-bg">
      {/* ⭐ Stars */}
      <div className="stars"></div>

      {/* 🪐 Floating Planets */}
      <div className="planet p1">🌕</div>
      <div className="planet p2">🪐</div>
      <div className="planet p3">🌍</div>

      {/* 🚀 Flying Rockets */}
      <div className="rocket r1">🚀</div>
      <div className="rocket r2">🚀</div>
      <div className="rocket r3">🚀</div>

      {/* Content Layer */}
      <div className="content-layer"></div>
    </div>
  );
};

export default KidsSpaceBackground;
