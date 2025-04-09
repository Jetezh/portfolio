import React, { useRef } from 'react'

type Position = {
  left: number,
  width: number,
  opacity: number,
}

type Tabprops = {
    children: React.ReactNode;
    setPosition: React.Dispatch<React.SetStateAction<Position>>
}

export const Tab: React.FC<Tabprops> = ({ children, setPosition }) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
    ref={ref}
    onMouseEnter={() => {
      if(!ref.current) return;

      const { width } = ref.current.getBoundingClientRect();

      setPosition({
        width,
        opacity: 1,
        left: ref.current.offsetLeft
      })
    }} 
    className='relative z-10 block cursor-pointer uppercase text-[2.5rem] px-10 py-2 text-black mix-blend-normal'>
      {children}
    </li>
  )
}

type CursorProps = {
  position: Position;
}

export const Cursor: React.FC<CursorProps> = ({ position }) => {
    return (
        <li 
        className='absolute z-0 top-3 bottom-3 rounded-xl bg-[#FAF1E6] transition-all duration-300 pointer-events-none'
        style={{
          left: position.left,
          width: position.width,
          opacity: position.opacity
        }} />
    )
}