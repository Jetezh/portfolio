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
        <div id='#hero' className='text-[var(--font-color)] text-7xl h-full w-full flex flex-col justify-center items-center'>
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
              <br /><span className='text-[var(--primary-font-color)]'>My name is Vega Setiawan</span>
              <br /><span className='text-[var(--primary-font-color)]'>Passionate <span className='text-[#FF9149]'>Fullstack Developer</span></span>
            </h1>
            <p className='font-normal text-[var(--primary-font-color)] text-[7rem] mt-[5rem]'>I specialize in web development, system architecture, and <br />scalable system design.</p>
          </motion.div>
          <div className='z-10 flex flex-row gap-20'>
            <button className="mt-20 px-20 py-16 tex-[7rem] rounded-4xl bg-[#FF9149] text-white font-semibold transition duration-300 hover:bg-[var(--button-hover)] hover:cursor-pointer hover:text-[#FF9149] border-15 border-transparent hover:border-[#FF9149] active:scale-90">
              <Link className='flex flex-row gap-10 items-center' href="">
                <SiReaddotcv />
                Download CV  
              </Link>
            </button>
            <button className="mt-20 px-20 py-16 tex-[7rem] rounded-4xl bg-[var(--bg-button)] text-[var(--primary-font-color)] border-[var(--border-color)] font-semibold transition duration-300 hover:cursor-pointer hover:bg-[var(--github-button-hover)] hover:text-black border-15 hover:border-[var(--github-border)] active:scale-90">
              <Link className='flex flex-row gap-10 items-center' href="https://github.com/Jetezh">
                <FaSquareGithub className='text-[6rem] hover:text-[var(--primary-font-color)]' />
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