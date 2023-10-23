import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'


const ProjectCard =({index, name , image, description, link,tags,source_code_link  })=>{
return (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt 
    options={{ max: 45 ,scale:1,speed:350}}
    className='bg-tertiary p-5 rounded-2xl sm:w-[350px] w-full'
    >
      {/* card div */}
      <div className='relative w-full h-[230px]'>
        {/* image of card work */}
        <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl'/>
            {/* text */}
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover' >
          {/* github link */}
          <div 
          onClick={()=> window.open(source_code_link, "_blank")}
          className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer' >
              <img 
              src={github}
              alt='github'
              className='w-1/2 h-1/2 object-contain'
                />
            </div>
                {/* Live project link */}
                {/* CHANGE ICON HERE */}
                <div 
          onClick={()=> window.open(source_code_link, "_blank")}
          className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer' >
              <img 
              src={github}
              alt='github'
              className='w-1/2 h-1/2 object-contain'
                />
            </div>
          </div>
      </div>

      {/* description */}
      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='text-secondary mt-2 text-[14px]'>{description}</p>
      </div>

      {/* tags */}
      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
)
}


const Works = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
    <p className={`${styles.sectionSubText}`} >My work...</p>
      <h2 className={`${styles.sectionHeadText}`} >Projects</h2>
    </motion.div>

    <div className='w-full flex '>
      <motion.p
      variants={fadeIn("", "", 0.2, 1)}
      className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        
The following projects serve as tangible demonstrations of my skills and experiences, offering real-world examples of my work. Each project is succinctly described and includes live demos, providing a testament to my proficiency in solving complex problems, adeptness with various technologies, and effective project management.
      

      </motion.p>
    </div>
      {/* wrapper for projects */}
    <div className='mt-20 flex flex-wrap gap-7'>
         {projects.map((project,index) => (
           <ProjectCard key={`project-${index}`} index={index} {...project} />
         ))}
    </div>
    </>
  )
}

export default SectionWrapper(Works, "")