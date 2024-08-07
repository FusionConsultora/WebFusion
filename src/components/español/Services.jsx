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
                Que te ofrecemos?
            </h2>

            <div className="flex flex-col flex-wrap justify-center items-center mx-auto md:flex-row md:items-start md:w-4/5 lg:w-full">
                <CardService
                    image="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686148710/fusionWeb/icongestion_kl820g.webp"
                    title="Gestión Empresarial"
                    subtitle="Optimizamos los procesos de tu empresa."
                    contact="Contactanos"
                />

                <CardService
                    image="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686148710/fusionWeb/iconrecursos_cgkz98.webp"
                    title="Consultoría en RRHH"
                    subtitle="Gestión de recursos humanos para alto rendimiento y competitividad."
                    contact="Contactanos"
                />

                <CardService
                    image="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686149028/fusionWeb/webicon_emhopj.webp"
                    title="Desarrollo IT"
                    subtitle="Llevamos tu software a otro nivel."
                    contact="Contactanos"
                />

                <CardService
                    image="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686149028/fusionWeb/iconseguridad_huzbfb.webp"
                    title="Sustentabilidad y Responsabilidad Social Empresarial"
                    subtitle="Fortaleciendo la sostenibilidad y mitigando riesgos empresariales"
                    contact="Contactanos"
                />
            </div>

        </section>
    )
}

export default Services