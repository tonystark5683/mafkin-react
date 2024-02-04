import React from "react";
import "./Timeline.css";
import { fadeIn, tagVaraints } from "../../utils/animation";
import { motion } from "framer-motion";
const Timeline = () => {
  return (
    <section className="timeline-section">
      <motion.span
        className="m-heading"
        variants={tagVaraints}
        initial="offscreen"
        whileInView={"onscreen"}
      >
        <h2>Mafkin Milestones</h2>
      </motion.span>
      <div className="timeline-items">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">July 2023</div>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="timeline-content"
          >
            <h3>Foundation</h3>
            <p>
              Establishing the groundwork for Makfin Robotics in July 2023, with
              a vision to revolutionize the maritime industry through automated
              ship hull cleaning solutions.
            </p>
          </motion.div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">September 2023</div>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="timeline-content"
          >
            <h3>Government Grant Approval</h3>
            <p>
              Securing crucial government funding in September 2023 to
              accelerate the development of innovative technologies for
              fuel-efficient and effective ship maintenance within Makfin
              Robotics.
            </p>
          </motion.div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">January 2024</div>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="timeline-content"
          >
            <h3>Launch of First Product</h3>
            <p>
              Revealing Makfin Robotics&apos; inaugural product in January 2024,
              a pioneering solution simplifying and automating ship hull
              cleaning, signaling progress toward a greener and more efficient
              maritime sector.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
