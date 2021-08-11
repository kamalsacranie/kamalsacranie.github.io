import React from "react";
import { Link } from "react-router-dom";
import routes from "../../data/navRoutes";

const NavItems = () => {
  return (
    <React.Fragment>
      <nav>
        {routes
          .filter((r) => !r.title)
          .map((r) => {
            return (
              <Link
                className="p-3 block transition duration-200 pl-5 rounded hover:bg-blue-700 hover:text-white"
                to={r.path}
                key={r.text}
              >
                {r.text}
              </Link>
            );
          })}
      </nav>
    </React.Fragment>
  );
};

export default NavItems;
