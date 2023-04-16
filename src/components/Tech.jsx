import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import {styles} from '../styles'
import { motion } from 'framer-motion'
import {fadeIn, textVariant} from '../utils/motion'


const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Technical Expertise</p>
          <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 ">
        {technologies.map((technology) => (
          <div key={technology.name} className="w-28 h-28 text-center">
            <BallCanvas icon={technology.icon} />
            <p className="mt-2 font-medium text-[14px]">{technology.name}</p>
          </div>
        ))}
      </div>
    </>
    
  )
}

export default SectionWrapper(Tech, "tech")