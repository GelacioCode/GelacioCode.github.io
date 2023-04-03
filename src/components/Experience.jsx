import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";
import { resume } from "../assets"
 
import { experiences } from '../constants';
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color:'#fff'}}
    contentArrowStyle = {{ borderRight: '7px solid #232631'}}
    date= { experience.date }
    iconStyle = {{ background: experience.icon.bg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img  
          src={ experience.icon }
          alt ={ experience.company_name }
          className = "w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {experience.title}
      </h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin:0 }}>
        {experience.companyName}
      </p>
    </div>

    <ul className=" mt-5 list-disc ml-5 space-y-2 ">
      {experience.points.map((point, index ) => (
        <li key = {`experience-point-${index}`}
        className =" text-white-100 text-[14px] pl-1 tracking-wider">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} >
        
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
        
        <div className="flex flex-col items-center lg:flex-row lg:justify-center">
          <div className="lg:mr-8">
            <p className={styles.sectionSubText}>Here are my brief experience in the IT Industry: </p>
          </div>
          <div>
            <a href={resume} className="bg-white text-black hover:bg-sky-950 hover:text-white font-bold py-2 px-4 rounded">
              Download Resume
            </a>
          </div>
        </div>
        
      </motion.div>

      <div className="mt-20 flex flex-col justify-center lg:justify-start">
        <VerticalTimeline>
            {experiences.map((experience,index)=>(
              <ExperienceCard key={index} experience = {experience} 
              />
            ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "experience")