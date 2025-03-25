import { React, useState, useRef, useContext } from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LoadingBar from "react-top-loading-bar";
import ThemeContext from "../context/themeContext";

function Contact() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const { darkMode } = useContext(ThemeContext);

  // State for form data
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const loadingBarRef = useRef(null); // Reference for loading bar

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    loadingBarRef.current.continuousStart(); // Start loading bar

    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (response.ok) {
        loadingBarRef.current.complete(); // Complete the loading bar
        setFormData({ email: "", message: "" }); // Clear the input fields
      }
    } catch (error) {
      console.error("Error sending email:", error);
      loadingBarRef.current.complete(); // Complete the loading bar even if error occurs
    }

    setLoading(false);
  };

  return (
    <>
      {/* Loading Bar */}
      <LoadingBar color={darkMode ? "#29F500" : "#B2B500"} ref={loadingBarRef} />

      <div className={`container mx-auto my-5 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
        <h2 className={`mx-2 my-3 text-5xl averia-serif-libre-bold ${darkMode ? "text-[#29F500]" : "text-[#004AF5]"}`}>
          Wanna Connect? <span className={darkMode ? "text-[#B2B500]" : "text-[#B2B500]"}>Contact Here!</span>
        </h2>

        <motion.form
          onSubmit={handleSubmit}
          ref={ref}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`mx-2 flex flex-col gap-4 p-6 rounded-xl ${darkMode ? "bg-[#333] shadow-white shadow-lg text-white" : "bg-[#87ABFF] shadow-black shadow-lg text-black"}`}
        >
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-lg averia-serif-libre-bold"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              className={`p-2 rounded-md focus:outline-none focus:border-2 ${darkMode ? "bg-[#222] text-white focus:border-[#29F500]" : "bg-white text-black focus:border-blue-500"}`}
              placeholder="Enter your email"
              required
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-lg averia-serif-libre-bold"
            >
              Enter your message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              rows="4"
              className={`p-2 rounded-md focus:outline-none focus:border-2 ${darkMode ? "bg-[#222] text-white focus:border-[#29F500] placeholder-gray-400" : "bg-white text-black focus:border-blue-500 placeholder-gray-600"}`}
              placeholder="Write your message here..."
              required
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            className={`cursor-pointer text-xl averia-serif-libre-regular shadow-md shadow-black transition-all duration-300 hover:shadow-lg active:shadow-sm p-3 rounded-2xl bg-[#B2B500]  ${darkMode ? "text-black" : "text-[#004AF5]"}`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send →"}
          </button>
        </motion.form>
      </div>
    </>
  );
}

export default Contact;
