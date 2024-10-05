import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom"; // Import Link from React Router

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCommunityDropdownOpen, setIsCommunityDropdownOpen] = useState(false);

  const toggleCommunityDropdown = () => {
    setIsCommunityDropdownOpen(!isCommunityDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const style = ({ isActive }) => (isActive ? "text-green-700" : "");

  useEffect(() => {
    const closeMenuOnBodyClick = (event) => {
      const clickedElement = event.target;
      const isMobile = window.innerWidth <= 768;

      if (
        isMenuOpen &&
        isMobile &&
        !clickedElement.closest("nav") // Check if the clicked element is outside the nav
      ) {
        setMenuOpen(false);
      }
    };

    document.body.addEventListener("click", closeMenuOnBodyClick);

    return () => {
      document.body.removeEventListener("click", closeMenuOnBodyClick);
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      className="fixed -top-0 left-0 right-0 z-50 w-full"
    >
      <nav className=" bg-white text-green-900 p-4 px-4 md:px-20 flex justify-between items-center md:gap-5 lg:gap-0 shadow-lg">
        <div className="flex  items-center justify-between">
          <span className="text-2xl lg:text-3xl font-bold text-green-900">
            EventTrakka
          </span>
        </div>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-green-500 rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 "
          aria-controls="menu"
        >
          <FaBars className="w-5 h-5 " aria-hidden="true" />
        </button>

        <div
          className={`absolute md:relative top-full left-0 ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="menu"
          style={{ zIndex: 100 }}
        >
          <ul className="flex flex-col items-center gap-3 py-4 md:py-0 md:gap-0 px-4 md:px-0 text-base md:text-md lg:text-lg border border-gray-100 rounded-lg bg-gray-50 md:space-x-8  md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <NavLink
                to="/"
                className={` py-2  block px-1 text-black md:hover:text-green-700 ${style}`}
                aria-current="page"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/events"
                className={` py-2  block px-1 text-black md:hover:text-green-700 ${style}`}
                aria-current="page"
              >
                Events
              </NavLink>
            </li>
            <li>
              <div
                type="button"
                onClick={toggleCommunityDropdown}
                className="flex items-baseline lg:relative gap-1 justify-between w-full py-2 px-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:w-auto"
              >
                <p>Community</p>
                <FaAngleDown className="inline-block group h-4 w-4 " />
              </div>
              <div
                className={`${
                  isCommunityDropdownOpen ? "block" : "hidden"
                } z-100  font-normal bg-white divide-y group-hover:block divide-gray-100 lg:absolute rounded-lg shadow w-44`}
                style={{ zIndex: 100 }}
              >
                <ul
                  className="py-2 text-sm text-gray-700 "
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <NavLink
                      to="/CommunityOne"
                      className="block px-4 py-2 hover:bg-gray-100 "
                    >
                      Community 1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/CommunityTwo"
                      className="block px-4 py-2 hover:bg-gray-100 "
                    >
                      Community 2
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/CommunityThree"
                      className="block px-4 py-2 hover:bg-gray-100 "
                    >
                      Community 3
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block py-2 px-1 text-black md:hover:text-green-700 rounded "
                aria-current="page"
              >
                About
              </NavLink>
            </li>
            <li className="self-center">
              <Link to="/login">
                <button className="bg-white border border-green-900 w-full text-green-900 font-semibold lg:font-bold py-2 px-4 rounded-lg lg:ml-4 hover:bg-green-700 hover:text-white lg:mt-0">
                  Login
                </button>
              </Link>
            </li>
            <li>
              <Link to={"/signup"}>
                <button className="bg-green-900 hover:bg-green-700 w-full text-white font-semibold lg:font-bold py-2 px-4 rounded-lg lg:ml-2 lg:mt-0">
                  Sign up
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
