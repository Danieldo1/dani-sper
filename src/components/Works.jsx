import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github,chrome } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  image,
  description,
  tags,
  source_code_link,
  project_link
}) => {

  const isLastThree = index >= projects.length - 5;

  return (
      <Tilt
        options={{ max: 45, scale: 1, speed: 250 }}
        className="dark:bg-tertiary  light: bg-purple-200 p-5 shadow-card  light: border-2 purple-100 rounded-2xl  xs:w-[350px]  w-full  flex"
      >
    <motion.div className="flex-col flex justify-between " >
        {/* card div */}
        <div className={`relative w-full h-[230px] ${isLastThree ? 'mt-0' : ''}`}>
          {isLastThree && (
            <div className="absolute inset-[-40px] flex justify-end  card-img_hover ">
              <div className="w-20 h-8 rounded-full flex justify-center items-center cursor-pointer shadow-md dark:shadow-slate-50 light: shadow-black bg-[#ff6a3d] ">
              <p className="text-white font-bold text-[24px] z-10 animate-pulse">New</p>
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
          <div className="absolute inset-0 flex justify-between m-3 card-img_hover shadow-lg">
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
          <p className="dark:text-secondary mt-2 text-[14px] light: text-midnight-100">
            {description}
          </p>
        </div>
          <p className="mt-4 dark:text-white light: text-midnight-100 font-semibold underline leading-[12px] ">Stack:</p>

        {/* tags */}
        <div className="mt-2 flex flex-wrap gap-2 justify-">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[16px] ${tag.color}`}>
              {tag.name}
            </p>
          ))}
        </div>
    </motion.div>
      </Tilt>
  );
};

const Works = () => {

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
          {/* wrapper for projects */}
          <div className="mt-20 flex flex-wrap gap-7 ">
            {projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
          </div>
      
          </>
          
  );
};

export default SectionWrapper(Works, "projects")

