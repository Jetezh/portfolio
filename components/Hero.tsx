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
          className='text-center font-medium px-8 lg:px-18 md:px-14'>
            <h1 className='text-[1.5rem] lg:text-[5.5rem] md:text-[3rem] font-semibold text-[#FF9149]'>Greetings,
              <br /><span className='text-[var(--primary-font-color)]'>My name is Vega Setiawan</span>
              <br /><span className='text-[var(--primary-font-color)]'>Passionate <span className='text-[#FF9149]'>Fullstack Developer</span></span>
            </h1>
            <p className='font-normal text-[var(--primary-font-color)] text-[1.2rem] lg:text-[4rem] md:text-[3rem] mt-5 lg:mt-14 md:mt-10'>I specialize in web development, system architecture, and scalable system design.</p>
          </motion.div>
          <div className='z-10 mt-5 lg:mt-20 md:mt-10 flex flex-row gap-5 lg:gap-15 md:gap-10'>
            <button className="px-4 py-2 md:px-8 md:py-4 lg:px-12 lg:py-6 text-[1rem] lg:text-[2.5rem] md:text-[2rem] rounded-lg lg:rounded-3xl md:rounded-2xl bg-[#FF9149] text-white font-semibold transition duration-300 hover:bg-[var(--button-hover)] hover:cursor-pointer hover:text-[#FF9149] border-4 lg:border-8 md:border-6 border-transparent hover:border-[#FF9149] active:scale-90">
              <Link className='flex flex-row gap-2 lg:gap-10 md:gap-6 items-center' href="">
                <SiReaddotcv />
                Download CV  
              </Link>
            </button>
            <button className="px-4 py-2 md:px-8 md:py-4 lg:px-12 lg:py-6 text-[1rem] lg:text-[2.5rem] md:text-[2rem] rounded-lg lg:rounded-3xl md:rounded-2xl bg-[var(--bg-button)] text-[var(--primary-font-color)] border-[var(--border-color)] font-semibold transition duration-300 hover:cursor-pointer hover:bg-[var(--github-button-hover)] hover:text-black border-4 lg:border-8 md:border-6 hover:border-[var(--github-border)] active:scale-90">
              <Link className='flex flex-row gap-2 lg:gap-10 md:gap-6 items-center' href="https://github.com/Jetezh">
                <FaSquareGithub className='text-[1.2rem] lg:text-[4.5rem] md:text-[3rem]' />
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