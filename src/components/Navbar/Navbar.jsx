import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import img from "../../icons/logo.svg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-mc-blue p-4">
      <div className="container  flex justify-between items-center">
        <div>
          <img src={img} alt="Car" className="items-start pl-0 w-20" />
        </div>
        <div className="md:hidden relative">
          <button
            onClick={toggleMenu}
            className="text-black items-end focus:outline-none"
          >
            {/* Example of an inline SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div
              className={`absolute top-0 -left-64 transform transition-transform duration-300 flex flex-col ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
              } bg-mc-blue border border-gray-700 p-2 space-y-2 w-64`}
            >
              <NavLink
                to="/"
                activeClassName="text-blue-500"
                onClick={toggleMenu}
              >
                Domov
              </NavLink>
              <NavLink
                to="/ponuka"
                activeClassName="text-blue-500"
                onClick={toggleMenu}
              >
                Ponuka Vozidiel
              </NavLink>
              <NavLink
                to="/o-nas"
                activeClassName="text-blue-500"
                onClick={toggleMenu}
              >
                O nás
              </NavLink>
              <NavLink
                to="/pozicovna"
                activeClassName="text-blue-500"
                onClick={toggleMenu}
              >
                Požičovňa
              </NavLink>
              <NavLink
                to="/kontakt"
                activeClassName="text-blue-500"
                onClick={toggleMenu}
              >
                Kontakt
              </NavLink>
            </div>
          )}
        </div>
        <div className="md:justify-end md:items-center space-x-10 hidden md:block font-semibold text-lg">
          <NavLink to="/" activeClassName="text-blue-500">
            Domov
          </NavLink>
          <NavLink to="/ponuka" activeClassName="text-blue-500">
            Ponuka Vozidiel
          </NavLink>
          <NavLink to="/o-nas" activeClassName="text-blue-500">
            O nás
          </NavLink>
          <NavLink to="/pozicovna" activeClassName="text-blue-500">
            Požičovňa
          </NavLink>
          <NavLink to="/kontakt" activeClassName="text-blue-500">
            Kontakt
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
