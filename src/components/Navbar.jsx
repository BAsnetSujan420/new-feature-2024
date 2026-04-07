import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.nav`
  width: fit-content;

  margin: 2rem auto;
  background: hsl(0 0% 0% / 0.8);
  padding: 8px;
  border-radius: 8px;
  anchor-name: --hovered-link;

  &::after {
    content: '';
    position: absolute;
    top: calc(anchor(bottom) - 8px);
    left: calc(anchor(left) + 1rem);
    right: calc(anchor(right) + 1rem);
    bottom: calc(anchor(bottom) + 5px);
    background: steelblue;
    position-anchor: --hovered-link;
    transition: 300ms;
  }

  @supports (corner-shape: squircle) {
    border-radius: 24px;
    corner-shape: squircle;
  }
`;
const NavList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;
const Nav = styled.li`
  &:hover {
    anchor-name: --hovered-link;
  }
`;
const NavItem = styled.a`
  display: block;
  padding: 1rem;
  text-decoration: none;
  color: white;
`;

function Navbar() {
  return (
    <Wrapper>
      <NavList>
        <Nav>
          <NavItem href="#">Home</NavItem>
        </Nav>
        <Nav>
          <NavItem href="#">About</NavItem>
        </Nav>
        <Nav>
          <NavItem href="#">Blog</NavItem>
        </Nav>
        <Nav>
          <NavItem href="#">Contact</NavItem>
        </Nav>
      </NavList>
    </Wrapper>
  );
}

export default Navbar;
