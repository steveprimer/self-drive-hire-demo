import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { name: "Home", to: "Hero" },
    { name: "Cars", to: "cars" },
    { name: "FAQ", to: "faq" },
    { name: "Book", to: "book" },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 bg-black bg-opacity-40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">R3ntal Central</h1>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-6 text-white font-medium">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={200}
                  spy={true}
                  offset={-70}
                  className="hover:text-green-400 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Icon */}
          <div
            className="md:hidden text-white cursor-pointer"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen z-40 bg-black/90 text-white flex flex-col">
          <div className="flex justify-between items-center px-6 py-4 border-b border-white/20">
            <h1 className="text-2xl font-bold">R3ntal Central</h1>
            <button onClick={toggleMenu}>
              <FaTimes size={24} />
            </button>
          </div>
          <ul className="flex-1 flex flex-col items-center justify-center space-y-6 text-lg font-semibold">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={600}
                  spy={true}
                  offset={-70}
                  onClick={toggleMenu}
                  className="hover:text-green-400 capitalize cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
