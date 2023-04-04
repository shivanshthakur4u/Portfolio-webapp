import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { use, useEffect, useRef } from "react";
import profilePic2 from "../../public/images/profile/profile3.png"; 
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";


const AnimatedNumbers =({value})=>{
    const ref=useRef(null);

    const motionValue =useMotionValue(0);
    const springValue = useSpring(motionValue,{duration:3000})
    const isInView = useInView(ref,{once:true});


    useEffect(()=>{
        if(isInView){
            motionValue.set(value)
        }
    },[isInView,value,motionValue])


    useEffect(()=>{
        springValue.on("change",(latest)=>{
            if(ref.current && latest.toFixed(0)<= value){
                ref.current.textContent=latest.toFixed(0)
            }
        })
    },[springValue,value])
    return<span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>Saurabh | About Page</title>
        <meta name="description" content="about us page saurabh singh" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Crafting digital experiences that bring your vision to life" className="mb-16"/>
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                About Me
              </h2>
              <p className="font-medium">
                Hi there, I&apos;m Saurabh Singh, a web developer and app developer
                who is passionate about creating beautiful and functional
                digital experiences that put users first. With over 1+ years of
                experience in the field, I have honed my expertise in delivering
                innovative solutions that bring my client&apos;s visions to
                life.
              </p>

              <p className="font-medium my-4">
                For me, design is not just about making things look pretty;
                it&apos;s about solving complex problems and creating intuitive,
                enjoyable experiences for users. Whether I&apos;m working on a
                website, mobile app, or other digital product, I bring a
                relentless commitment to design excellence and user-centered
                thinking to every project I take on.
              </p>
              <p className="font-medium">
                I take pride in staying up-to-date with the latest industry
                trends and technologies, and I use this knowledge to
                continuously improve my craft and push the boundaries of
                what&apos;s possible. If you&apos;re looking for a dedicated and
                professional web developer and app developer who can bring your
                digital vision to life, then look no further. Let&apos;s work
                together to create an exceptional digital experience for your
                users.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
                <div className=" absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark"/>
                <Image src={profilePic2} alt="saurabh" className="w-full h-auto rounded-2xl" />
                
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between">
                <div className="flex flex-col items-end justify-center">
                    <span className="inline-block text-7xl font-bold">
                       <AnimatedNumbers value={8} />+
                    </span>
                    <h2 className="text-xl font-medium capitalize text-dark/75">satisfied clients</h2>
                </div>

                <div className="flex flex-col items-end justify-center">
                    <span className="inline-block text-7xl font-bold">
                    <AnimatedNumbers value={10} />+
                    </span>
                    <h2 className="text-xl font-medium capitalize text-dark/75">projects completed</h2>
                </div>

                <div className="flex flex-col items-end justify-center">
                    <span className="inline-block text-7xl font-bold">
                    <AnimatedNumbers value={2} />+
                    </span>
                    <h2 className="text-xl font-medium capitalize text-dark/75">experience</h2>
                </div>
            </div>
          </div>
          <Skills/>
        </Layout>
      </main>
    </>
  );
};

export default about;
