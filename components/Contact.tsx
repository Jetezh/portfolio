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
        <div className='w-full h-screen flex flex-col gap-20 items-center text-[4rem] px-40'>
            <motion.h1
                className='text-[10rem] font-semibold text-[var(--accent-color)]'
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
                }}>
                    Contact Me
                </motion.h1>

            <p className='text-[6rem] text-center text-[var(--primary-font-color)]'>
                I&apos;m always eager to explore new opportunities and take on exciting projects. If you have a project in mind, or just want to say hi, feel free to send me a message.
            </p>

            <div className='w-full p-30 border-3 rounded-4xl border-gray-500'>
                <form className='flex flex-col text-[5rem] text-[var(--primary-font-color)]' action="">
                    <div className='flex flex-row gap-20'>
                        <div className='flex flex-col flex-1/2'>
                            <label htmlFor="username">Name</label>
                            <input className='p-10 rounded-3xl border-4 border-gray-500' type="text" placeholder='john due' aria-required/>
                        </div>
                        <div className='flex flex-col flex-1/2'>
                            <label htmlFor="email">Email</label>
                            <input className='p-10 rounded-3xl border-4 border-gray-500' type="email" placeholder='example@email.com' aria-required/>
                        </div>
                    </div>
                    <label className='mt-20' htmlFor="message">Message</label>
                    <textarea 
                    className='p-10 rounded-3xl border-4 border-gray-500 resize-none' 
                    rows={7} 
                    name="message" 
                    id="message"
                    value={message}
                    onChange={handleMessageChange}
                    placeholder='this is message...' 
                    aria-required></textarea>
                    <span className='text-gray-500 text-right text-[5rem] mt-15'>{message.length}/500 characters</span>
                    <div className='flex justify-end'>
                        <button type='submit' className="hover:cursor-pointer font-semibold bg-[var(--bg-button)] hover:bg-[var(--bg-button-hover)] border border-neutral-600 hover:border-[var(--bg-button-hover)] mt-20 flex flex-row items-center gap-15 px-14 py-10 text-[5rem] rounded-3xl text-[var(--primary-font-color)] transition duration-200">
                            <LuSend />
                            Send
                        </button>
                    </div>
                </form>
            </div>

            <p className='text-[6rem] text-[var(--primary-font-color)]'>or contect me with...</p>

            <div className='flex flex-row gap-20'>
                {[
                { href: "https://www.linkedin.com/in/vega-setiawan/", label: "Linkedin", icon: assets.linkedin },
                { href: "mailto:vegasetiawan1603@gmail.com", label: "Email", icon: assets.email },
                { href: "https://www.instagram.com/v_ega16?utm_source=qr&igsh=MWMxNzl0dmVuZmEwcw==", label: "Instagram", icon: assets.instagram },
                { href: "https://discordapp.com/users/927927583167897661", label: "Discord", icon: assets.discord },
                ].map(({ href, label, icon }) => (
                <button key={label} type='button' className="hover:cursor-pointer px-16 py-12 text-[5rem] rounded-4xl border border-neutral-600 hover:border-[var(--bg-button-hover)] text-[var(--primary-font-color)] bg-[var(--bg-button)] hover:bg-[var(--bg-button-hover)] transition duration-200">
                    <Link className='flex flex-row items-center gap-10' href={href}>
                    <Image width={100} height={100} src={icon} alt={label} />
                    {label}
                    </Link>
                </button>
                ))}
            </div>
        </div>
    )
}

export default Contact