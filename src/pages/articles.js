import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import article2 from "../../public/images/articles/smooth scrolling in reactjs.png";

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
        <FramerImage style={{x:x, y:y}} initial={{opacity:0}} whileInView={{opacity:1, transition:{duration:0.2}}} ref={imageRef} alt={title} src={img} className="z-10 w-96 h-auto hidden absolute rounded-lg "/>
      </Link>
    
  );
};

const Article = ({ title, date, img, link }) => {
  return (
    <motion.li initial={{y:200}} whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}} viewport={{once:true}} className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:border-light dark:text-light">
      <MoveImg title={title} img={img} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4">{date}</span>
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
      <Link href={""} target="_blank">
        <h2 className=" capitalize text-2xl font-bold my-2 mt-4 hover:underline">
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
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Sharing is Caring!" className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
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
              img={article2}
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
