import React from 'react'
import { motion } from 'motion/react'
import { Tabs } from './ui/tabs'
import { HoverEffect } from './ui/card-hover-effect'
import Image from 'next/image'
import { assets } from '@/assets/asset'

const project = [
    {
        image: assets.freecodecamp,
        title: "UPNI",
        description: "",
        link: ""
    },
    {
        image: assets.freecodecamp,
        title: "UPNI",
        description: "",
        link: ""
    },
    {
        image: assets.freecodecamp,
        title: "UPNI",
        description: "",
        link: ""
    },
]

const certifications = [
    {
        title: "Dicoding",
        content: ""
    }
]

const techStack = [
    {
        title: "React",
        content: (
            <div>
                
            </div>
        )
    },
    {
        title: "Next.js",
        content: (
            <div>

            </div>
        )
    },
    {
        title: "TailwindCSS",
        content: (
            <div>

            </div>
        )
    },
    {
        title: "Javascript",
        content: (
            <div>

            </div>
        )
    },
    {
        title: "Typescript",
        content: (
            <div>

            </div>
        )
    },
    {
        title: "Node.js",
        content: (
            <div>

            </div>
        )
    },
    {
        title: "Express.js",
        content: (
            <div>

            </div>
        )
    },
    {
        title: "NPM",
        content: (
            <div>

            </div>
        )
    },
    {
        title: "Git",
        content: (
            <div>

            </div>
        )
    },
    {
        title: "Github",
        content: (
            <div>

            </div>
        )
    },
    {
        title: "MySQL",
        content: (
            <div>

            </div>
        )
    },
    {
        title: "MongoDB",
        content: (
            <div>

            </div>
        )
    },
    {
        title: "Figma",
        content: (
            <div>

            </div>
        )
    },
]

const tabs = [
    {
        title: "Project",
        value: "Project",
        content: (
            <div>
                <HoverEffect items={project} />
            </div>
        )
    },
    {
        title: "Certifications",
        value: "Certifications",
        content: ""
    },
    {
        title: "Tech Stack",
        value: "Tech Stack",
        content: ""
    }
]

function PortfolioSections() {
  return (
    <div className='w-full h-screen flex flex-col items-center text-[4rem] px-40'>
        <motion.h1
            className='text-[10rem] font-semibold'
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}>
                Portfolios
        </motion.h1>
        <Tabs tabs={tabs} />
    </div>
  )
}

export default PortfolioSections