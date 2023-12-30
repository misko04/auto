import React from "react";
// import styled from "styled-components";
import "../index.css";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

// const StyledText = styled.h1`
//   @import url("https://fonts.googleapis.com/css2?family=Caladea:wght@500&display=swap");
//   font-family: "Caladea", sans-serif;
//   font-size: 100px;
// `;

const Header = () => {
  return (
    <div>
      <div className="flex"></div>
      <div>
        <Nav>
          <NavMenu>
            <NavLink to="/about" activeStyle>
              About
            </NavLink>
            <NavLink to="/contact" activeStyle>
              Contact Us
            </NavLink>
            <NavLink to="/blogs" activeStyle>
              Blogs
            </NavLink>
            <NavLink to="/sign-up" activeStyle>
              Sign Up
            </NavLink>
          </NavMenu>
        </Nav>
      </div>
    </div>
  );
};

export default Header;
