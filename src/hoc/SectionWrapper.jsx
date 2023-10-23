import {motion} from 'framer-motion'
import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'

// Animation for the components to fade in
const SectionWrapper = (Component, idName) => function HOC(){
    return(
        <motion.section
        variants={staggerContainer(0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <span className='hash-span' id={idName} >
                &nbsp;
            </span>
            <Component />
        </motion.section>
    )
}

export default SectionWrapper