import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

import Transitioneffects from "@/components/Transitioneffects";

const FramerImage = motion(Image);

const MoveImg = ({ title, img, link }) => {

    const x =useMotionValue(0)
    const y =useMotionValue(0)
    const imageRef =useRef(null)

    function handleMouse (event){
        imageRef.current.style.display="inline-block";
        x.set(event.pageX)
        y.set(-10)
    }

    function handleMouseLeave (event){
        imageRef.current.style.display="none";
       x.set(0)
       y.set(0)
    }
  return (
      <Link href={link} target={"_blank"} onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
        <h2 className=" capitalize hover:underline font-semibold text-xl">
          {title}
        </h2>
        <FramerImage style={{x:x, y:y}} initial={{opacity:0}} whileInView={{opacity:1, transition:{duration:0.2}}} ref={imageRef} alt={title} src={img} className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden "/>
      </Link>
    
  );
};

const Article = ({ title, date, img, link }) => {
  return (
    <motion.li initial={{y:200}} whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}} viewport={{once:true}} className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:border-light dark:text-light sm:flex-col">
      <MoveImg title={title} img={img} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">{date}</span>
    </motion.li>
  );
};

const Featured = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative  dark:bg-dark dark:border-light">
      <div className=" absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImage
        priority
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className=" capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">{time}</span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Saurabh | Articles Page</title>
        <meta
          name="description"
          content="Saurabh Singh, articles, web development, mernstack"
        />
      </Head>
      <Transitioneffects/>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Sharing is Caring!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8  md:grid-cols-1 md:gap-y-16">
            <Featured
              title={
                "Creating a Loading Effect with HTML and CSS: A Step-by-Step Explanation"
              }
              img={"https://snappost.tech/uploads/images/202305/image_750x_6472f29b57812.jpg"}

              summary={"In this article, we will explore an HTML and CSS code that creates a loading effect. The loading effect consists of animated cells that ripple with different colors. We'll break down the HTML and CSS code line by line, explaining the purpose and functionality of each section."
              }
              time={"10 min read"}
              link={"https://snappost.tech/creating-a-loading-effect-with-html-and-css-a-step-by-step-explanation"}
            />

            <Featured
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              summary={
                "Build A Custom Pagination Component In Reactjs From Scratch Learn how to build a custom pagination component in ReactJS from scratch.Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              }
              time={"9 min read"}
              link={"/"}
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date={"22-04-2023"}
              img={""}
              link="/"
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date={"22-04-2023"}
              img={""}
              link="/"
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date={"22-04-2023"}
              img={""}
              link="/"
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date={"22-04-2023"}
              img={""}
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
