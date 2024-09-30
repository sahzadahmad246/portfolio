import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border p-5 flex justify-around">
      <div className="flex items-center justify-between">
        {/* Profile Section */}
        <div className="flex items-center">
          <img
            src="https://avatars.githubusercontent.com/u/124631079?s=400&v=4"
            className="w-8 rounded-full"
            alt="Profile"
          />
          <span className="text-lg px-2">Ｓｈａｈｚａｄ</span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="black"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="black"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <div className={`md:flex ${isOpen ? "block" : "hidden"} mt-4 md:mt-0`}>
        <ul className="flex flex-col md:flex-row md:space-x-4">
          <li>
            <NavLink to="/" className="text-black hover:text-gray-700">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="text-black hover:text-gray-700">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="text-black hover:text-gray-700">
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
