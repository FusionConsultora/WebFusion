import { useEffect, useState } from 'react'
import MenuIcon from '../utils/MenuIcon'
import style from '../styles/header.module.scss'
import { motion } from 'framer-motion'

const variants = {
    open: {
        clipPath: 'inset(-40% -20% -20% -40% round 2px)',
        transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.3,
            staggerChildren: 0.05
        },
        boxShadow: '-1px 4px 14px -6px rgba(0,0,0,0.75)'
    },
    closed: {
        clipPath: 'inset(10% 50% 90% 50% round 10px)',
        transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.3
        }
    }
}

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)

    const handleClick = () => {
        setOpenMenu(preValue => !preValue)
    }

    useEffect(() => {
        if (window.scrollY >= 90) {
            setIsScrolled(true)
        }
    }, [])

    useEffect(() => {
        const changeStyles = () => {
            if (window.scrollY >= 90) {
                setIsScrolled(true)
            } else { setIsScrolled(false) }
        }

        window.addEventListener('scroll', changeStyles)

        return () => window.removeEventListener('scroll', changeStyles)
    }, [])

    return (
        <header className={`w-full h-24 top-0 z-50 fixed p-1 ${isScrolled ? 'shadow-md bg-white animate-fadeInDown' : ''}`}>
            <motion.nav
                animate={openMenu ? 'open' : 'closed'}
                className='w-full max-w-3xl m-auto h-full p-3 flex lg:max-w-6xl items-center lg:px-10'
            >
                <ul className='w-full h-full grid grid-cols-2'>
                    <li className='mt-[-0.8rem]'>
                        <img src='https://res.cloudinary.com/dkbp6rk0s/image/upload/v1686073426/logopng_sze0w0.webp' alt='Logo de la empresa' className='h-24 w-24 cursor-pointer' />

                    </li>
                    <li className='self-center justify-self-end lg:hidden' onClick={handleClick}>
                        <MenuIcon />
                    </li>
                </ul>
                <motion.ul
                    variants={variants}
                    className={` ${style.nav} absolute w-[90%]  max-w-3xl p-8 text-left ${openMenu ? 'flex' : 'hidden'} flex-col gap-3 text-[1.2rem] font-[400]  top-24  bg-white right-1/2 left-1/2 translate-x-[-50%] `}
                >
                    <li className='cursor-pointer text-brand-title font-semibold '>Home</li>
                    <li className='cursor-pointer text-brand-title font-semibold '>Services</li>
                    <li className='cursor-pointer text-brand-title font-semibold '>Project</li>
                    <li className='cursor-pointer text-brand-title font-semibold '>Pages</li>
                    <li className='cursor-pointer text-brand-title font-semibold '>Blog</li>
                    <li className='cursor-pointer text-brand-title font-semibold '>Contact</li>
                </motion.ul>

                <ul className='hidden w-[90%]  max-w-3xl p-8 text-left lg:flex self-center text-[1rem] gap-x-8 justify-center '>
                    <li className='cursor-pointer text-brand-title font-semibold '>Home</li>
                    <li className='cursor-pointer text-brand-title font-semibold '>Services</li>
                    <li className='cursor-pointer text-brand-title font-semibold '>Project</li>
                    <li className='cursor-pointer text-brand-title font-semibold '>Pages</li>
                    <li className='cursor-pointer text-brand-title font-semibold '>Blog</li>
                    <li className='cursor-pointer text-brand-title font-semibold '>Contact</li>
                </ul>

                {/* <li className={`${style.header_menu} hidden w-16 h-7 flex-col mt-2 gap-[5px] lg:flex cursor-pointer`}>
                    <span className='block w-full h-[3px] bg-brand-title' />
                    <span className='block w-[80%] self-end h-[3px] bg-brand-title' />
                    <span className='block w-[60%] self-end h-[3px] bg-brand-title' />
                </li> */}
            </motion.nav>
        </header>
    )
}

export default Navbar;