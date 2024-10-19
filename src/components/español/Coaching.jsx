import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Coaching = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 lg:pt-14 mt-4 lg:mt-10" id="Coaching">
            <div
                className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
                aria-hidden="true"
            />
            <div className="mx-auto lg:max-w-[80%] px-6 pt-24 pb-0 ">
                <div className="lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:gap-x-40">

                    <div className="flex flex-col justify-center">
                        <img
                            src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1729357673/fusionWeb/778d24f7-1b7d-468d-8022-4e9150b642c6_pue5ho.webp"
                            alt="Pablo Gonzalez"
                            title="Pablo Gonzalez"
                            className="sm:block aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 "
                        />
                    </div>

                    <div className="col-span-1 mt-5 lg:mt-0">
                        <div>
                            <div className="relative max-w-fit mb-3 rounded-full px-3 py-2 text-lg leading-6 text-gray-600 ring-1 ring-brand-lightViolet/40 hover:ring-brand-lightViolet/60">
                                <p>
                                    ¿Te puedo ayudar?
                                </p>
                            </div>
                            <h1 className="hidden">Pablo Gonzalez</h1>
                            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                Coaching e inteligencia interpersonal. <br />
                            </h1>
                        </div>
                        <div className="mt-6 space-y-5">
                            <p className="text-justify text-lg  text-gray-600">
                                ¿Quieres<span className="font-bold"> potenciar </span> tus habilidades interpersonales y alcanzar tu máximo potencial?
                            </p>
                            <p className="text-justify text-lg  text-gray-600">
                                Descubre cómo el coaching y la inteligencia interpersonal puede ayudarte a <span className="font-bold">mejorar </span> tus relaciones personales y profesionales, <span className="font-bold"> fortalecer </span> tu autoconfianza y <span className="font-bold"> alcanzar </span> tus metas con claridad.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-lg text-gray-600">
                                <li>✅ Desarrolla tus habilidades emocionales</li>
                                <li>✅ Mejora tu gestión del estrés y la ansiedad</li>
                                <li>✅ Resuelve tus conflictos de manera efectiva</li>
                                <li>✅ Construye relaciones más sólidas</li>
                                <li>✅ Desarrolla tus habilidades en liderazgo</li>
                                <li>✅ Comunícate de manera efectiva</li>
                                <li>✅ Gestiona tus emociones</li>
                                <li>✅ Aumenta tu rendimiento laboral</li>
                            </ul>

                            <p className="text-justify text-lg  text-gray-600">
                                Voy a acompañarte en un proceso transformador, donde juntos trabajaremos en potenciar tu inteligencia emocional y social. <span className="font-bold text-brand-violet"> ¡Es el momento de invertir en vos! </span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Coaching;