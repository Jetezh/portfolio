import React from 'react'
import { motion } from 'motion/react'

function Contact() {
  return (
    <div className='w-full h-screen flex flex-col gap-20 items-center text-[4rem] px-40'>
        <motion.h1
            className='text-[10rem] font-semibold'
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}>
                Contact Me
            </motion.h1>
        <p className='text-[4rem]'>
            I&apos;m always eager to explore new opportunities and take on exciting projects. If you have a project in mind, or just want to say hi, feel free to send me a message.
        </p>
        <div >
            <form className='flex flex-col' action="">
                <div className='flex flex-row'>
                    <div className='flex flex-col'>
                        <label htmlFor="username">Name</label>
                        <input type="text" placeholder='john due' aria-required/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='example@email.com' aria-required/>
                    </div>
                </div>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" placeholder='this is message...' aria-required></textarea>
                <button type='submit' className="px-4 py-2 rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200">
                    Send
                </button>
            </form>
            <p>or contect me with...</p>
            <button type='submit' className="px-4 py-2 rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200">
                Send
            </button>
        </div>
    </div>
  )
}

export default Contact