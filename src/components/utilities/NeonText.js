import React from "react";

const NeonText = ({ children }) => {
  return (
    <div className='inline-block transform scale-150 md:scale-100'>
      <style>
        {`.neon {
          font-family: neon;
          /*   color: #000; */
          font-size: 9vw;
          line-height: 9vw;
          text-shadow: 0 0 1vw #1041FF, 0 0 3vw #000, 0 0 10vw #1041FF, 0 0 10vw #1041FF, 0 0 .4vw #8BFDFE, .5vw .5vw .1vw #147280;
          color: #28D7FE;
        }`}
      </style>
      <span className="neon">{children}</span>
    </div>
  );
};

export default NeonText;
