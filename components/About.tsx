import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import { TextGenerateEffect } from './ui/text-generate-effect'

const About = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center'>
            <motion.h1
            className='text-[10rem] font-semibold'>About Me</motion.h1>
            <div>
                <TextGenerateEffect
                className='text'
                words="
                I have been coding for over two years, beginning my journey in 2023. Initially, 
                I started by learning HTML, CSS, and JavaScript to build basic websites. During my time at university, 
                I also studied C, C++, and Java to understand programming paradigms and foundational concepts.

                My first project was a digital library application called E-Libra, 
                which I developed as part of a submission for Dicoding. It was built using HTML, CSS, and JavaScript.

                As I progressed, I began focusing on React.js and Next.js, aiming to deepen my expertise in these technologies. 
                While I intend to continue strengthening my skills in this area, I also remain open to learning and 
                adapting to other technologies as needed.
                "
                
                 />
                <Image src="" alt=""/>
            </div>
        </div>
    </div>
  )
}

export default About