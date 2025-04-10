'use client'

import React from 'react'
import { motion } from 'motion/react'
import { AuroraBackground } from './ui/aurora-background'

const Hero = () => {
  return (
    <>
      <AuroraBackground>
        <div className='text-[var(--font-color)] text-7xl h-full w-full flex flex-col justify-center items-center'>
            <motion.div 
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className='text-center font-medium'>
              <h1 className='text-[12rem] font-semibold text-[#FF9149]'>Greetings,
                <br /><span className='text-black'>My name is Vega Setiawan</span>
                <br /><span className='text-black'>I am <span className='text-[#FF9149]'>Fullstack Developer</span></span>
              </h1>
              <p className='font-normal text-[7rem] mt-[5rem]'>I specialize in web development, system architecture, and <br />scalable system design.</p>
            </motion.div>
        </div>
      </AuroraBackground>
    </>
  )
}

export default Hero