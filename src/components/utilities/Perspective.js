import React, { useState } from "react";

const Perspective = ({ children, xRotate, yRotate }) => {
  const [coords, setCoords] = useState([0, 0]);
  const [dims, setDims] = useState([])

  const transformElement = (e) => {
    const width=dims[0]
    const height=dims[1]

    setCoords([
      ((e.nativeEvent.offsetX - width/2)/width/2)*(xRotate),
      ((e.nativeEvent.offsetY - height/2)/height/2)*(yRotate),
    ]);
  };

  if (xRotate && yRotate !== 0) {

    return (
      <div className='inline-block'
        style={{
          transform: `perspective(400px) rotateX(${-coords[1]}deg) rotateY(${
            coords[0]
          }deg)`,
        }}
        onMouseEnter={(e) => setDims([e.currentTarget.offsetWidth, e.currentTarget.offsetHeight])}
        onMouseMove={(e) => transformElement(e)}
        onMouseLeave={() => setCoords([0, 0])}
      >
        {children}
      </div>
    );
  } else {
    return (
      <div className='inline-block'>
        {children}
      </div>
    )
  }

};

export default Perspective;
