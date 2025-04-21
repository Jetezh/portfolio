import React from 'react'
import { motion } from 'motion/react'
import Mission from './Mission'

const About = () => {
  return (
    <div id='#about-me' className='px-40 w-full h-full'>
        <div className='flex flex-col justify-center items-center gap-30'>
            <motion.h1
            className='text-[10rem] font-semibold text-[var(--accent-color)]'
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}>
                About Me
            </motion.h1>
            <div className='flex flex-row items-center gap-80 text-[var(--primary-font-color)]'>
                <p
                className='text-[5.5rem] font-normal flex-3/5'>
                I have been coding for over two years, beginning my journey in 2023. Initially, 
                I started by learning HTML, CSS, and JavaScript to build basic websites. During my time at university, 
                I also studied C, C++, and Java to understand programming paradigms and foundational concepts.
                <br /><br />
                My first project was a digital library application called E-Libra, 
                which I developed as part of a submission for Dicoding. It was built using HTML, CSS, and JavaScript.
                <br /><br />
                As I progressed, I began focusing on React.js and Next.js, aiming to deepen my expertise in these technologies. 
                While I intend to continue strengthening my skills in this area, I also remain open to learning and 
                adapting to other technologies as needed.
                </p>
                <Mission />
            </div>
        </div>
    </div>
  )
}

export default About