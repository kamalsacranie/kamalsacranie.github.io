import React from "react";
import BurgerMenu from "./BurgerMenu";
import routes from "../../data/navRoutes";

const Header = () => {
  return (
    <React.Fragment>
      {routes
        .filter((main) => main.title)
        .map((title) => {
          return (
            <h2 key={title.text} to={title.path}>
              {title.text}
            </h2>
          );
        })}
    </React.Fragment>
  );
};

export default Header;
