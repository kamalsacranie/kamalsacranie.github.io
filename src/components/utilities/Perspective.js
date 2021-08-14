import React, { useState } from "react";

const Perspective = ({ children }) => {
  const [coords, setCoords] = useState([0, 0]);

  const transformElement = (e) => {
    let sidecard = document.getElementById("sidecard");
    let width = sidecard.offsetWidth;
    let height = sidecard.offsetHeight;

    setCoords([
      (e.clientX - width / 2) / 75,
      ((e.clientY - height / 2) / 75) *
        (Math.min(width, height) / Math.max(width, height)),
    ]);
  };

  return (
    <div
      style={{
        transform: `perspective(400px) rotateX(${-coords[1]}deg) rotateY(${
          coords[0]
        }deg)`,
      }}
      onMouseMove={(e) => transformElement(e)}
      onMouseLeave={() => setCoords([0, 0])}
    >
      {children}
    </div>
  );
};

export default Perspective;
