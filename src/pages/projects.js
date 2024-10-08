import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Transitioneffects from "@/components/Transitioneffects";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Socialchat from "../../public/images/Projects/SocialChat.png";
import Travelmate from "../../public/images/Projects/travelmate.png";
import ResumeXpress from "../../public/images/Projects/ResumeXpress.png";
import BooksStore from "../../public/images/Projects/BooksStore.png";
const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]" />

      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        href={link}
        target="_blank"
      >
        <FramerImage
          src={img}
          alt={title}
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px)50vw, 33vw"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light px-6 p-2 font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, link, img, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light p-6 relative xs:p-4 ">
      <div className=" absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-[250px]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  const ProjectsData = [
    {
      id: 1,
      type: "Featured Project-1",
      link: "https://resume-xpress-frontend.vercel.app/",
      title: "ResumeXpress",
      summary:
        "ResumeXpress is a fully responsive web app in which user can select template theme and create ATS friendly resume just by adding the details with the feature of realtime preview. User can see, edit, delete the created Resumes. Frontend:Nextjs, Backend:Nodejs",
      github: "https://github.com/shivanshthakur4u/ResumeXpress-Frontend-",
      img: ResumeXpress,
    },
    {
      id: 2,
      type: "Project-1",
      img: BooksStore,
      link: "https://books-store-frontend-two.vercel.app/",
      title: "BookStore (MERN STACK)",
      github: "https://github.com/shivanshthakur4u/BooksStoreBackend",
    },
    {
      id: 3,
      type: "Project-2",
      img: Socialchat,
      link: "https://github.com/shivanshthakur4u/SocialChatApp",
      title: "SocialChatApp (Instagram clone)",
      github: "https://github.com/shivanshthakur4u/SocialChatApp",
    },
  ];
  return (
    <>
      <Head>
        <title>Saurabh | Projects Page</title>
        <meta
          name="description"
          content="web developer, mern stack projects , saurabh, Projects page"
        />
      </Head>
      <Transitioneffects />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Turning Ideas Into Reality!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {ProjectsData.map((project) =>
              project.type.startsWith("Featured") ? (
                <div className="col-span-12" key={project.id}>
                  <FeaturedProject
                    type={project.type}
                    link={project.link}
                    title={project.title}
                    summary={project.summary}
                    github={project.github}
                    img={project.img}
                  />
                </div>
              ) : (
                <div className="col-span-6 sm:col-span-12" key={project.id}>
                  <Project
                    type={project.type}
                    img={project.img}
                    link={project.link}
                    title={project.title}
                    github={project.github}
                  />
                </div>
              )
            )}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
