import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container } from "react-bootstrap";
import BurgerMenu from './BurgerMenu'
import routes from "../../data/navRoutes";

const Header = () => {
  return (
        {routes
          .filter((main) => main.title)
          .map((title) => {
            return (
              <LinkContainer key={title.text} to={title.path}>
                <Navbar.Brand>{title.text}</Navbar.Brand>
              </LinkContainer>
            );
          })}
        {/* Navbar.Toggle is the hamburger menue for when we have a smaller screen
          If it follows rihgt after Navbar.Brand, it is aligned far right */}
  );
};

export default Header;
