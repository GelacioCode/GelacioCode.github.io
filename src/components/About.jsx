import React from 'react';
import Tilt from 'react-tilty';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {

    return (
      
      <Tilt className = "xs:w-[250px] w-full">

        <motion.div
        variants ={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">

          <div 
            onCompositionStart={{
              max:45,
              scale:1,
              speed:450
            }}
            className = "bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <img src= {icon} alt={title}
                className="w-16 h-16 object-contain"/>
              <h3 className ="text-white text-[20px]
                font-bold text-center ">{title}</h3>
            </div>

        </motion.div>
      </Tilt>
    )
}
const About = () => {
  return (
    <>

      <motion.div variants  ={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1, 1)}
        className="mt-4 text-secondary text-[17px]
        max-w-3xl leading-[30px]"
      >
        Hello there! My name is Samuel Allen Gelacio. 
        As an Automation Developer, I specialize in 
        crafting innovative solutions using my 
        expertise in Wordpress, JavaScript and TypeScript 
        development as well as my experience with frameworks 
        like React, Node.js, and Angular. I take pride 
        in my ability to quickly learn new skills and 
        work closely with clients to transform complex 
        business challenges into software solutions 
        that address real-world problems. 
        Let's collaborate and bring your ideas to 
        life - I'm eager to get started!

        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index=
            {index} {...service} />
          ))}
        </div>
    </>
  )
}

export default SectionWrapper(About, "about")