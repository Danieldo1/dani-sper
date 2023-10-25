import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import {motion} from 'framer-motion';

import {styles} from '../styles'
import {experiences} from '../constants/index'
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';


const ExperienceCard = ({experience}) => (
 

  <VerticalTimelineElement
  contentStyle={{background: "dark:#1d1836 light: #cfc2d2", color: "#fff"}}

  contentArrowStyle={{borderRight: "7px solid  #232631"}}
  date={experience.date}
  iconStyle={{background: experience.iconBg}}
  icon={<div className='flex justify-center w-full h-full items-center'>
    <img src={experience.icon}
    alt={experience.company_name}
    className=  'w-[60%] h-[60%] object-contain'
    />
  </div>}
  >
    <div>
      {/* Icon for companies */}
      <h3 className='dark:text-white light: text-midnight-100 text-[24px] font-bold'>{experience.title}</h3>
      {/* Name of companies */}
      <p className='dark:text-secondary light: text-midnight-400 text-[16px] font-semibold' style={{margin: 0}}>{experience.company_name}</p>
      {/* Location of company */}
      <p className='dark:text-secondary light: text-midnight-400 text-[16px] font-semibold' style={{margin: 0}}><em className='ml-6'>{experience.location}</em></p>
    </div>
    {/* Description of Experience */}
    <ul className='mt-5 list-disc ml-5 space-y-2'>
  {experience.points.map((point, index) => (
    <li key={`experience-point-${index}`} className='dark:text-white-100 light: text-midnight-300 text-[14px] pl-1 tracking-wider '>
    <span className="font-bold">{point.title}:</span> {point.content}
    </li>
  ))}
    </ul>
  </VerticalTimelineElement>
)



const Experience = () => {
  return (
    <>
    {/* Heading for the work */}
    <motion.div variants={textVariant()}>
    <p className={`${styles.sectionSubText} dark:text-white light: text-midnight-100`} >What I have done so far...</p>
      <h2 className={`${styles.sectionHeadText} dark:text-white light: text-midnight-100`} >Timeline</h2>
    </motion.div>

    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {experiences.map((experience,index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")