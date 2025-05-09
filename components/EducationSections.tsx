import React from 'react'
import { Tabs } from './ui/tabs'
import Image from 'next/image'
import { assets } from '@/assets/asset'
import { Timeline } from './ui/timeline'
import { motion } from 'motion/react'

const educationsFormal = [
    {
        title: "2018 - 2021",
        content: (
            <div className='flex flex-col lg:gap-10 md:gap-5 gap-2'>
                <h2 className='lg:text-[3rem] md:text-[2rem] text-[1rem] font-medium'>SMK Negeri 42 Jakarta</h2>
                <p className='lg:text-[3rem] md:text-[2rem] text-[1rem] italic'>Office Administration</p>
                <Image 
                src={assets.smk1} 
                alt='school-photo1'
                width={500}
                height={200}
                className='lg:rounded-4xl md:rounded-2xl rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'/>
                <Image 
                src={assets.smk2} 
                alt='school-photo2'
                width={500}
                height={200}
                className='lg:rounded-4xl md:rounded-2xl rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'/>
            </div>
        )
    },
    {
        title: "2023 - Present",
        content: (
            <div className='flex flex-col lg:gap-10 md:gap-5 gap-2'>
                <h2 className='lg:text-[3rem] md:text-[2rem] text-[1rem] font-medium'>Universitas Pembangunan Nasional Veteran Jakarta</h2>
                <p className='lg:text-[3rem] md:text-[2rem] text-[1rem] italic'>Information System undergraduate bachelor degree</p>
                <Image
                src={assets.upnvj1}
                alt='university-photo1'
                width={500}
                height={200}
                className='lg:rounded-4xl md:rounded-2xl rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]' />
                <Image
                src={assets.upnvj2}
                alt='university-photo2'
                width={500}
                height={200}
                className='lg:rounded-4xl md:rounded-2xl rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]' />
            </div>
        )
    }
]

const educationNonFormal = [
    {
        title: "2023 - Present",
        content: (
            <div className='flex flex-col lg:gap-10 md:gap-5 gap-2'>
                <h2 className='lg:text-[3rem] md:text-[2rem] text-[1rem] font-medium'>Dicoding</h2>
                <p className='lg:text-[3rem] md:text-[2rem] text-[1rem]'>I recieved Dicoding Scholarship for Mechine Learning Path from Beginner to Intermediate, BackEnd Path for Beginner, FrontEnd path for Beginner, and some other course that related to IT field</p>
                <Image
                src={assets.dicoding}
                alt=''
                width={500}
                height={200}
                className='lg:rounded-4xl md:rounded-2xl rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]' />
            </div>
        )
    },
    {
        title: "2023 - Present",
        content: (
            <div className='flex flex-col lg:gap-10 md:gap-5 gap-2'>
                <h2 className='lg:text-[3rem] md:text-[2rem] text-[1rem] font-medium'>Freecodecamp</h2>
                <p className='lg:text-[3rem] md:text-[2rem] text-[1rem]'>I learnt course for web development mainly, the course i learned </p>
                <ul className='lg:text-[3rem] md:text-[2rem] text-[1rem]' >
                    <li>1. Responisve Web Design</li>
                    <li>2. Javascript Algorithms and Data Structures</li>
                    <li>3. Front End Development Libraries</li>
                    <li>4. Data Visualization</li>
                    <li>5. Relational Database</li>
                    <li>6. Back End Development and APIs</li>
                </ul>
                <Image
                src={assets.freecodecamp}
                alt=''
                width={500}
                height={200}
                className='lg:rounded-4xl md:rounded-2xl rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]' />
            </div>
        )
    }
]

const tabs = [
    {
        title: "Formal",
        value: "Formal",
        content: (
            <Timeline data={educationsFormal} />
        )
    },
    {
        title: "Non Formal",
        value: "Non Formal",
        content: (
            <Timeline data={educationNonFormal} />
        )
    }
]

function EducationSections() {
  return (
    <div className='lg:mt-50 md:mt-20 mt-10 overflow-clip flex flex-col lg:gap-18 md:gap-10 gap-5 items-center px-5 lg:px-20 md:px-10'>
        <motion.h1
            className='text-[2rem] lg:text-[6rem] md:text-[4rem] font-semibold text-[var(--accent-color)]'
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}>
                Educations
            </motion.h1>
        <Tabs tabs={tabs} />
    </div>
  )
}

export default EducationSections