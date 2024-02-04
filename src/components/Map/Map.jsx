import React from "react";
import "./Map.css";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { fadeIn } from "../../utils/animation";
import temp from "./location2.json";
const Map = () => {
  return (
    <div className="m-wrapper">
      <div className="m-container">
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="m-left"
        >
          <motion.span className="tag">Our Targeted Ports</motion.span>
          <motion.span className="text">
          Mafkin Robotics is poised to revolutionize ship cleaning in India&apos;s busiest ports, starting with Jawaharlal Nehru Port Trust-JNPT, Mumbai Port, Chennai Port, and Paradip Port. Our autonomous and semi-autonomous robots are the future of ship cleaning, offering unparalleled efficiency, safety, and sustainability.
          </motion.span>
          <Lottie animationData={temp} className="lottie" />
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="m-right"
        >
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1DFTRF0-fs3CiHNYcbUX3IY4zHD8hHgw&ehbc=2E312F&noprof=1"
            className="map"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Map;
