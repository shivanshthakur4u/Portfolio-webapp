import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{x:0, y:0}}
      whileInView={{x:x, y:y}}
      transition={{duration:1.5}}
      viewport={{once:true}}
    >
      {name}
    </motion.div>
  );
};
const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="React.js" x="-2vw" y="12vw" />
        <Skill name="Next.js" x="-27vw" y="-10vw" />
        <Skill name="MongoDB" x="2vw" y="-19vw" />
        <Skill name="Node.js" x="-19vw" y="16vw" />
        <Skill name="Express.js" x="20vw" y="-10vw" />
        <Skill name="Tailwind CSS" x="-30vw" y="10vw" />
        <Skill name="React-Native" x="13vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
