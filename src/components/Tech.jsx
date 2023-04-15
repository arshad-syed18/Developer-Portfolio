import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import {styles} from '../styles'



const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 ">
      {technologies.map((technology) => (
        <div key={technology.name} className="w-28 h-28 text-center">
          <BallCanvas icon={technology.icon} />
          <p className="mt-2 font-medium text-[14px]">{technology.name}</p>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "tech")