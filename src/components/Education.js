import React, { useRef } from 'react'
import { motion,useScroll } from 'framer-motion'
import Liicon from './Liicon'

const Details=({type, time, place, info})=>{
    const ref = useRef(null)
return(
   <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] sm: mx-auto flex flex-col items-center justify-between'>
   <Liicon reference={ref}/>
     <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
        <h3 className=' capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>
        <span className=' capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
            {time} | {place}
        </span>
        <p className='font-medium w-full md:text-sm'>
            {info}
        </p>
        </motion.div>
   </li>
)
}

const Education = () => {
    const ref=useRef(null)
    const {scrollYProgress} = useScroll({target:ref,offset:["start end","center start"]})
  return (
   <div className='my-64'>
    <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl sm:text-4xl md:mb-16'>Education</h2>
    <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
    <motion.div style={{scaleY:scrollYProgress}} className=' absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]'/>
 <ul className='w-full flex flex-col items-center justify-between ml-4 xs:ml-2 '>
    <Details type="Bachelor's in Computer Application" 
time="2019-2022" place="University Of Allahabad (UoA)"
info="Relevant course included database management systems, operating systems, software engineering, web technology and languages such as C, C++, HTML, Java etc"
 />
  <Details type="Higher Secondary Education (class-12th)" 
time="2018-2019" place="Vishnu Bhagwan Public School and College"
info="Relevant course included computer  language like HTML, C++ and  Physics, Chemistry, Maths etc"
 /> 

<Details type="Secondary Education (class-10th)" 
time="2016-2017" place="Vishnu Bhagwan Public School and College"
info="Relevant course included Physics, Chemistry, Maths, Hindi, Social Science, Computer science and Arts"
 /> 
 <Details type="Online Coursework" 
time="2019-2022" place="Youtube and Udemy"
info="Completed coursework in  topics such as MERN Stack, Nextjs, and TailwindCSS."
 /> 
 </ul>
    </div>
   </div>
  )
}

export default Education