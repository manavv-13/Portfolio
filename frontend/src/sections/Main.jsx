import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";
import myImage from "../assets/ProfilePicture.svg";
import Button from "../components/Button";
import ThemeContext from "../context/themeContext";

function Main() {
  const { darkMode } = useContext(ThemeContext);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <>
      <div
        ref={ref}
        className={`container mx-auto my-5 flex justify-evenly items-center w-full min-h-[calc(100vh-80px)] flex-wrap transition-all duration-300 ${darkMode ? "bg-black" : "bg-white"}`}
      >
        <motion.img
          className="h-78 w-78 mt-2 mx-2 flex-1"
          src={myImage}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        <motion.div
          className="flex flex-col justify-center items-center gap-6 mx-2 my-4 flex-1 items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className={`text-5xl averia-serif-libre-bold transition-all duration-300 ${darkMode ? "text-[#29F500]" : "text-[#004AF5]"}`}>
            {inView && (
              <Typewriter words={["G'day, I am Manav, a"]} typeSpeed={70} />
            )}
            <br />
            <span className="text-[#B2B500]">
              {inView && <Typewriter words={["Full Stack"]} typeSpeed={70} />}
            </span>{" "}
            Developer
          </h2>
          <p className={`text-3xl averia-serif-libre-regular transition-all duration-300 ${darkMode ? "text-white" : "text-black"}`}>
            {inView && (
              <Typewriter words={["I help founders turn ideas into seamless"]} typeSpeed={50} />
            )}{" "}
            <span className={`text-left text-4xl caveat-bold transition-all duration-300 ${darkMode ? "text-white" : "text-black"}`}>
              {inView && (
                <Typewriter words={["digital experiences"]} typeSpeed={120} />
              )}
            </span>
          </p>
          <div className="flex justify-between items-center gap-10">
            <Button text="Let's Connect →" section="contact" />
            <Button text="My Resume →" download="/ManavNigam_CV.pdf" />
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Main;
