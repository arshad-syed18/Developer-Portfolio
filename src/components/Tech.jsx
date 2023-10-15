import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'


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
const TechMobile = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Technical Expertise</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 ">
        {technologies.map((technology) => (
          <div key={technology.name} className="w-20 h-20 text-center rounded-full bg-white">
            <img src={technology.icon} className="w-16 h-16 mx-auto my-2" alt={technology.name} />
            <p className="mt-2 font-medium text-[14px]">{technology.name}</p>
          </div>
        ))}
      </div>

    </>
  );
};


const isMobile = window.innerWidth <= 768;
export default SectionWrapper(TechMobile, "tech")
// export default SectionWrapper(isMobile ? TechMobile : Tech, "tech")