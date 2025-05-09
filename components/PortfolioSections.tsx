import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Tabs } from './ui/tabs'
import { HoverEffect } from './ui/card-hover-effect'
import { assets } from '@/assets/asset'
import StackIcon from 'tech-stack-icons'
import Link from 'next/link'

const project = [
    {
        image: assets.freecodecamp,
        alt: "",
        title: "UPNI",
        description: "",
        link: ""
    },
    {
        image: assets.freecodecamp,
        alt: "",
        title: "UPNI",
        description: "",
        link: ""
    },
    {
        image: assets.freecodecamp,
        alt: "",
        title: "UPNI",
        description: "",
        link: ""
    },
]

const certifications = [
    {
        image: assets.fcc1,
        alt: "",
        title: "Responsive Web Design",
        description: "Freecodecamp",
        link: "https://www.freecodecamp.org/certification/Jetezh/responsive-web-design"
        
    },
    {
        image: assets.fcc2,
        alt: "",
        title: "Javascript Alghoritms and Data Structures",
        description: "Freecodecamp",
        link: "https://www.freecodecamp.org/certification/Jetezh/javascript-algorithms-and-data-structures-v8"
        
    },
    {
        image: assets.fcc3,
        alt: "",
        title: "Front End Develpment Libraries",
        description: "Freecodecamp",
        link: "https://www.freecodecamp.org/certification/Jetezh/front-end-development-libraries"
        
    },
    {
        image: assets.fcc4,
        alt: "",
        title: "Data Visualization",
        description: "Freecodecamp",
        link: "https://www.freecodecamp.org/certification/Jetezh/data-visualization"
        
    },
    {
        image: assets.fcc5,
        alt: "",
        title: "Back End Development and APIs",
        description: "Freecodecamp",
        link: "https://www.freecodecamp.org/certification/Jetezh/back-end-development-and-apis"
        
    },
    {
        image: assets.dcd1,
        alt: "",
        title: "Belajar Dasar Pemrograman Web",
        description: "Dicoding",
        link: "https://www.dicoding.com/certificates/4EXGVEOOQXRL"
        
    },
    {
        image: assets.dcd2,
        alt: "",
        title: "Memulai Pemrograman dengan Python",
        description: "Dicoding",
        link: "https://www.dicoding.com/certificates/JMZVDEG2QZN9"
        
    },
    {
        image: assets.dcd3,
        alt: "",
        title: "Belajar Machine Learning untuk Pemula",
        description: "Dicoding",
        link: "https://www.dicoding.com/certificates/1RXY1E77QPVM"
        
    },
    {
        image: assets.dcd4,
        alt: "",
        title: "Belajar Dasar Visualisasi Data",
        description: "Dicoding",
        link: "https://www.dicoding.com/certificates/EYX40J366PDL"
        
    },
    {
        image: assets.dcd5,
        alt: "",
        title: "Cloud Practitioner Essentials (AWS)",
        description: "Dicoding",
        link: "https://www.dicoding.com/certificates/GRX5Q7LQ2Z0M"
        
    },
    {
        image: assets.dcd6,
        alt: "",
        title: "Belajar Dasar Pemrograman JavaScript",
        description: "Dicoding",
        link: "https://www.dicoding.com/certificates/53XEY655YPRN"
        
    },
    {
        image: assets.dcd7,
        alt: "",
        title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
        description: "Dicoding",
        link: "https://www.dicoding.com/certificates/4EXGQ6QNQZRL"
        
    },
    {
        image: assets.dcd8,
        alt: "",
        title: "Belajar Membuat Front-End Web untuk Pemula",
        description: "Dicoding",
        link: "https://www.dicoding.com/certificates/EYX4JVQQ5ZDL"
        
    },
    {
        image: assets.dcd9,
        alt: "",
        title: "Belajar Dasar AI",
        description: "Dicoding",
        link: "https://www.dicoding.com/certificates/53XEQY8VRXRN"
        
    },
    {
        image: assets.dcd10,
        alt: "",
        title: "Belajar Membuat Aplikasi Web dengan React",
        description: "Dicoding",
        link: "https://www.dicoding.com/certificates/NVP75G9MWXR0"
        
    },
]

const techStack = [
    {
        icon: "reactjs",
        title: "React",
        link: "https://react.dev/"
    },
    {
        icon: "nextjs2",
        title: "Next.js",
        link: "https://nextjs.org/"
    },
    {
        icon: "tailwindcss",
        title: "TailwindCSS",
        link: "https://tailwindcss.com/"
    },
    {
        icon: "js",
        title: "Javascript",
        link: "#"
    },
    {
        icon: "typescript",
        title: "Typescript",
        link: "https://www.typescriptlang.org/"
    },
    {
        icon: "nodejs",
        title: "Node.js",
        link: "https://nodejs.org/en"
    },
    {
        icon: "npm2",
        title: "NPM",
        link: "https://www.npmjs.com/"
    },
    {
        icon: "git",
        title: "Git",
        link: "https://git-scm.com/"
    },
    {
        icon: "github",
        title: "Github",
        link: "https://github.com/Jetezh"
    },
    {
        icon: "mysql",
        title: "MySQL",
        link: "https://www.mysql.com/"
    },
    {
        icon: "mongodb",
        title: "MongoDB",
        link: "https://www.mongodb.com/"
    },
    {
        icon: "figma",
        title: "Figma",
        link: "https://www.figma.com/"
    },
]

function TechStackSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className='flex flex-wrap justify-center'>
            {techStack.map((tech, i) => (
                <Link
                    href={tech?.link || "#"}
                    key={i}
                    className="relative group block lg:p-5 md:p-3 p-2 lg:rounded-4xl md:rounded-3xl rounded-2xl"
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === i && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-[var(--card-hover-color)] block lg:rounded-4xl md:rounded-2xl rounded-xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <button className="relative z-50 lg:gap-8 md:gap-5 gap-3 lg:px-10 lg:py-6 md:px-8 md:py-4 px-3 py-2 lg:text-[2rem] md:text-[1.5rem] flex flex-row items-center lg:rounded-2xl md:rounded-xl rounded-lg hover:cursor-pointer border-1 border-[var(--card-color)] group-hover:border-[var(--border-hover)] text-[var(--primary-font-color)] bg-[var(--card-color)] transition duration-200">
                        <StackIcon className='lg:w-15 lg:h-15 md:w-10 md:h-10 w-5 h-5' name={tech.icon} />
                        {tech.title}
                    </button>
                </Link>
            ))}
        </div>
    );
}


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
        content: (
            <div>
                <HoverEffect items={certifications} />
            </div>
        )
    },
    {
        title: "Tech Stack",
        value: "Tech Stack",
        content: (
            <>
                <TechStackSection />
                <span className='flex justify-center items-center text-[var(--primary-font-color)] lg:text-[2.5rem]'>...and many more!</span>
            </>
        )
    }
]

function PortfolioSections() {
  return (
    <div className='lg:mt-50 md:mt-20 mt-10 w-full h-full flex flex-col lg:gap-10 md:gap-7 gap-4 items-center px-5 lg:px-20 md:px-10'>
        <motion.h1
            className='text-[2rem] lg:text-[6rem] md:text-[4rem] font-semibold text-[var(--accent-color)]'
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