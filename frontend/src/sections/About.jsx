import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ThemeContext from "../context/themeContext";

function About() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const { darkMode } = React.useContext(ThemeContext);

  return (
    <div className={`container mx-auto ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <h2 className={`mx-2 text-2xl averia-serif-libre-bold ${darkMode ? 'text-[#29F500]' : 'text-[#004AF5]'}`}>
        MORE <span className="text-[#B2B500]">ABOUT ME</span>
      </h2>
      <br />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-2 flex flex-col justify-center md:w-1/2"
      >
        <h2 className="text-4xl averia-serif-libre-regular">
          Hi there! {" "}
          <span className={`text-left text-5xl caveat-bold ${darkMode ? 'text-[#B2B500]' : 'text-inherit'}`}>
            I'm Manav
          </span>
        </h2>
        <br />
        <p className="text-xl averia-serif-libre-regular my-1">
          I'm Manav Nigam, a proactive full-stack developer passionate about
          creating dynamic web experiences. From frontend to backend, I thrive
          on solving complex problems with clean, efficient code. My expertise
          spans React.js, MongoDB, and Node.js, and I'm always eager to learn
          more.
          <br />
          <br />
          When I'm not coding, I'm exploring new ideas and staying curious.
          Life's about balance, and I love embracing every part of it.
          <br />
          <br />I believe in waking up each day eager to make a difference!
        </p>
      </motion.div>
    </div>
  );
}

export default About;
