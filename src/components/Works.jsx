import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github,chrome } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  image,
  description,
  tags,
  source_code_link,
  project_link,

}) => {
  

  
  const isLastThree = index >= projects.length - 11;

  return (
    <Tilt
      options={{ max: 15, scale: 1, speed: 150 }}
      className="dark:bg-tertiary  light: bg-purple-200 p-5 shadow-card  light: border-2 purple-100 rounded-2xl  xs:w-[350px]  w-full  flex"
    >
      <motion.div
        className="flex-col flex justify-between "
        variants={staggerContainer}
      >
        {/* card div */}
        <div
          className={`relative w-full h-[230px] ${isLastThree ? "mt-0" : ""}`}
        >
          {isLastThree && (
            <div className="absolute inset-[-40px] flex justify-end  card-img_hover ">
              <div className="w-20 h-8 rounded-full flex justify-center items-center cursor-default shadow-sm dark:shadow-slate-50 light: shadow-black bg-[#ff6a3d] ">
                <p className="text-white font-bold text-[24px] z-10 animate-pulse">
                  Top
                </p>
              </div>
            </div>
          )}
          {/* image of card work */}
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
            loading="lazy"
          />
          {/* text */}
          <div className="absolute inset-0 flex justify-between m-3 card-img_hover ">
            {/* github link */}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient-link w-12 h-12 rounded-full flex justify-center items-center cursor-pointer shadow-md shadow-slate-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-300 transition ease-in-out delay-80 "
            >
              <img
                src={github}
                alt="github"
                className="w-4/5 h-4/5 object-contain"
              />
              {/* <p className="absolute inset-y-10 flex justify-center hover:hidden m-3 orange-text-gradient text-sm font-semibold"> GitHub</p> */}
            </div>
            {/* Live project link */}

            <div
              onClick={() => window.open(project_link, "_blank")}
              className="black-gradient-link w-12 h-12 rounded-full flex justify-center items-center cursor-pointer shadow-md shadow-slate-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-300 transition ease-in-out delay-80 "
            >
              <img
                src={chrome}
                alt="chrome"
                className="w-2/3 h-2/3  object-contain"
              />
              {/* <p className="absolute inset-y-10  justify-center m-3 hidden hover:flex text-sm font-semibold"> Online</p> */}
            </div>
          </div>
        </div>

        {/* description */}
        <div className="mt-5">
          <h3 className="dark:text-white font-bold text-[24px] light: text-midnight-100">
            {name}
          </h3>
          <p className="dark:text-secondary mt-2 text-[14px] light: text-midnight-100 selection:bg-purple-300 selection:text-purple-900">
            {description}
          </p>
        </div>
        <p className="mt-4 dark:text-white light: text-midnight-100 font-semibold underline leading-[12px] ">
          Stack:
        </p>

        {/* tags */}
        <div className="mt-2 flex flex-wrap gap-2 justify-">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-[16px]  ${tag.color}`}
            >
              {tag.name}
            </p>
          ))}
        </div>
      </motion.div>
    </Tilt>
  );
};

const technologies = [
  
  "API",
  "AWS S3",
  "CronJob",
  "CSS",
  "Convex",
  "Expo Go",
  "Firebase",
  "HTML",
  "JavaScript",
  "MongoDB",
  "MySQL",
  "Next.js",
  "OpenAi",
  "Prisma",
  "React",
  "React Native",
  "React Router",
  "Redux",
  "Replicate",
  "Sanity",
  "Shadcn",
  "Stripe",
  "Tailwind CSS",
  "Typescript",
  "Vite",
  "Zustand",
  "N"
 
];
const Works = () => {
  const [activeFilters, setActiveFilters] = useState(['N']);
  
  const toggleFilter = (filter) => {
    if (activeFilters.includes(filter)) {
     
      setActiveFilters(activeFilters.filter((f) => f !== filter));
    } else {
      
      setActiveFilters([...activeFilters, filter]);
    }
  };


  const generateButtons = () => {

    return technologies.map((tech) => (
      <motion.button
        key={tech}
        type="button"
        onClick={() => toggleFilter(tech)}
        className={`dark:text-white light: text-midnight-100 inline-block m-1 rounded-full border-2 border-secondary md:px-6 md:pb-[6px] md:pt-2 px-2 pb-1 pt-1 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-700 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-25 focus:border-accent-100 focus:outline-none focus:ring-0 active:border-green-200 dark:text-primary-100 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 ${
          activeFilters.includes(tech) ? "hover:bg-neutral-900 bg-secondary dark:hover:text-white  dark:text-midnight-100 light: text-white" : null }`}
     
      >
        {tech === 'N' ? 'Show New' : tech}
        
      </motion.button>
    ));
  };


  return (
   
            <>
          <motion.div >
            <p
              className={`${styles.sectionSubText} dark:text-white light: text-midnight-100`}
            >
              My work...
            </p>
            <h2
              className={`${styles.sectionHeadText} dark:text-white light: text-midnight-100`}
            >
              Projects
            </h2>
          </motion.div>
    
          <div className="w-full flex ">
            <motion.p
              className="mt-3 dark:text-secondary light: text-midnight-400 text-[17px] max-w-3xl leading-[30px]"
            >
              The following projects serve as tangible demonstrations of my skills
              and experiences, offering real-world examples of my work. Each project
              is concisely described and includes live demos, which provide a
              testament to my proficiency in solving complex problems, my adeptness
              with various technologies, and my effective project management.
            </motion.p>
            </div>
         
      <div className="mt-5 flex-1 gap-3 ">
    <p className={`${styles.sectionSubText} my-4 font-semibold text-base dark:text-white light: text-midnight-100`}>Filters:</p>
      {generateButtons()}
      
      </div>

      {/* Wrapper for projects */}
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          // Only render projects that match the active filters
      
          (activeFilters.length === 0 || 
            project.tags.some((tag) => activeFilters.includes(tag.name))) && (
            <ProjectCard key={`project-${index}`} index={index} {...project}  />
          )
        ))}
      </div>
    </>
          
  );
};

export default SectionWrapper(Works, "projects")

