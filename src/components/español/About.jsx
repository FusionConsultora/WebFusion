import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <section className='w-full bg-brand-blue'
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            id="about">
            <div className='flex flex-col items-center justify-center max-w-5xl p-2 py-20 m-auto text-center '>
                <h3 className='text-3xl xs:text-4xl xl:text-5xl mb-4 leading-[3rem] font-medium text-white'>
                    Nuestro equipo.
                </h3>
                <p className='text-lg tracking-tight md:text-xl text-left text-white font-light'>
                    Nuestro equipo de consultores expertos combina experiencia probada en diversas industrias con un profundo conocimiento local e internacional. Desde la optimización de procesos y la implementación de estrategias de crecimiento hasta el desarrollo organizacional y la gestión de talento humano, cada uno de nuestros servicios está diseñado para maximizar el rendimiento y el impacto positivo en tu empresa.
                </p>

                <p className='text-lg tracking-tight md:text-xl text-left text-white font-medium mt-10'>
                    Contáctanos hoy mismo y descubre por qué somos la elección preferida en consultoría empresarial y recursos humanos en Argentina.
                </p>
                {/* <InvertedButton label='Get expert advice ' /> */}
            </div>
        </section>
    )
}

export default About