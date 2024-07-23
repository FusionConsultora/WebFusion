import { useEffect } from "react";
import CardService from "../../utils/CardService"

import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <section className="relative"
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            id="services"
        >
            <h2 className="mt-20 text-5xl font-bold text-center text-brand-blue mb-14">
                What do we offer you?
            </h2>

            <div className="flex flex-col flex-wrap justify-center items-center mx-auto md:flex-row md:items-start md:w-4/5 lg:w-full">
                <CardService
                    image="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686148710/fusionWeb/icongestion_kl820g.webp"
                    title="Business management"
                    subtitle="We optimize the processes of your company."
                    contact="Contact us"
                />

                <CardService
                    image="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686148710/fusionWeb/iconrecursos_cgkz98.webp"
                    title="HR Consulting"
                    subtitle="Human resources management for high performance and competitiveness."
                    contact="Contact us"
                />

                <CardService
                    image="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686149028/fusionWeb/webicon_emhopj.webp"
                    title="IT development"
                    subtitle="We take your software to another level."
                    contact="Contact us"
                />

                <CardService
                    image="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686149028/fusionWeb/iconseguridad_huzbfb.webp"
                    title="Sustainability and Corporate Social Responsibility"
                    subtitle="Strengthening sustainability and mitigating business risks."
                    contact="Contact us"
                />
            </div>

        </section>
    )
}

export default Services