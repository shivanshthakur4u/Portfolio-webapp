import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6  dark:text-dark dark:bg-light shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent  xs:text-dark xs:dark:text-light xs:font-bold "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};
const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight  lg:dark:bg-circularDarkLg lg:circularLightLg md:dark:bg-circularDarkMd md:bg-circularLightMd sm:dark:bg-circularDarkSm sm:bg-circularLightSm dark:bg-circularDark lh:h-[80vh] sm:h-[60vh] xs:h-[50vh]">
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 dark:bg-light dark:text-dark shadow-dark cursor-pointer  lg:p-6 md:p-4 xs:text-xs xs:p-2">
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
