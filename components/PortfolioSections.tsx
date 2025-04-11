import React from 'react'
import { motion } from 'motion/react'

const project = [
    {
        title: "UPNI",
        content: ""
    }
]

const certifications = [
    {
        title: "Dicoding",
        content: ""
    }
]

const techStack = [
    {
        title: ""
    }
]

const tabs = [
    {
        title: "Project",
        content: ""
    },
    {
        title: "Certifications",
        content: ""
    },
    {
        title: "Tech Stack",
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
    </div>
  )
}

export default PortfolioSections