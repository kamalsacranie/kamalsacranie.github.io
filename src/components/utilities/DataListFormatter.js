// Formats my data js files into either a heading and a paragraph or
// a heading and a bulletted list
import React from "react";

const DataListFormatter = ({ hClasses, ulClasses, liClasses, pClasses, data}) => {
  return (
    <React.Fragment>
      {/* Mapping out our object elements */}
      {Object.keys(data).map((key, index) => {
        return (
          <React.Fragment>
            {/* adding heading in */}
            <h2 className={hClasses} key={key}>{key}</h2>
            {/* if we have an array we create the list */}
            {data[key] instanceof Array ? (
              <ul className={ulClasses}>
                {data[key].map((point) => {
                  return (
                    <React.Fragment>
                      <li
                        key={data[key].findIndex((e) => e === point)}
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
