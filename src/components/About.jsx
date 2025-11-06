import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="xs:w-[250px] w-full"
    options={{ max: 45, scale: 1, speed: 450 }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.4, 0.75)}
      className="w-full p-[1px] rounded-[20px] shadow-card bg-gradient-to-r from-green-400 to-pink-500"
    >
      <div className="bg-tertiary rounded-[20px] py-8 px-10 min-h-[280px] flex flex-col items-center justify-center text-center">
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain mb-3"
        />
        <h3 className="text-white text-[20px] font-bold">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.15, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a passionate full-stack developer specializing in TypeScript,
        JavaScript, and modern frameworks like React, Node.js, and Three.js.
        I enjoy building clean, scalable, and performant digital experiences.
        I love collaborating with teams and clients to bring creative ideas to
        life and transform real-world problems into elegant solutions.
      </motion.p>

      <div className="mt-16 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
