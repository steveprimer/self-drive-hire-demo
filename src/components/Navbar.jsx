// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav style={styles.navbar}>
//       <div style={styles.logo}>ScaleBridge</div>

//       {/* Hamburger Icon */}
//       <div onClick={() => setIsOpen(!isOpen)} style={styles.hamburger}>
//         {isOpen ? <FaTimes size={22} color="#fff" /> : <FaBars size={22} color="#fff" />}
//       </div>

//       {/* Nav Links */}
//       <ul style={{ ...styles.navLinks, ...(isOpen ? styles.showMenu : styles.hideMenu) }}>
//         <li><a href="#home" style={styles.link}>Home</a></li>
//         <li><a href="#services" style={styles.link}>Services</a></li>
//         <li><a href="#work" style={styles.link}>Our Work</a></li>
//         <li><a href="#contact" style={styles.link}>Contact</a></li>
//       </ul>
//     </nav>
//   );
// };

// const styles = {
//   navbar: {
//     backgroundColor: "#0f172a",
//     color: "#fff",
//     padding: "1rem 2rem",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     position: "fixed",
//     top: 0,
//     width: "100%",
//     zIndex: 1000,
//   },
//   logo: {
//     fontWeight: "bold",
//     fontSize: "1.4rem",
//   },
//   hamburger: {
//     display: "none",
//     cursor: "pointer",
//   },
//   navLinks: {
//     listStyle: "none",
//     display: "flex",
//     gap: "1.5rem",
//     margin: 0,
//   },
//   link: {
//     color: "#fff",
//     textDecoration: "none",
//   },
//   showMenu: {
//     display: "flex",
//     flexDirection: "column",
//     position: "absolute",
//     top: "60px",
//     right: "20px",
//     backgroundColor: "#0f172a",
//     padding: "1rem",
//     border: "1px solid #0095ff",
//     borderRadius: "8px",
//   },
//   hideMenu: {
//     display: "none",
//   },
//   // Mobile styles (applied via media query below)
// };

// export default Navbar;
