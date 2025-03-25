import React, { useState } from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import sharpify from "../assets/sharpify.png";
import wanderLust from "../assets/wanderLust.png";
import newsBird from "../assets/newsBird.png";
import ThemeContext from "../context/themeContext";

function Project() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const { darkMode } = React.useContext(ThemeContext);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 2 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? 2 : prevIndex - 1
    );
  };

  return (
    <div className={`container mx-auto my-5 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <h2 className={`text-5xl averia-serif-libre-bold mt-10 ${darkMode ? 'text-[#29F500]' : 'text-[#004AF5]'}`}>
        <span className="text-[#B2B500]">Projects</span> that I've worked on!
      </h2>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`relative mt-10 flex justify-center items-center overflow-x-hidden`}
      >
        {/* Project 1 */}
        {currentProjectIndex === 0 && (
          <div className={`lg:w-4/5 flex rounded-lg py-4 flex-wrap ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
            {/* Left Side - Image */}
            <div className="lg:flex-2 relative flex items-center justify-center my-5">
              {/*Image Div */}
              <div className={`h-full w-full rounded-2xl shadow-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:-translate-x-1 relative flex items-end justify-center overflow-hidden  ${darkMode ? 'shadow-white bg-[#62FF43]' : 'shadow-black bg-[#87ABFF] '}`}>
                {/* Image Inside */}
                <img
                  src={sharpify} // Replace with your image import
                  alt="Project Preview"
                  className="w-[80%] object-cover rounded-lg shadow-black shadow-xl  transition-transform duration-300 hover:-rotate-5 translate-y-5 md:translate-y-0 scale-123"
                />
              </div>

              {/* Navigation Buttons Inside Image */}
              <button
                onClick={prevProject}
                className="cursor-pointer absolute left-2 top-1/2 transform -translate-y-1/2 text-[#004AF5] p-2 rounded-full"
              >
                <i className="text-2xl fa-solid fa-chevron-left transition-all duration-300 hover:text-3xl"></i>
              </button>
              <button
                onClick={nextProject}
                className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 text-[#004AF5] p-2 rounded-full"
              >
                <i className="text-2xl fa-solid fa-chevron-right transition-all duration-300 hover:text-3xl"></i>
              </button>
            </div>

            {/* Right Side - Description */}
            <div className="lg:flex-1 flex flex-col justify-center items-start px-2 md:px-10">
              <h1 className={`text-5xl averia-serif-libre-bold ${darkMode?'text-[#29F500]':'text-[#004AF5]'}`}>
                Sharp<span className={`text-[#B2B500]`}>ify</span>
              </h1>
              <div className="text-md averia-serif-libre-regular text-inherit my-5">
                <ul className="list-none space-y-3">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-code text-[#004AF5]"></i>
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
              <Button text="Github &rarr;" link="https://github.com/manavv-13/Sharpify" />
            </div>
          </div>
        )}

        {/* Project 2 */}
        {currentProjectIndex === 1 && (
          <div className={`lg:w-4/5 flex rounded-lg py-4 flex-wrap ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>

            <div className="lg:flex-2 relative flex items-center justify-center my-5">

            <div className={`h-full w-full rounded-2xl shadow-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:-translate-x-1 relative flex items-end justify-center overflow-hidden  ${darkMode ? 'shadow-white bg-[#62FF43]' : 'shadow-black bg-[#87ABFF] '}`}>
                {/* Image Inside */}
                <img
                  src={wanderLust} // Replace with your image import
                  alt="Project Preview"
                  className="w-[80%] object-cover rounded-lg shadow-black shadow-xl  transition-transform duration-300 hover:-rotate-5 translate-y-5 md:translate-y-1 scale-120"
                />
              </div>
              <button
                onClick={prevProject}
                className="cursor-pointer absolute left-2 top-1/2 transform -translate-y-1/2 text-[#004AF5] p-2 rounded-full"
              >
                <i className="text-2xl fa-solid fa-chevron-left transition-all duration-300 hover:text-3xl"></i>
              </button>
              <button
                onClick={nextProject}
                className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 text-[#004AF5] p-2 rounded-full"
              >
                <i className="text-2xl fa-solid fa-chevron-right transition-all duration-300 hover:text-3xl"></i>
              </button>
            </div>

            <div className="lg:flex-1 flex flex-col justify-center items-start px-2 md:px-10">
              <h1 className={`text-5xl averia-serif-libre-bold ${darkMode?'text-[#29F500]':'text-[#004AF5]'}`}>
                Wander<span className="text-[#B2B500]">Lust</span>
              </h1>
              <div className="text-md averia-serif-libre-regular text-inherit my-5">
                <ul className="list-none space-y-3">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-code text-[#004AF5]"></i>
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
                <Button text="Github &rarr;" link="https://github.com/manavv-13/WanderLust"/>
                <Button text="Live Link &rarr;" link="https://wanderlust-icwq.onrender.com/listings" />
              </div>
            </div>
          </div>
        )}

        {/* Project 3 */}
        {currentProjectIndex === 2 && (
          <div className={`lg:w-4/5 flex rounded-lg py-4 flex-wrap ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <div className="lg:flex-2 relative flex items-center justify-center my-5">
            <div className={`h-full w-full rounded-2xl shadow-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:-translate-x-1 relative flex items-end justify-center overflow-hidden  ${darkMode ? 'shadow-white bg-[#62FF43]' : 'shadow-black bg-[#87ABFF] '}`}>
                {/* Image Inside */}
                <img
                  src={newsBird} // Replace with your image import
                  alt="Project Preview"
                  className="w-[80%] object-cover rounded-lg shadow-black shadow-xl  transition-transform duration-300 hover:-rotate-5 translate-y-5 md:translate-y-1 scale-120"
                />
              </div>
            <button
                onClick={prevProject}
                className="cursor-pointer absolute left-2 top-1/2 transform -translate-y-1/2 text-[#004AF5] p-2 rounded-full"
              >
                <i className="text-2xl fa-solid fa-chevron-left transition-all duration-300 hover:text-3xl"></i>
              </button>
              <button
                onClick={nextProject}
                className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 text-[#004AF5] p-2 rounded-full"
              >
                <i className="text-2xl fa-solid fa-chevron-right transition-all duration-300 hover:text-3xl"></i>
              </button>
            </div>

            <div className="lg:flex-1 flex flex-col justify-center items-start px-2 md:px-10">
              <h1 className={`text-5xl averia-serif-libre-bold ${darkMode?'text-[#29F500]':'text-[#004AF5]'}`}>
                News<span className="text-[#B2B500]">Bird</span>
              </h1>
              <div className="text-md averia-serif-libre-regular text-inherit my-5">
                <ul className="list-none space-y-3">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-code text-[#004AF5]"></i>
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
              <Button text="Github &rarr;" link="https://github.com/manavv-13/NewsBird" />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default Project;
