import React from 'react'
import { FcInspection, FcSportsMode } from 'react-icons/fc'

const Mission = () => {
  return (
    <div className='flex flex-2/5 flex-col justify-center gap-3 lg:gap-8 md:gap-5 bg-[var(--card-color)] backdrop-filter backdrop-blur-lg lg:rounded-3xl md:rounded-2xl rounded-xl py-5 px-4 lg:py-8 lg:px-10 md:py-5 md:px-8'>
        <h2 className='text-[1rem] lg:text-[2.5rem] md:text-[1.3rem] font-medium flex flex-row lg:gap-7 md:gap-5 gap-3 items-center'>
            <FcSportsMode /> My Mission
        </h2>
        <p className='text-[1rem] lg:text-[2.5rem] md:text-[1.3rem]'>
            To master the craft of web development and system design,
            while contributing to projects that challenge me to think deeper,
            collaborate smarter, and deliver better solutions
        </p>
        <blockquote className='text-[1rem] lg:text-[2.3rem] md:text-[1.3rem] font-medium flex flex-row lg:gap-7 md:gap-5 gap-2 items-center'>
            <FcInspection className='text-[2rem] lg:text-[3rem] md:text-[2rem]' />
            <i>one line of code at a time.</i>
        </blockquote>
    </div>
  )
}

export default Mission