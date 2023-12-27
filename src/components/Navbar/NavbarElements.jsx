// Filename - ./components/Navbar.js

import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #324a5f;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 12;
  overflow-x: hidden;
`;

export const NavLink = styled(Link)`
  color: black;
  display: flex;
  justify-content: flex-end
  text-decoration: none;
  margin-right: 50px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 600;
  
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
