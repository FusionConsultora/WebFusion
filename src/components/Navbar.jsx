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
                        <img src='https://res.cloudinary.com/dpmum6s9p/image/upload/v1686146511/fusionWeb/logopng_nu7ff9.webp' alt='Logo de la empresa' className='h-24 w-24 cursor-pointer' />

                    </li>
                    <li className='self-center justify-self-end lg:hidden' onClick={handleClick}>
                        <MenuIcon />
                    </li>
                </ul>
                <motion.ul
                    variants={variants}
                    className={` ${style.nav} absolute w-[90%]  max-w-3xl p-8 text-left ${openMenu ? 'flex' : 'hidden'} flex-col gap-3 text-[1.2rem] font-[400]  top-24  bg-white right-1/2 left-1/2 translate-x-[-50%] `}
                >
                    <li className='cursor-pointer text-brand-title font-semibold '>Inicio</li>
                    <li className='cursor-pointer text-brand-title font-semibold '>Servicios</li>
                    <li className='cursor-pointer text-brand-title font-semibold '>Nosotros</li>
                    <li className='cursor-pointer text-brand-title font-semibold '>Clientes</li>
                    <li className='cursor-pointer text-brand-title font-semibold '>Contacto</li>
                </motion.ul>

                <ul className='hidden w-[90%]  max-w-3xl p-8 text-left lg:flex self-center text-[1rem] gap-x-8 justify-center '>
                    <li className='cursor-pointer text-brand-title font-semibold '>Inicio</li>
                    <li className='cursor-pointer text-brand-title font-semibold '>Servicios</li>
                    <li className='cursor-pointer text-brand-title font-semibold '>Nosotros</li>
                    <li className='cursor-pointer text-brand-title font-semibold '>Clientes</li>
                    <li className='cursor-pointer text-brand-title font-semibold '>Contacto</li>
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