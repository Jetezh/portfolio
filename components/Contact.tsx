import React, { useState } from 'react'
import { motion } from 'motion/react'
import { LuSend } from "react-icons/lu";
import Link from 'next/link';
import Image from 'next/image';
import { assets } from '@/assets/asset';

function Contact() {
    const [ message, setMessage] = useState("");

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if( e.target.value.length <= 500 ) {
            setMessage(e.target.value)
        }
    }

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
                    Contact Me
                </motion.h1>

            <p className='text-[1rem] lg:text-[2.5rem] md:text-[1.5rem] text-center text-[var(--primary-font-color)]'>
                I&apos;m always eager to explore new opportunities and take on exciting projects. If you have a project in mind, or just want to say hi, feel free to send me a message.
            </p>

            <div className='w-full lg:p-10 md:p-5 p-2 border-1 lg:border-3 md:border-2 lg:rounded-3xl md:rounded-2xl rounded-xl border-gray-500'>
                <form className='flex flex-col lg:text-[2.5rem] md:text-[1.5rem] text-[.7rem] text-[var(--primary-font-color)]' action="">
                    <div className='flex flex-row lg:gap-20 md:gap-10 gap-5'>
                        <div className='flex flex-col flex-1/2'>
                            <label htmlFor="username">Name</label>
                            <input className='lg:p-5 md:p-3 p-1 lg:rounded-2xl md:rounded-xl rounded-md border-1 lg:border-3 md:border-2 border-gray-500' type="text" placeholder='john due' aria-required/>
                        </div>
                        <div className='flex flex-col flex-1/2'>
                            <label htmlFor="email">Email</label>
                            <input className='lg:p-5 md:p-3 p-1 lg:rounded-2xl md:rounded-xl rounded-md border-1 lg:border-3 md:border-2 border-gray-500' type="email" placeholder='example@email.com' aria-required/>
                        </div>
                    </div>
                    <label className='lg:mt-10 md:mt-5 mt-2' htmlFor="message">Message</label>
                    <textarea 
                    className='lg:p-5 md:p-3 p-1 lg:rounded-2xl md:rounded-xl rounded-md border-1 lg:border-3 md:border-2 border-gray-500 resize-none' 
                    rows={7} 
                    name="message" 
                    id="message"
                    value={message}
                    onChange={handleMessageChange}
                    placeholder='this is message...' 
                    aria-required></textarea>
                    <span className='text-gray-500 text-right lg:text-[2.5rem] md:text-[1.5rem] text-[.7rem] lg:mt-10 md:mt-5 mt-2'>{message.length}/500 characters</span>
                    <div className='flex justify-end'>
                        <button type='submit' className="hover:cursor-pointer font-semibold bg-[var(--bg-button)] hover:bg-[var(--bg-button-hover)] border border-neutral-600 hover:border-[var(--bg-button-hover)] lg:mt-10 md:mt-5 mt-2 flex flex-row items-center lg:gap-8 md:gap-5 gap-2 lg:px-8 lg:py-6 md:px-4 md:py-2 px-2 py-1 lg:text-[2.5rem] md:text-[1.5rem] text-[1rem] lg:rounded-2xl md:rounded-xl rounded-md text-[var(--primary-font-color)] transition duration-200">
                            <LuSend />
                            Send
                        </button>
                    </div>
                </form>
            </div>

            <p className='text-[1rem] lg:text-[2.5rem] md:text-[1.5rem] text-[var(--primary-font-color)]'>or contect me with...</p>

            <div className='flex flex-row justify-center flex-wrap lg:gap-14 md:gap-6 gap-2'>
                {[
                { href: "https://www.linkedin.com/in/vega-setiawan/", label: "Linkedin", icon: assets.linkedin },
                { href: "mailto:vegasetiawan1603@gmail.com", label: "Email", icon: assets.email },
                { href: "https://www.instagram.com/v_ega16?utm_source=qr&igsh=MWMxNzl0dmVuZmEwcw==", label: "Instagram", icon: assets.instagram },
                { href: "https://discordapp.com/users/927927583167897661", label: "Discord", icon: assets.discord },
                ].map(({ href, label, icon }) => (
                <button key={label} type='button' className="hover:cursor-pointer lg:px-10 lg:py-6 md:px-6 md:py-3 px-2 py-1 lg:text-[2.3rem] md:text-[1.2rem] text-[.8rem] lg:rounded-2xl md:rounded-xl rounded-md border border-neutral-600 hover:border-[var(--bg-button-hover)] text-[var(--primary-font-color)] bg-[var(--bg-button)] hover:bg-[var(--bg-button-hover)] transition duration-200">
                    <Link className='flex flex-row items-center lg:gap-7 md:gap-3 gap-1' href={href}>
                    <Image className='lg:w-15 lg:h-15 md:w-8 md:h-8 w-5 h-5' src={icon} alt={label} />
                    {label}
                    </Link>
                </button>
                ))}
            </div>
        </div>
    )
}

export default Contact