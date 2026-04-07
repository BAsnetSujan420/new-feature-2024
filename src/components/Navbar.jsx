import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
background-image: url("https://images.unsplash.com/photo-1516553386477-13b2294c5896?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
background-attachment: fixed;
background-position: 55% 80%;
}
`;

const Wrapper = styled.nav`
  width: fit-content;

  margin: 2rem auto;
  background: hsl(0 0% 0% / 0.8);
  padding: 8px;
  border-radius: 8px;
  anchor-name: --hovered-link;

  isolation: isolate;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    top: calc(anchor(bottom) - 8px);
    left: calc(anchor(left) + 1rem);
    right: calc(anchor(right) + 1rem);
    bottom: calc(anchor(bottom) + 5px);
    background-image:
      linear-gradient(rgb(0 0 0 / 0.5) 0 0),
      url('https://images.unsplash.com/photo-1516553386477-13b2294c5896?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-attachment: fixed;
    background-position: 55% 80%;
    position-anchor: --hovered-link;
    border-radius: 10px;
    transition: 500ms
      linear(
        0,
        0.029 1.3%,
        0.119 2.8%,
        0.659 8.7%,
        0.871 11.6%,
        1.009 14.6%,
        1.052 16.2%,
        1.078 17.9%,
        1.088 19.7%,
        1.085 21.7%,
        1.014 31.4%,
        0.993 38%,
        1.001 57.6%,
        1
      );
  }

  &:has(a:hover)::after {
    top: anchor(top);
    left: anchor(left);
    right: anchor(right);
    bottom: anchor(bottom);

    @supports (corner-shape: squircle) {
      border-radius: 50%;
      corner-shape: squircle;
    }
  }

  &:has(li:first-of-type a:hover)::after {
    @supports (corner-shape: squircle) {
      border-radius: 32px 50% 50% 32px;
    }
  }

  &:has(li:last-of-type a:hover)::after {
    @supports (corner-shape: squircle) {
      border-radius: 50% 32px 32px 50%;
    }
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
    <>
      <GlobalStyle />
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
    </>
  );
}

export default Navbar;
