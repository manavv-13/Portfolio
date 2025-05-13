import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ThemeContext from "../context/themeContext";

const skills = [
  { name: "C++", icon: "cplusplus/cplusplus-original.svg" },
  { name: "JavaScript", icon: "javascript/javascript-original.svg" },
  { name: "HTML", icon: "html5/html5-original.svg" },
  { name: "CSS", icon: "css3/css3-original.svg" },
  { name: "Bootstrap", icon: "bootstrap/bootstrap-original.svg" },
  { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", icon: "nodejs/nodejs-original-wordmark.svg" },
  { name: "MongoDB", icon: "mongodb/mongodb-original-wordmark.svg" },
  {
    name: "Express.js",
    icon: "express/express-original.svg", // Light mode (image)
    darkClass: "devicon-express-original", // Dark mode (icon class)
  },
  { name: "React.js", icon: "react/react-original.svg" },
  { name: "MySQL", icon: "mysql/mysql-original.svg" },
  { name: "Git", icon: "git/git-original.svg" },
  {
    name: "GitHub",
    icon: "github/github-original.svg",
    darkClass: "devicon-github-original",
  },
  { name: "Figma", icon: "figma/figma-original.svg" },
  {
    name: "Framer Motion",
    icon: "framermotion/framermotion-original.svg",
    darkClass: "devicon-framermotion-original",
  },
];

const fadeInVariant = {
  hidden: { opacity: 0, rotate: -15 },
  visible: (i) => ({
    opacity: 1,
    rotate: 0,
    transition: { delay: i * 0.1, duration: 0.1, ease: "anticipate" },
  }),
};

function Skills() {
  const { darkMode } = React.useContext(ThemeContext);

  return (
    <div
      className={`my-4 ${darkMode ? "bg-black" : "bg-white"}`}
    >
      <h2
        className={`mx-2 text-5xl averia-serif-libre-bold ${
          darkMode ? "text-[#00a3f5]" : "text-[#132E35]"
        }`}
      >
        Here are my major{" "}
        <span className={`${darkMode? "text-white":"text-[#2D4A53]"}`}>
          Skills
        </span>
      </h2>

      <div className="mt-4 mx-2 flex flex-wrap justify-center items-center gap-4 md:px-[150px]">
        {skills.map((skill, index) => {
          const { ref, inView } = useInView({
            triggerOnce: false,
            threshold: 0.2,
          });
          return (
            <motion.div
              key={skill.name}
              ref={ref}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInVariant}
              className={`cursor-pointer flex justify-center items-center gap-2 border-2 rounded-xl px-3 py-1 transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                darkMode
                  ? "border-[#00a3f5] hover:bg-[#2D4A53] hover:shadow-white text-white"
                  : "border-[#132E35] hover:bg-[#2D4A53] hover:shadow-black hover:text-white"
              }`}
            >
              {darkMode && skill.darkClass ? (
                <i className={`text-2xl ${skill.darkClass} text-white`}></i>
              ) : (
                <img
                  className="h-6 w-6"
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}`}
                  alt={`${skill.name} Logo`}
                />
              )}
              <p
                className={`text-xl averia-serif-libre-regular`}
              >
                {skill.name}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
