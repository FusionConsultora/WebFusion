import { useEffect } from "react";
import style from "../styles/contact.module.scss"
import { MdEmail } from "react-icons/md";
import { MdWhatsapp } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <section className="relative"
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">

            <div className={style.shapeBottom}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={style.shapeFill}></path>
                </svg>
            </div>
            <div className={style.boxBottom}> </div>

            <div className="relative mx-14">
                <h2 className="mt-32 text-2xl font-bold text-white w-3/4 mb-6 lg:text-5xl lg:w-2/4">
                    Estás listo para llevar tu negocio al próximo nivel?
                </h2>

            </div>



            <div className="h-72 bg-[#38B6FF] w-full">
                <div className="relative mx-14 mt-1 pb-6 flex flex-col h-full">

                    <div className="items-center w-full">
                        <a className={`text-2xl font-semibold text-gray-700  mx-auto flex flex-row items-center cursor-pointer mt-20 mb-4 ${style.hoverUp} lg:text-5xl`}
                            href='https://api.whatsapp.com/send/?phone=5491130500025'
                            target="_blank"
                            rel="noreferrer">
                            Contactanos &nbsp; <MdWhatsapp />
                        </a>
                        <hr></hr>
                    </div>
                    <div className="flex flex-row justify-between mt-10">
                        <div className="items-center">
                            <p className="text-white text-xs lg:text-2xl">
                                Consultoria & desarrollo
                            </p>
                            {/* <img src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686323062/fusionWeb/consultoriawhite_lnvfg8.webp" className="w-96 mt-5 " /> */}
                        </div>

                        <div className="flex flex-row">
                            <p className="text-white text-xs lg:text-2xl">
                                2023 &copy; all rights reserve Fusion &nbsp;
                            </p>
                            <a className={`text-2xl font-semibold text-gray-700  mx-7 flex flex-row items-center cursor-pointer ${style.hoverUp} lg:text-5xl`}
                                href='https://api.whatsapp.com/send/?phone=5491130500025'
                                target="_blank"
                                rel="noreferrer">
                                <FaLinkedin />
                            </a>
                            <a className={`text-2xl font-semibold text-gray-700  mx-7 flex flex-row items-center cursor-pointer ${style.hoverUp} lg:text-5xl`}
                                href='mailto:contactoconsultorafusion@gmail.com'
                                target="_blank"
                                rel="noreferrer">
                                <MdEmail />
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Contact