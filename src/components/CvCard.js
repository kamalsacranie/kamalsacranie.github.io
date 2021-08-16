import React, { useEffect, useState } from "react";
import Perspective from "./utilities/Perspective";

const CvCard = ({ data, objKey, index }) => {
  const [focus, setFocus] = useState(false);
  
  return (
    <Perspective xRotate={focus ? 0 : 10} yRotate={focus ? 0 : 10}>
        <div
          key={index}
          className={`m-0 single-card text-center min-h-fill text-white w-72 sm:w-96 ${
            focus && "max-h-screen/2 overflow-y-auto"
          }`}
          onClick={() => setFocus(!focus)}
        >
          {!focus ? (
            <React.Fragment>
              <h2 className="big-text pointer-events-none p-5">{objKey}</h2>
              <img
                className="pointer-events-none rounded-3xl p-3"
                src={data[objKey]["img"]}
                alt={objKey}
              />
              <h3 className="pointer-events-none color-yellow-100 p-5">
                {data[objKey]["subheading"]}
              </h3>
            </React.Fragment>
          ) : (
            <div>
              <h2 className="big-text">{data[objKey]["subheading"]}</h2>
              <ul className="pointer-events-none list-disc text-left p-5">
                {data[objKey]["points"].map((i) => {
                  return (
                    <li
                      key={data[objKey]["points"].findIndex((e) => e === i)}
                      className="pointer-events-none"
                    >
                      {i}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </Perspective>
  );
};

export default CvCard;
