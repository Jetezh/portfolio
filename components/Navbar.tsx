import React, { useState } from 'react'
import { Cursor, Tab } from './Tab';
import { assets } from '@/assets/asset'
import Link from 'next/link';
import Image from 'next/image'

type Position = {
  left: number,
  width: number,
  opacity: number
}

const Navbar = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0
  });

  return (
      <nav className='absolute z-10 w-full top-0 h-[10rem] px-6 md:px-20 text-[2rem] md:text-[3rem] flex justify-between items-center'>
          <Link className='' href="/">
            <Image src={assets.logo} alt='logo' className='w-40' />
          </Link>
          <ul
          onMouseLeave={() => {
            setPosition((pv) => ({
              ...pv,
              opacity: 0,
            }))
          }}
          className='sticky bg-white/60 backdrop-filter backdrop-blur-lg shadow-md  px-5 py-5 rounded-2xl flex flex-row gap-5'>
              <Tab setPosition={setPosition}>Home</Tab>
              <Tab setPosition={setPosition}>About Me</Tab>
              <Tab setPosition={setPosition}>Portfolio</Tab>
              <Tab setPosition={setPosition}>Contact</Tab>
              <Cursor position={position} />
          </ul>
          <div>Dark Mode</div>
      </nav>
  )
}

export default Navbar