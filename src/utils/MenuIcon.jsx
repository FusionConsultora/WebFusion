import { useRef, useState } from 'react'

export default function MenuIcon() {
    const [isOpen, setOpen] = useState(false)
    const topLine = useRef(null)
    const middleLine = useRef(null)
    const bottomLine = useRef(null)

    const handleClick = () => {
        if (!isOpen) {
            topLine.current.classList.remove('bg-black', 'animate-topLineClose')
            topLine.current.classList.add('animate-topLine', 'bg-brand')

            bottomLine.current.classList.remove('bg-black', 'animate-bottomLineClose')
            bottomLine.current.classList.add('animate-bottomLine', 'bg-brand')

            middleLine.current.classList.remove('bg-black', 'animate-middleLineClose')
            middleLine.current.classList.add('animate-middleLine', 'bg-brand')
        } else {
            topLine.current.classList.add('bg-black', 'animate-topLineClose')
            topLine.current.classList.remove('animate-topLine', 'bg-brand')

            bottomLine.current.classList.add('bg-black', 'animate-bottomLineClose')
            bottomLine.current.classList.remove('animate-bottomLine', 'bg-brand')

            middleLine.current.classList.add('bg-black', 'animate-middleLineClose')
            middleLine.current.classList.remove('animate-middleLine', 'bg-brand')
        }
        setOpen(preValue => !preValue)
    }

    return (
        <button className='w-7 h-7 flex flex-col gap-[5px]' onClick={handleClick} aria-label='buttonNav'>
            <div ref={topLine} className='w-full h-[2px] rounded-md bg-brand-title' />
            <div ref={middleLine} className='w-full h-[2px] rounded-md bg-brand-title ' />
            <div ref={bottomLine} className='w-full h-[2px] rounded-md bg-brand-title ' />
        </button>
    )
}
