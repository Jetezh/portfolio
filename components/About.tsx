import React from 'react'
import { motion } from 'motion/react'
import Mission from './Mission'

const About = () => {
  return (
    <div id='#about-me' className='lg:mt-50 md:mt-30 px-5 lg:px-20 md:px-10 w-full h-full'>
        <div className='flex flex-col justify-center items-center lg:gap-30 md:gap-15 gap-10'>
            <motion.h1
            className='text-[2rem] lg:text-[6rem] md:text-[4rem] font-semibold text-[var(--accent-color)]'
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}>
                About Me
            </motion.h1>
            <div className='flex lg:flex-row md:flex-row flex-col items-center gap-5 lg:gap-10 md:gap-5 text-[var(--primary-font-color)]'>
              <div className='flex flex-col gap-3 lg:gap-8 md:gap-5 text-[1rem] lg:text-[2.5rem] md:text-[22px] font-normal flex-3/5'>
                <p>
                  I began my coding journey in 2023, starting with HTML, CSS, and JavaScript to build basic websites.  
                  In university, I also explored C, C++, and Java to strengthen my understanding of programming fundamentals. 
                </p>
                <p>
                  My first project, a digital library app called E-Libra, was built using HTML, CSS, and JavaScript for a Dicoding submission.
                </p>
                <p>
                  As I advanced, I focused on React.js and Next.js to deepen my expertise in modern web development,  
                  while staying open to learning other technologies as needed.
                </p>
              </div>
                <Mission />
            </div>
        </div>
    </div>
  )
}

export default About