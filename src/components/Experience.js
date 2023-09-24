import React, { useRef } from 'react'
import { motion,useScroll } from 'framer-motion'
import Liicon from './Liicon'

const Details=({position, company, companyLink, time, address, work})=>{
    const ref = useRef(null)
return(
   <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] sm:mx-auto flex flex-col items-center justify-between'>
   <Liicon reference={ref}/>
     <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
        <h3 className=' capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink} target='_blank' className='text-primary capitalize'>@{company}</a></h3>
        <span className=' capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
            {time} | {address}
        </span>
        <p className='font-medium w-full md:text-sm'>
            {work}
        </p>
        </motion.div>
   </li>
)
}

const Experience = () => {
    const ref=useRef(null)
    const {scrollYProgress} = useScroll({target:ref,offset:["start end","center start"]})
  return (
   <div className='my-64'>
    <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl sm:text-4xl md:mb-16'>Experience</h2>
    <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
    <motion.div style={{scaleY:scrollYProgress}} className=' absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]'/>
 <ul className='w-full flex flex-col items-center justify-between ml-4 xs:ml-2'>
    <Details time={"May 2023 - July 2023"}  address={"MIG 401, 11th Cross Road, Panampilly Nagar, Kochi, Kerala, India, 682036"} position={"ReactJS Developer Intern"}
  work={<ul>
  <li>Enhance, maintain and build frontend for applications,</li>
  <li>Maintain high-quality standards for the work undertaken and be,</li>
  <li>Responsible for the quality of deliverables,</li>
  <li>Follow a test-driven development approach and ensure that there is,</li>
  <li>Enough test automation and code coverage,</li>
  <li>Drive architectural changes on frontend architecture by profiling,</li>
  <li>Improving UX, and build with the design system.</li>
</ul>}
company={"TGH TECHNOLOGIES"}
companyLink={"https://www.tghtech.com/"}

/>
 </ul>

<br/> <br/>
 <ul className='w-full flex flex-col items-center justify-between ml-4'>
    <Details time={"August 2023 - Present"}  address={"MIG 401, 11th Cross Road, Panampilly Nagar, Kochi, Kerala, India, 682036"} position={"Frontend Developer"}
  work={<ul>
  <li>Enhance, maintain and build frontend for applications,</li>
  <li>Maintain high-quality standards for the work undertaken and be,</li>
  <li>Responsible for the quality of deliverables,</li>
  <li>Follow a test-driven development approach and ensure that there is,</li>
  <li>Enough test automation and code coverage,</li>
  <li>Drive architectural changes on frontend architecture by profiling,</li>
  <li>Improving UX, and build with the design system.</li>
</ul>}
company={"TGH TECHNOLOGIES"}
companyLink={"https://www.tghtech.com/"}

/>
 </ul>
    </div>
   </div>
  )
}

export default Experience