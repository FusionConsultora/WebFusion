import { useEffect, useState } from 'react'
import MenuIcon from '../../utils/MenuIcon'
import style from '../../styles/header.module.scss'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll';
import { useNavigate } from "react-router-dom";
import { HiLanguage } from "react-icons/hi2";

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
    const navigate = useNavigate();

    const handleClick = () => {
        setOpenMenu(preValue => !preValue)
    }

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue === "spanish") {
            navigate("/");
        } else if (selectedValue === "english") {
            navigate("/en");
        }
    };

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
                        <Link to="hero" smooth={true} offset={-140} href='#'>
                            {/* <img src='https://res.cloudinary.com/dpmum6s9p/image/upload/v1686146511/fusionWeb/logopng_nu7ff9.webp' alt='Logo de la empresa' title="Logo de la empresa" className='h-24 w-24 cursor-pointer' /> */}
                            <img src='https://res.cloudinary.com/dpmum6s9p/image/upload/v1728952576/fusionWeb/iconblackfusion_qr7dcl.webp' alt='Logo de la empresa' title="Logo de la empresa" className='h-24 w-24 cursor-pointer' />
                        </Link>
                    </li>
                    <li className='self-center justify-self-end flex justify-end items-center gap-x-2 lg:hidden'>
                        <div className="relative inline-block">
                            <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                                <HiLanguage color="#000000" width="1rem" />
                            </div>
                            <select
                                className="rounded-md outline-fuchsia-300 cursor-pointer border hover:border-fuchsia-300 focus:outline-none focus:border-fuchsia-300 py-[0.14rem] pl-7"
                                onChange={handleSelectChange}
                            >
                                <option value="spanish" className="bg-fuchsia-100 border-none text-gray-500 text-sm">Español</option>
                                <option value="english" className="bg-fuchsia-100 border-none text-gray-500 text-sm">Inglés</option>
                            </select>
                        </div>
                        <div onClick={handleClick}>
                            <MenuIcon />
                        </div>
                    </li>
                </ul>
                <motion.ul
                    variants={variants}
                    className={` ${style.nav} absolute w-[90%]  max-w-3xl p-8 text-left ${openMenu ? 'flex' : 'hidden'} flex-col gap-3 text-[1.2rem] font-[400]  top-24  bg-white right-1/2 left-1/2 translate-x-[-50%] `}
                >
                    <li>
                        <Link className="cursor-pointer text-brand-title font-semibold border-b-2 border-b-transparent hover:border-b-red-500 transition-all ease-linear duration-150"
                            to="hero" smooth={true} offset={-140} href='#' onClick={handleClick}>
                            Inicio
                        </Link>
                    </li>

                    <li>
                        <Link className="cursor-pointer text-brand-title font-semibold border-b-2 border-b-transparent hover:border-b-red-500 transition-all ease-linear duration-150"
                            to="services" smooth={true} offset={-140} href='#' onClick={handleClick}>
                            Servicios
                        </Link>
                    </li>

                    <li>
                        <Link className="cursor-pointer text-brand-title font-semibold border-b-2 border-b-transparent hover:border-b-red-500 transition-all ease-linear duration-150"
                            to="about" smooth={true} offset={-140} href='#' onClick={handleClick}>
                            Nosotros
                        </Link>
                    </li>

                    <li>
                        <Link className="cursor-pointer text-brand-title font-semibold border-b-2 border-b-transparent hover:border-b-red-500 transition-all ease-linear duration-150"
                            to="clients" smooth={true} offset={-140} href='#' onClick={handleClick}>
                            Clientes
                        </Link>
                    </li>

                    <li>
                        <Link className="cursor-pointer text-brand-title font-semibold border-b-2 border-b-transparent hover:border-b-red-500 transition-all ease-linear duration-150"
                            to="contact" smooth={true} offset={-140} href='#' onClick={handleClick}>
                            Contacto
                        </Link>
                    </li>


                </motion.ul>

                <ul className='hidden w-[90%] max-w-3xl p-8 text-left lg:flex lg:items-center self-center text-[1rem] gap-x-8 justify-center'>
                    <li>
                        <Link className="cursor-pointer text-brand-title font-semibold border-b-2 border-b-transparent hover:border-b-red-500 transition-all ease-linear duration-150"
                            to="hero" smooth={true} offset={-140} href='#'>
                            Inicio
                        </Link>
                    </li>

                    <li>
                        <Link className="cursor-pointer text-brand-title font-semibold border-b-2 border-b-transparent hover:border-b-red-500 transition-all ease-linear duration-150"
                            to="services" smooth={true} offset={-140} href='#'>
                            Servicios
                        </Link>
                    </li>

                    <li>
                        <Link className="cursor-pointer text-brand-title font-semibold border-b-2 border-b-transparent hover:border-b-red-500 transition-all ease-linear duration-150"
                            to="about" smooth={true} offset={-140} href='#'>
                            Nosotros
                        </Link>
                    </li>

                    <li>
                        <Link className="cursor-pointer text-brand-title font-semibold border-b-2 border-b-transparent hover:border-b-red-500 transition-all ease-linear duration-150"
                            to="clients" smooth={true} offset={-140} href='#'>
                            Clientes
                        </Link>
                    </li>

                    <li>
                        <Link className="cursor-pointer text-brand-title font-semibold border-b-2 border-b-transparent hover:border-b-red-500 transition-all ease-linear duration-150"
                            to="contact" smooth={true} offset={-140} href='#'>
                            Contacto
                        </Link>
                    </li>

                    <li>
                        <div className="relative inline-block">
                            <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                                <HiLanguage color="#000000" width="1rem" />
                            </div>
                            <select
                                className="rounded-md outline-fuchsia-300 cursor-pointer border hover:border-fuchsia-300 focus:outline-none focus:border-fuchsia-300 py-[0.14rem] pl-7"
                                onChange={handleSelectChange}
                            >
                                <option value="spanish" className="bg-fuchsia-100 border-none text-gray-500 text-sm">Español</option>
                                <option value="english" className="bg-fuchsia-100 border-none text-gray-500 text-sm">Inglés</option>
                            </select>
                        </div>
                    </li>
                </ul>
            </motion.nav>
        </header>
    )
}

export default Navbar;