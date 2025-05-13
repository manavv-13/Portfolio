import React, { useContext } from "react";
import ThemeContext from "../context/themeContext";

function Footer() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <footer className={`py-10 shadow-md border-t border-opacity-25 ${darkMode ? 'text-white bg-black border-white' : 'text-black border-black bg-white'}`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left Section - Name or Logo */}
        <h2 className={`text-2xl font-bold averia-serif-libre-regular ${darkMode ? 'text-white' : 'text-black'}`}>
          Manav's Portfolio
        </h2>

        {/* Copyright */}
        <div className={`text-center mt-4 text-sm averia-serif-libre-regular ${darkMode ? 'text-white' : 'text-black'}`}>
          &copy; {new Date().getFullYear()} Manav. All rights reserved.
        </div>

        {/* Right Section - Social Media Links */}
        <div className={`flex gap-4 averia-serif-libre-regular ${darkMode ? 'text-white' : 'text-black'}`}>
          <a
            href="https://github.com/manavv-13"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github text-2xl hover:opacity-60"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/manav-nigam-977365224"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin text-2xl hover:opacity-60"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;