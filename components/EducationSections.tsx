import React from 'react'
import { Tabs } from './ui/tabs'
import Image from 'next/image'
import { assets } from '@/assets/asset'
import { Timeline } from './ui/timeline'

const educationsFormal = [
    {
        title: "2018 - 2021",
        content: (
            <div className='flex flex-col gap-10'>
                <h2 className='text-[4rem] font-medium'>SMK Negeri 42 Jakarta<br />
                42 Jakarta Vocational High School</h2>
                <p>Office Administration</p>
                <div className='flex flex-col gap-10'>
                    <Image 
                    src={assets.smk1} 
                    alt='school-photo1'
                    width={500}
                    height={200}
                    className='rounded-4xl object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'/>
                    <Image 
                    src={assets.smk2} 
                    alt='school-photo2'
                    width={500}
                    height={200}
                    className='rounded-4xl object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'/>
                </div>
            </div>
        )
    },
    {
        title: "2023 - present",
        content: (
            <div className='flex flex-col gap-10'>
                <h2 className='text-[4rem] font-medium'>Information System undergraduate bachelor degree</h2>
                <p>Year 2</p>
                <Image
                src={assets.upnvj1}
                alt='university-photo1'
                width={500}
                height={200}
                className='rounded-4xl object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]' />
                <Image
                src={assets.upnvj2}
                alt='university-photo2'
                width={500}
                height={200}
                className='rounded-4xl object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]' />
            </div>
        )
    }
]

// const educationNonFormal = [
//     {
//         title: 2022,
//         conten: ""
//     }
//     {
//         title: 2022,
//         conten: ""
//     }
//     {
//         title: 2022,
//         conten: ""
//     }
//     {
//         title: 2022,
//         conten: ""
//     }
// ]

const tabs = [
    {
        title: "Formal",
        value: "Formal",
        content: (
            <div>
                <Timeline data={educationsFormal} />
            </div>
        )
    },
    {
        title: "Non Formal",
        value: "Non Formal",
        content: ""
    }
]

function EducationSections() {
  return (
    <div className='w-full h-screen flex flex-col text-[4rem] px-40'>
        <Tabs tabs={tabs} />
    </div>
  )
}

export default EducationSections