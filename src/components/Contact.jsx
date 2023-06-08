import { useEffect } from "react";
// import style from "../styles/contact.module.scss"
// import { MdEmail } from "react-icons/md";
// import { MdWhatsapp } from "react-icons/md";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <section className="mx-16 mb-8"
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">

            <h2 className="mt-32 text-5xl font-bold text-left text-brand-blue">
                Contactanos
            </h2>
            <hr></hr>

            {/* <a className={`text-3xl flex flex-row items-center cursor-pointer mt-8 ${style.hoverUp}`} href='mailto:contactoconsultorafusion@gmail.com' target="_blank" rel="noreferrer">
                <MdEmail /> &nbsp; contactoconsultorafusion@gmail.com
            </a>

            <a className={`text-3xl flex flex-row items-center cursor-pointer mt-8 ${style.hoverUp}`} href='https://api.whatsapp.com/send/?phone=5491130500025' target="_blank" rel="noreferrer">
                <MdWhatsapp /> &nbsp; +54 9 11 3050-0025
            </a> */}


        </section>
    )
}

export default Contact