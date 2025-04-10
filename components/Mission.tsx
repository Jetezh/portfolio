import React from 'react'
import { FcInspection, FcSportsMode } from 'react-icons/fc'

const Mission = () => {
  return (
    <div className='flex flex-2/5 flex-col justify-center gap-30 bg-[#9FB3DF]/30 backdrop-filter backdrop-blur-lg rounded-4xl py-20 px-25'>
        <h2 className='text-[7rem] font-medium flex flex-row gap-10 items-center'>
            <FcSportsMode /> My Mission
        </h2>
        <p className='text-[4.5rem]'>
            To master the craft of web development and system design,
            while contributing to projects that challenge me to think deeper,
            collaborate smarter, and deliver better solutions
        </p>
        <blockquote className='text-[4rem] font-medium flex flex-row gap-10 items-center'>
            <FcInspection />
            <i>one line of code at a time.</i>
        </blockquote>
    </div>
  )
}

export default Mission