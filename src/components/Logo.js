import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  const [text, setText]= useState("SS")
  const [MouseHover, setMouseHover]= useState(false)

  const handleMouse=()=>{
    return (
      <>
        { setMouseHover(true)}
        {setText("Saurabh Singh")}
      </>
    )
  }
  const handleMouseLeave=()=>{
    return (
      <>
        {setText("SS")}
        {setMouseHover(false)}
      </>
    )
  }
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink onMouseOver={handleMouse} onMouseLeave={handleMouseLeave}
        href="/"
        className={`w-16 h-16 hover:w-[68px] hover:h-[68px] bg-dark text-light flex items-center justify-center rounded-full border border-solid border-transparent text-2xl font-bold dark:border-light ${MouseHover? "text-[7px] text-center align-middle ":"text-[20px]"}`}
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          
          transition: {duration:1, repeat:Infinity},
        }}
      >
       {text}
      </MotionLink>
    </div>
  );
};

export default Logo;
