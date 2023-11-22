import React from 'react'
import  {Tilt } from 'react-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index,title,icon,link}) => {
  return (
<Tilt className='xs:w-[250px] w-full'>
    <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='w-full green-pink-gradient light: border-1 purple-100 p-[1px] rounded-[20px] shadow-card'
    >
       <a
       href={link}
       target="_blank" 
       rel="noopener noreferrer"
       >
        <div 
        options={{
          max: 85,
          scale: 0.7,
          speed:300
        }}
        className='dark:bg-tertiary light: bg-purple-200 py-5 rounded-[20px] min-h-[180px] px-12 flex flex-col justify-evenly items-center'
        >
         
          {/* icons for cards */}
            <img src={icon} alt='Daniil Speranskii Social Mdeia' className='w-16 h-16 object-contain' loading='lazy' />
            <h3 className='dark:text-white text-[20px] font-bold text-center light: text-midnight-100'>{title}</h3>
        </div>
        </a>
    </motion.div>
</Tilt>
  )
}


const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} dark:text-white light: text-midnight-100`} >Introduction</p>
      <h2 className={`${styles.sectionHeadText} dark:text-white light: text-midnight-100`} >Overview</h2>
    </motion.div>

    <motion.p 
    variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 dark:text-secondary light: text-midnight-400 text-[17px] max-w-3xl leading-[30px]'
    >
My journey into the world of web development began with a fascination for the endless possibilities that the digital realm offers. I've spent countless hours learning the ins and outs of HTML, CSS, JavaScript, React, Next.js,MongoDB and more.
<br/>
I thrive on the thrill of solving complex coding puzzles and crafting seamless user experiences. Whether it's building responsive and eye-catching front-end designs or developing robust back-end systems, I'm dedicated to delivering quality results. 
    </motion.p>
    <br />
    <motion.p 
    variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 dark:text-white light: text-midnight-400 sm:text-[22px] text-[18px] font-semibold uppercase tracking-wider'
    >
      Lets Connect:
      </motion.p>
    <div className='mt-5 flex flex-wrap gap-10'>
      {services.map((service,index) => (
        <ServiceCard key={service.title} index={index}{...service} />
      ))}

    </div>
    </>
  )
}

export default SectionWrapper(About, "about")