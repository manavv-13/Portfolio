import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";
import myImage from "../assets/Profile.svg";
import Button from "../components/Button";
import ThemeContext from "../context/themeContext";
import darkModeBG from "../assets/darkMode.jpg";
import lightModeBG from "../assets/lightModeBG.jpg";

function Main() {
  const { darkMode } = useContext(ThemeContext);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <>
<div
  ref={ref}
  className="relative w-full min-h-[calc(100vh-80px)] pb-10 flex justify-evenly items-center flex-wrap transition-all duration-300"
  style={
    darkMode
      ? {
          backgroundImage: `url(${darkModeBG})`,
          backgroundSize: "110% auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }
      : {
          backgroundImage: `url(${lightModeBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
      }
  }
>

        <motion.img
          className="h-90 w-90 sm:h-100 sm:w-100 rounded-full mt-2 mx-2 mr-20"
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
          <h2 className={`text-5xl averia-serif-libre-bold transition-all duration-300 ${darkMode ? "text-[#00a3f5]" : "text-[#132E35]"}`}>
            {inView && (
              <Typewriter words={["Hi, I am Manav, a"]} typeSpeed={70} />
            )}
            <br />
            <span className={`${darkMode? "text-white":"text-[#2D4A53]"}`}>
              {inView && <Typewriter words={["Full Stack"]} typeSpeed={70} />}
            </span>{" "}
            Developer
          </h2>
          <p className={`text-3xl averia-serif-libre-regular transition-all duration-300 ${darkMode ? "text-white" : "text-black"}`}>
            {inView && (
              <Typewriter words={["From frontend polish to backend logic, I can code it all. Let's connect & build something impactful!"]} typeSpeed={40} />
            )}
          </p>
          <div className="flex justify-between items-center gap-10">
            <Button text="Let's Connect →" section="contact" />
            <Button text="My Resume →" download="/ManavNigamrResume.pdf" />
          </div>
        </motion.div>
        <div
className={`absolute bottom-0 left-0 w-full pointer-events-none z-10 
  h-10 sm:h-24 md:h-32 lg:h-40 
  ${
    darkMode
      ? "bg-gradient-to-b from-transparent to-black"
      : "bg-gradient-to-b from-transparent via-white/60 to-white"
  }`}
/>
      </div>
    </>
  );
}

export default Main;
