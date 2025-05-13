import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import ThemeContext from "../context/themeContext";

function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "about", "projects", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const activeLink = document.getElementById(`nav-${activeSection}`);
    if (activeLink) {
      setUnderlineStyle({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
      });
    }
  }, [activeSection]);

  return (
    <div className={`container mx-auto mt-4 rounded-xl sticky top-0 z-50  w-[100%] transition-all duration-300 ${darkMode ? "shadow-white  shadow-sm bg-black" : "shadow-lg bg-white"}`}>
      <div className={`flex justify-between items-center gap-6 ${menuOpen ? `shadow-md` : ``}`}>
        
        {/* Dark Mode Toggle */}
        <div className="mt-2 mx-2 flex flex-col justify-center items-center">
          <button
            onClick={toggleDarkMode}
            className={`cursor-pointer w-16 h-8 flex items-center rounded-full p-1 transition duration-300 ${darkMode ? "bg-[#00a3f5]" : "bg-[#2D4A53]"}`}
          >
            <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition duration-300 ${darkMode ? "translate-x-8" : "translate-x-0"}`}></div>
          </button>
          <label className={`text-2xl cursor-pointer averia-serif-libre-regular transition-all duration-300 ${darkMode ? "text-[#00a3f5]" : "text-[#2D4A53]"}`}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </label>
        </div>

        {/* Hamburger Menu */}
        <div className="mx-2 flex flex-row-reverse items-center flex-1 md:hidden cursor-pointer">
          <i
            className={`text-2xl fa-solid fa-bars transition-all duration-300 ${darkMode ? "text-[#00a3f5]" : "text-[#2D4A53]"}`}
            onClick={() => setMenuOpen(!menuOpen)}
          ></i>
        </div>

        <div className={`mx-2 md:flex md:flex-2 md:justify-end md:items-center md:gap-4 ${menuOpen ? `py-4 flex flex-col absolute -translate-x-2 top-17 shadow-md w-full ${darkMode ? "bg-black" : "bg-white"}` : `hidden`}`}>
          {["home", "skills", "about", "projects", "contact"].map((section) => (
            <Link
              key={section}
              id={`nav-${section}`}
              to={section}
              smooth={true}
              duration={500}
              offset={-80}
              className={`relative text-2xl cursor-pointer averia-serif-libre-regular px-4 transition-all duration-300 ${darkMode ? "text-[#00a3f5]" : "text-[#2D4A53]"}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}

          {/* Moving Underline */}
          <motion.div
            className={`absolute bottom-0 h-1 rounded-xl ${darkMode ? "bg-[#00a3f5]": "bg-[#132E35]"}`}
            initial={{ left: 0, width: 0 }}
            animate={{ left: underlineStyle.left, width: underlineStyle.width }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
