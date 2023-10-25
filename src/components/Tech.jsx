import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'

const Tech = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
    <p className={`${styles.sectionSubText} dark:text-white light: text-midnight-100`} >What do I use...</p>
      <h2 className={`${styles.sectionHeadText} dark:text-white light: text-midnight-100`} >Technologies</h2>
    </motion.div>
    
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas
            icon={technology.icon}
          />
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, '')