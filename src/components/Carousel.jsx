import Slider from "./Slider";
import TestimonialCard from "./Card";
import {certifications} from "../constants/index";
import { SectionWrapper } from "../hoc";
import {motion} from "framer-motion"
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";


const Carousel = () => {
    return (
      <>
       <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} dark:text-white light: text-midnight-100`} >Something to prove...</p>
      <h2 className={`${styles.sectionHeadText} dark:text-white light: text-midnight-100`} >Certificates</h2>
    </motion.div>
<div>
<Slider options={{ align: "start" }}>
  {certifications.map((certifications, i) => (
    <div key={i} className="flex-[0_0_85%] md:flex-[0_0_50%]">
      <TestimonialCard {...certifications} />
    </div>
  ))}
</Slider>

</div>
<div  className='absolute xs:bottom-10 bottom-32 w-full sm:w-auto flex justify-center items-center order-3' style={{right: 0,left: 0}} >

          <div  className='w-[55px] h-[35px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                x: [0, 24, 0],
                y: 0,
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
      </div>
      </>

    )
}
export default SectionWrapper(Carousel,'');