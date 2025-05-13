import React, { useContext } from "react";
import { Link } from "react-scroll";
import ThemeContext from "../context/themeContext";

function Button({ text, download, link, section }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      {section ? (
        <Link
          to={section}
          smooth={true}
          duration={800}
          offset={-80} // Adjust based on navbar height
          className={`cursor-pointer text-xl averia-serif-libre-regular shadow-md transition-all duration-300 hover:shadow-lg active:shadow-sm p-3 rounded-2xl  ${darkMode ? "shadow-white bg-[#00a3f5] text-black" : "bg-[#132E35] shadow-black text-white"}`}
        >
          {text}
        </Link>
      ) : download ? (
        <a
          href={download}
          target="_blank"
          rel="noopener noreferrer"
          className={`cursor-pointer text-xl averia-serif-libre-regular shadow-md transition-all duration-300 hover:shadow-lg active:shadow-sm p-3 rounded-2xl  ${darkMode ? "shadow-white bg-[#00a3f5] text-black" : "shadow-black bg-[#132E35] text-white"}`}
        >
          {text}
        </a>
      ) : link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`cursor-pointer text-xl averia-serif-libre-regular shadow-md transition-all duration-300 hover:shadow-lg active:shadow-sm p-3 rounded-2xl ${darkMode ? "shadow-white bg-[#00a3f5] text-black" : "shadow-black bg-[#132E35] text-white"}`}
        >
          {text}
        </a>
      ) : (
        <button className={`cursor-pointer text-xl averia-serif-libre-regular shadow-md transition-all duration-300 hover:shadow-lg active:shadow-sm p-3 rounded-2xl ${darkMode ? "shadow-white bg-[#00a3f5] text-black" : "shadow-black bg-[#132E35] text-white"}`}>
          {text}
        </button>
      )}
    </>
  );
}

export default Button;