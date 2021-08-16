// Formats my data js files into either a heading and a paragraph or
// a heading and a bulletted list
import React from "react";
import Perspective from "./Perspective";

const DataListFormatter = ({ hClasses, ulClasses, liClasses, pClasses, data}) => {
  return (
    <React.Fragment>
      {/* Mapping out our object elements */}
      {Object.keys(data).map((key, index) => {
        return (
          <React.Fragment key={key}>
            {/* adding heading in */}
            <Perspective>
              <h2 className={hClasses}>{key}</h2>
            </Perspective>
            {/* if we have an array we create the list */}
            {data[key] instanceof Array ? (
              <ul className={ulClasses}>
                {data[key].map((point) => {
                  return (
                    <React.Fragment key={data[key].findIndex((e) => e === point)}>
                      <li
                        className={liClasses}
                      >
                        {point}
                      </li>
                    </React.Fragment>
                  );
                })}
              </ul>
            ) : (
            // else output a paragraph
              <p className={pClasses}>{data[key]}</p>
            )}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default DataListFormatter;
