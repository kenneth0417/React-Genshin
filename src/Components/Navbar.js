import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background: transparent;
  height: 5vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0px 30px;
  padding: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-left: 50px;
`;
function Navbar() {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/characters">Characters</StyledLink>
    </Nav>
  );
}

export default Navbar;
