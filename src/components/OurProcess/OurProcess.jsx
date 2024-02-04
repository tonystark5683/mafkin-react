import React from "react";
import "./OurProcess.css";
import { motion } from "framer-motion";
import { tagVaraints, titleVaraints, desVaraints } from "../../utils/animation";
const OurProcess = () => {
  return (
    <div className="op-wrapper">
      <div className="op-container">
        <div className="op-left">
          <motion.span
            variants={tagVaraints}
            initial="offscreen"
            whileInView={"onscreen"}
            className="tag"
          >
            Our Services
          </motion.span>
          <motion.span
            variants={desVaraints}
            initial="offscreen"
            whileInView={"onscreen"}
            className="text"
          >
            You continue with your operations,
            <br />
            we handle our part.
          </motion.span>
        </div>
        <div className="op-right">
          <div className="o-qa">
            <input type="checkbox" id="o-collapsible-head-1" />
            <label for="o-collapsible-head-1">Autonomous Solution</label>
            <div className="o-collapsible-text-1">
              <p>
                GPS-guided cleaning for ships on the go. Our autonomous robots
                use GPS navigation to clean ship hulls automatically, without
                the need for human intervention. This makes them ideal for
                cleaning ships while they are underway, saving shipping
                companies time and money.
              </p>
            </div>
          </div>
          <div className="o-qa">
            <input type="checkbox" id="o-collapsible-head-2" />
            <label for="o-collapsible-head-2">Semi-autonomous Solution</label>
            <div className="o-collapsible-text-2">
              <p>
                Remotely controlled cleaning for hard-to-reach areas. Our
                semi-autonomous robots are remotely operated by skilled
                technicians, allowing them to clean hard-to-reach areas and
                complex hull geometries that would be difficult or impossible to
                clean with autonomous robots. This makes them ideal for cleaning
                ships with specialized hulls, such as oil tankers and chemical
                carriers.
              </p>
            </div>
          </div>
          <div className="o-qa">
            <input type="checkbox" id="o-collapsible-head-3" />
            <label for="o-collapsible-head-3">Dry- docking</label>
            <div className="o-collapsible-text-3">
              <p>
                Lifted and cleaned for a pristine hull. Our dry cleaning service
                uses a state-of-the-art lift system to raise ships out of the
                water so that their hulls can be cleaned and inspected. This is
                the most thorough and effective way to clean a ships hull, and
                it is ideal for ships that require a high level of cleanliness,
                such as passenger ships and cruise ships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
