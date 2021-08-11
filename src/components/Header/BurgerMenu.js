import React from "react";
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'
import routes from '../../data/navRoutes'

const BurgerMenue = () => {
  return (
    <Navbar.Collapse>
      <Nav>
        {routes
          .filter((sub) => !sub.title)
          .map((subnav) => {
            return (
              <LinkContainer key={subnav.text} to={subnav.path}>
                <Nav.Link>{subnav.text}</Nav.Link>
              </LinkContainer>
            );
          })}
      </Nav>
    </Navbar.Collapse>
  );
};

export default BurgerMenue;
