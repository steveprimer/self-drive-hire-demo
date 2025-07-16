// src/components/Hero.jsx
import React, { useState } from "react";
import { Link } from "react-scroll";
import heroVideo from "../assets/heroVideo.mp4";
import CalendlyPopupButton from "../components/Calendly";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    const newState = !menuOpen;
    setMenuOpen(newState);
    
  };



  return (
    <>
      <nav className="fixed w-full z-50 bg-black bg-opacity-30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">ScaleBridge</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-white font-medium">
            {["home", "about", "services", "work", "contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={600}
                  spy={true}
                  offset={-70}
                  activeClass="active"
                  className="hover:text-blue-400 cursor-pointer capitalize"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-white cursor-pointer"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu - placed OUTSIDE <nav> */}
      {menuOpen && (
  <div className="animate-slideDown md:hidden fixed top-0 left-0 w-full h-screen z-40 backdrop-blur-md bg-black/80 text-white flex flex-col">
    
    {/* Header Row with Logo + Close Button */}
    <div className="flex justify-between items-center px-6 py-4 border-b border-white/20">
      <h1 className="text-2xl font-bold">ScaleBridge</h1>
      <button onClick={() => setMenuOpen(false)}>
        <FaTimes size={24} />
      </button>
    </div>

    {/* Centered Menu Links */}
    <ul className="flex-1 flex flex-col items-center justify-center space-y-6 text-lg font-semibold">
      {["home", "about", "services", "work", "contact"].map((item) => (
        <li key={item}>
          <Link
            to={item}
            smooth={true}
            duration={600}
            spy={true}
            offset={-70}
            activeClass="text-blue-400"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 capitalize cursor-pointer transition-colors duration-600"
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)}


    </>
  );
};


const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Grow Your Business with <span className="text-blue-400">ScaleBridge</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          We connect UK & US businesses with world-class digital services.
        </p>
        {/* <Link
          to="contact"
          smooth={true}
          duration={600}
          className="laser-button bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg cursor-pointer"
        >
          Get Started
        </Link> */}
        <CalendlyPopupButton />

      </div>
    </section>
  );
};

export default Hero;
// export { Navbar, Hero };