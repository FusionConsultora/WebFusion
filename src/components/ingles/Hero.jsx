import { useEffect } from "react";
import style from "../../styles/hero.module.scss"

import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <section className='relative bg-gradient-to-t from-white via-brand-lightPink/30 to-brand-lightPink/90 md:bg-gradient-to-tr md:from-white md:via-brand-to-brand-lightPink/30 md:to-brand-lightPink/90' id="hero">

            <div className={style.shapeTop}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={style.shapeFill}></path>
                </svg>
            </div>

            <div className='flex flex-col w-full max-w-5xl py-36 m-auto'
                data-aos="fade-down"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">

                <h1 className="hidden">Fusion Consultant, Consulting | IT Development and Business Administration </h1>

                <h2 className='mt-10 mx-6 text-4xl leading-[1.1] text-brand-title font-extrabold text-left sm:text-5xl '>
                    {/* Estás listo para llevar tu &nbsp;
                    {window.innerWidth > 768 ? <br></br> : null}
                    negocio al próximo nivel? */}

                    {window.innerWidth > 768 ?
                        <>
                            Are you ready to take your &nbsp;
                            <br></br>
                            business to the next level?
                        </>
                        :
                        <>
                            Are you ready to take your business to the next level?
                        </>
                    }

                </h2>

                <div className="flex flex-col mx-6 items-start md:grid md:grid-cols-2" >
                    <p className='w-full mt-12 text-2xl leading-10 font-normal text-left text-brand-description'>
                        We are a consulting firm specialized in management and business strategy. We optimize your business
                        to achieve sustainable success. Contact us today!
                    </p>
                    <div className="lg:ml-48 lg:-mt-10">
                        <img src='https://res.cloudinary.com/dpmum6s9p/image/upload/v1686430765/fusionWeb/cohete_bblyly.webp' alt='icono header' title="icono header" className='w-full cursor-pointer' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;