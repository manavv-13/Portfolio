import React, { useState } from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import sharpify from "../assets/sharpify.png";
import wanderLust from "../assets/wanderLust.png";
import newsBird from "../assets/newsBird.png";
import collably from "../assets/collably.png";
import ThemeContext from "../context/themeContext";

function Project() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const { darkMode } = React.useContext(ThemeContext);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 3 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? 3 : prevIndex - 1
    );
  };

  return (
    <div
      className={`my-3 mx-auto ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h2
        className={`text-5xl averia-serif-libre-bold pt-10 ${
          darkMode ? "text-[#00a3f5]" : "text-[#132E35]"
        }`}
      >
        <span className={`${darkMode? "text-white":"text-[#2D4A53]"}`}>Projects</span> that I've worked on!
      </h2>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`relative mt-4 pb-20 flex justify-center items-center overflow-x-hidden`}
      >

        {/* Project 1 */}
{currentProjectIndex === 0 && (
  <div
    className={`lg:w-4/5 flex rounded-lg py-4 flex-wrap ${
      darkMode ? "bg-black text-white" : "bg-white text-black"
    }`}
  >
    <button
      onClick={prevProject}
      className="flex cursor-pointer gap-3 absolute left-4 bottom-0 transform -translate-y-1/2 text-[#132E35] p-2 rounded-full"
    >
      <h1
        className={`relative text-xl averia-serif-libre-bold transition-all duration-300 group text-left overflow-hidden
        ${darkMode ? "text-[#00a3f5]" : "text-[#132E35]"}`}
      >
        <span className="relative z-10">← Prev</span>
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-500 group-hover:w-full"></span>
      </h1>
    </button>
    <button
      onClick={nextProject}
      className="cursor-pointer absolute right-4 bottom-0 transform -translate-y-1/2 text-[#132E35] p-2 rounded-full"
    >
      <h1
        className={`relative text-xl averia-serif-libre-bold transition-all duration-300 group text-left overflow-hidden
${darkMode ? "text-[#00a3f5]" : "text-[#132E35]"}`}
      >
        <span className="relative z-10">Next &rarr;</span>
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-500 group-hover:w-full"></span>
      </h1>
    </button>
    {/* Left Side - Image */}
    <div className="lg:flex-2 relative flex items-center justify-center my-5">
      {/*Image Div */}
      <div
        className={`h-full w-full rounded-2xl shadow-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:-translate-x-1 relative flex items-end justify-center overflow-hidden  ${
          darkMode
            ? "shadow-white bg-[#00a3f5]"
            : "shadow-black bg-[#2d4a53] "
        }`}
      >
        {/* Image Inside */}
        <img
          src={collably} // Replace with your image import
          alt="Project Preview"
          className="w-[80%] object-cover rounded-lg shadow-black shadow-xl  transition-transform duration-300 hover:-rotate-5 translate-y-5 md:translate-y-1 scale-123"
        />
      </div>
    </div>

    {/* Right Side - Description */}
    <div className="lg:flex-1 flex flex-col justify-center items-start px-2 md:px-10">
      <h1
        className={`text-5xl averia-serif-libre-bold ${
          darkMode ? "text-[#00a3f5]" : "text-[#132E35]"
        }`}
      >
        Collably
      </h1>
      <div className="text-md averia-serif-libre-regular text-inherit mt-5">
        <ul className="list-none space-y-3">
          <li className="flex items-center gap-2">
            <i className="fa-solid fa-code text-[#132E35]"></i>
            Built a brand-influencer collaboration platform with real-time user onboarding and profile uploads.
          </li>
          <li className="flex items-center gap-2">
            <i className="fa-solid fa-bolt text-yellow-500"></i>
            Features include OTP verification, JWT auth, Tinder-style interest/ignore matching, and dynamic UI animations.
          </li>
          <li className="flex items-center gap-2">
            <i className="fa-solid fa-microchip text-green-500"></i>
            Tech Stack: React.js, Node.js, Express, MongoDB, Tailwind, Framer Motion, bcrypt, JWT, Brevo, Multer, Cloudinary.
          </li>
        </ul>
      </div>
      <Button
        text="Github &rarr;"
        link="https://github.com/manavv-13/Collably" // Replace with actual link
      />
    </div>
  </div>
)}


        {/* Project 2 */}
        {currentProjectIndex === 1 && (
          <div
            className={`lg:w-4/5 flex rounded-lg py-4 flex-wrap ${
              darkMode ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <button
              onClick={prevProject}
              className="flex cursor-pointer gap-3 absolute left-4 bottom-0 transform -translate-y-1/2 text-[#132E35] p-2 rounded-full"
            >
              <h1
                className={`relative text-xl averia-serif-libre-bold transition-all duration-300 group text-left overflow-hidden
                ${darkMode ? "text-[#00a3f5]" : "text-[#132E35]"}`}
              >
                <span className="relative z-10">← Prev</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-500 group-hover:w-full"></span>
              </h1>
            </button>
            <button
              onClick={nextProject}
              className="cursor-pointer absolute right-4 bottom-0 transform -translate-y-1/2 text-[#132E35] p-2 rounded-full"
            >
              <h1
                className={`relative text-xl averia-serif-libre-bold transition-all duration-300 group text-left overflow-hidden
    ${darkMode ? "text-[#00a3f5]" : "text-[#132E35]"}`}
              >
                <span className="relative z-10">Next &rarr;</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-500 group-hover:w-full"></span>
              </h1>
            </button>
            {/* Left Side - Image */}
            <div className="lg:flex-2 relative flex items-center justify-center my-5">
              {/*Image Div */}
              <div
                className={`h-full w-full rounded-2xl shadow-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:-translate-x-1 relative flex items-end justify-center overflow-hidden  ${
                  darkMode
                    ? "shadow-white bg-[#00a3f5]"
                    : "shadow-black bg-[#2d4a53] "
                }`}
              >
                {/* Image Inside */}
                <img
                  src={sharpify} // Replace with your image import
                  alt="Project Preview"
                  className="w-[80%] object-cover rounded-lg shadow-black shadow-xl  transition-transform duration-300 hover:-rotate-5 translate-y-5 md:translate-y-0 scale-123"
                />
              </div>
            </div>

            {/* Right Side - Description */}
            <div className="lg:flex-1 flex flex-col justify-center items-start px-2 md:px-10">
              <h1
                className={`text-5xl averia-serif-libre-bold ${
                  darkMode ? "text-[#00a3f5]" : "text-[#132E35]"
                }`}
              >
                Sharpify
              </h1>
              <div className="text-md averia-serif-libre-regular text-inherit mt-5">
                <ul className="list-none space-y-3">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-code text-[#132E35]"></i>
                    Developed an AI-powered image processing tool using deep
                    learning models (CNNs, CycleGANs).
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-bolt text-yellow-500"></i>
                    Designed a full-stack solution with a responsive UI for
                    seamless image deblurring.
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-microchip text-green-500"></i>
                    Tech Stack: Python, PyTorch, OpenCV, Node.js, Express.js,
                    MongoDB, HTML, CSS, Bootstrap.
                  </li>
                </ul>
              </div>
              <Button
                text="Github &rarr;"
                link="https://github.com/manavv-13/Sharpify"
              />
            </div>
          </div>
        )}

        {/* Project 3*/}
        {currentProjectIndex === 2 && (
          <div
            className={`lg:w-4/5 flex rounded-lg py-4 flex-wrap ${
              darkMode ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <button
              onClick={prevProject}
              className="flex cursor-pointer gap-3 absolute left-4 bottom-0 transform -translate-y-1/2 text-[#132E35] p-2 rounded-full"
            >
              <h1
                className={`relative text-xl averia-serif-libre-bold transition-all duration-300 group text-left overflow-hidden
                ${darkMode ? "text-[#00a3f5]" : "text-[#132E35]"}`}
              >
                <span className="relative z-10">← Prev</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-500 group-hover:w-full"></span>
              </h1>
            </button>
            <button
              onClick={nextProject}
              className="cursor-pointer absolute right-4 bottom-0 transform -translate-y-1/2 text-[#132E35] p-2 rounded-full"
            >
              <h1
                className={`relative text-xl averia-serif-libre-bold transition-all duration-300 group text-left overflow-hidden
                ${darkMode ? "text-[#00a3f5]" : "text-[#132E35]"}`}
              >
                <span className="relative z-10">Next &rarr;</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-500 group-hover:w-full"></span>
              </h1>
            </button>
            <div className="lg:flex-2 relative flex items-center justify-center my-5">
              <div
                className={`h-full w-full rounded-2xl shadow-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:-translate-x-1 relative flex items-end justify-center overflow-hidden  ${
                  darkMode
                    ? "shadow-white bg-[#00a3f5]"
                    : "shadow-black bg-[#2d4a53] "
                }`}
              >
                {/* Image Inside */}
                <img
                  src={wanderLust} // Replace with your image import
                  alt="Project Preview"
                  className="w-[80%] object-cover rounded-lg shadow-black shadow-xl  transition-transform duration-300 hover:-rotate-5 translate-y-5 md:translate-y-1 scale-120"
                />
              </div>
            </div>

            <div className="lg:flex-1 flex flex-col justify-center items-start px-2 md:px-10">
              <h1
                className={`text-5xl averia-serif-libre-bold ${
                  darkMode ? "text-[#00a3f5]" : "text-[#132E35]"
                }`}
              >
                WanderLust
              </h1>
              <div className="text-md averia-serif-libre-regular text-inherit mt-5">
                <ul className="list-none space-y-3">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-code text-[#132E35]"></i>
                    Developed a secure web app for managing Airbnb listings
                    (add, edit, delete).
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-bolt text-yellow-500"></i>
                    Added an interactive map to display locations and enabled
                    authenticated users to submit reviews for listings.
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-microchip text-green-500"></i>
                    Tech Stack : HTML, CSS, JavaScript, Bootstrap, Node.js,
                    Express, MongoDB.
                  </li>
                </ul>
              </div>
              <div className="flex justify-between items-center w-full">
                <Button
                  text="Github &rarr;"
                  link="https://github.com/manavv-13/WanderLust"
                />
                <Button
                  text="Live Link &rarr;"
                  link="https://wanderlust-icwq.onrender.com/listings"
                />
              </div>
            </div>
          </div>
        )}

        {/* Project 4 */}
        {currentProjectIndex === 3 && (
          <div
            className={`lg:w-4/5 flex rounded-lg py-4 flex-wrap ${
              darkMode ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <button
              onClick={prevProject}
              className="flex cursor-pointer gap-3 absolute left-4 bottom-0 transform -translate-y-1/2 text-[#132E35] p-2 rounded-full"
            >
              <h1
                className={`relative text-xl averia-serif-libre-bold transition-all duration-300 group text-left overflow-hidden
                ${darkMode ? "text-[#00a3f5]" : "text-[#132E35]"}`}
              >
                <span className="relative z-10">← Prev</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-500 group-hover:w-full"></span>
              </h1>
            </button>
            <button
              onClick={nextProject}
              className="cursor-pointer absolute right-4 bottom-0 transform -translate-y-1/2 text-[#132E35] p-2 rounded-full"
            >
              <h1
                className={`relative text-xl averia-serif-libre-bold transition-all duration-300 group text-left overflow-hidden
                ${darkMode ? "text-[#00a3f5]" : "text-[#132E35]"}`}
              >
                <span className="relative z-10">Next &rarr;</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-500 group-hover:w-full"></span>
              </h1>
            </button>
            <div className="lg:flex-2 relative flex items-center justify-center my-5">
              <div
                className={`h-full w-full rounded-2xl shadow-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:-translate-x-1 relative flex items-end justify-center overflow-hidden  ${
                  darkMode
                    ? "shadow-white bg-[#00a3f5]"
                    : "shadow-black bg-[#2d4a53] "
                }`}
              >
                {/* Image Inside */}
                <img
                  src={newsBird} // Replace with your image import
                  alt="Project Preview"
                  className="w-[80%] object-cover rounded-lg shadow-black shadow-xl  transition-transform duration-300 hover:-rotate-5 translate-y-5 md:translate-y-1 scale-120"
                />
              </div>
            </div>

            <div className="lg:flex-1 flex flex-col justify-center items-start px-2 md:px-10">
              <h1
                className={`text-5xl averia-serif-libre-bold ${
                  darkMode ? "text-[#00a3f5]" : "text-[#132E35]"
                }`}
              >
                NewsBird
              </h1>
              <div className="text-md averia-serif-libre-regular text-inherit mt-5">
                <ul className="list-none space-y-3">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-code text-[#132E35]"></i>
                    Developed a dynamic news app that fetches real-time news
                    from NewsAPI, featuring category-based filtering,
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-bolt text-yellow-500"></i>
                    Added infinite scrolling, a top-loading bar, and seamless
                    navigation using React Router.
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-microchip text-green-500"></i>
                    Tech Stack: React, Vite, React Hooks, React Router, NewsAPI,
                    CSS, Bootstrap.
                  </li>
                </ul>
              </div>
              <Button
                text="Github &rarr;"
                link="https://github.com/manavv-13/NewsBird"
              />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default Project;
