'use client'

import React from 'react'
import { motion } from 'motion/react'
import { AuroraBackground } from './ui/aurora-background'
import Link from 'next/link'
import { SiReaddotcv } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <AuroraBackground>
        <div id='#hero' className='text-7xl h-full w-full md: flex flex-col justify-center items-center'>
          <motion.div 
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className='text-center font-medium lg:px-20'>
            <h1 className='text-[2rem] lg:text-[5.5rem] md:text-[4.5rem] font-semibold text-[#FF9149]'>Greetings,
              <br /><span className='text-[var(--primary-font-color)]'>My name is Vega Setiawan</span>
              <br /><span className='text-[var(--primary-font-color)]'>Passionate <span className='text-[#FF9149]'>Fullstack Developer</span></span>
            </h1>
            <p className='font-normal text-[var(--primary-font-color)] text-[1.5rem] lg:text-[4rem] md:text-[3.5rem] mt-5 lg:mt-14 md:mt-10'>I specialize in web development, system architecture, and <br />scalable system design.</p>
          </motion.div>
          <div className='z-10 flex flex-row gap-20'>
            <button className="mt-20 px-10 py-8 md:px-14 md:py-10 lg:px-20 lg:py-16 text-[2rem] lg:text-[4.5rem] md:text-[3rem] rounded-4xl bg-[#FF9149] text-white font-semibold transition duration-300 hover:bg-[var(--button-hover)] hover:cursor-pointer hover:text-[#FF9149] border-15 border-transparent hover:border-[#FF9149] active:scale-90">
              <Link className='flex flex-row gap-10 items-center' href="">
                <SiReaddotcv />
                Download CV  
              </Link>
            </button>
            <button className="mt-20 px-10 py-8 md:px-14 md:py-10 lg:px-20 lg:py-16 text-[2rem] lg:text-[4.5rem] md:text-[3rem] rounded-4xl bg-[var(--bg-button)] text-[var(--primary-font-color)] border-[var(--border-color)] font-semibold transition duration-300 hover:cursor-pointer hover:bg-[var(--github-button-hover)] hover:text-black border-15 hover:border-[var(--github-border)] active:scale-90">
              <Link className='flex flex-row gap-10 items-center' href="https://github.com/Jetezh">
                <FaSquareGithub className='text-[6rem] ' />
                Github 
              </Link>
            </button>
          </div>
        </div>
      </AuroraBackground>
    </>
  )
}

export default Hero