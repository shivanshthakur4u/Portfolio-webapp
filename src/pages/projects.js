import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const FramerImage =motion(Image);


const FeaturedProject=({type, title, summary, img, link, github})=>{
   return(
      <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 relative rounded-br-2xl'>
      <div className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl"/>
               
            
          <Link className='w-1/2 cursor-pointer overflow-hidden rounded-lg' href={link} target='_blank'>
          <FramerImage src={img} alt={title} priority
              sizes="(max-width:768px) 100vw, (max-width:1200px)50vw,50vw" className="w-full h-auto" whileHover={{scale:1.05}} transition={{duration:0.2}}/>
          </Link>

          <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
            <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
            <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
          </Link>
          <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
          <div className='mt-2 flex items-center'>

          <Link href={github} target='_blank' className='w-10'><GithubIcon/></Link>
          <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light px-6 p-2 font-semibold dark:bg-light dark:text-dark'>Visit Project</Link>
          </div>
          </div>
      </article>
   )
}

const Project =({title, type, link  ,img, github})=>{
   return(<article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light p-6 relative'>
   <div className=" absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl"/>
         <Link className='w-full cursor-pointer overflow-hidden rounded-lg' href={link} target='_blank'>
          <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{scale:1.05}} transition={{duration:0.2}}/>
          </Link>

          <div className='w-full flex flex-col items-start justify-between mt-4'>
            <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
            <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
          </Link>
         
          <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target='_blank' className='text-lg font-semibold underline'>Visit</Link>
          <Link href={github} target='_blank' className='w-8'><GithubIcon/></Link>
         
          </div>
          </div>
   </article>)
}

const projects = () => {

  return (
   <>
    <Head>
       <title>Saurabh | Projects Page</title>
       <meta name='description' content='web developer, mern stack projects , saurabh, Projects page' />
    </Head>
    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
     <Layout className='pt-16'>
        <AnimatedText text="Turning Imaginations Into Reality!" className='mb-16' />
        <div className='grid grid-cols-12 gap-24 gap-y-32'>
        <div className='col-span-12'>
          <FeaturedProject type={"Featured Project"} link="www.https://google.com" title="Title1" summary="Summary" github="https://github.com"
          />
        </div>

          <div className='col-span-6'>
          <Project type={"Project-1"} link="www.https://google.com" title="Title1" github="https://github.com"/>
          </div>
          <div className='col-span-6'>
          <Project type={"Project-2"} link="www.https://google.com" title="Title1" github="https://github.com"/>
          </div>

          <div className='col-span-12'>
          <FeaturedProject type={"Featured Project"} link="www.https://google.com" title="Title1" summary="Summary" github="https://github.com"
          />
        </div>

        <div className='col-span-6'>
        <Project type={"Project-3"} link="www.https://google.com" title="Title1" github="https://github.com"/>
          </div>
          <div className='col-span-6'>
          <Project type={"Project-4"} link="www.https://google.com" title="Title1" github="https://github.com"/>
          </div>
        </div>
     </Layout>
    </main>
   </>
  )
}

export default projects