import CardService from "../utils/CardService"


const Services = () => {
    return (
        <section className="relative">
            <h2 className="mt-20 text-5xl font-bold text-center text-brand-blue mb-14">
                Que te ofrecemos?
            </h2>

            <div className="flex flex-col flex-wrap justify-center items-center mx-auto md:flex-row md:items-start md:w-4/5 ">
                <CardService
                    image="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686148710/fusionWeb/icongestion_kl820g.webp"
                    title="Gestión Empresarial"
                    subtitle="Optimizamos los procesos de tu empresa."
                />

                <CardService
                    image="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686148710/fusionWeb/iconrecursos_cgkz98.webp"
                    title="Recursos Humanos"
                    subtitle="Gestión de recursos humanos para alto rendimiento y competitividad."
                />

                <CardService
                    image="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686149028/fusionWeb/webicon_emhopj.webp"
                    title="Desarrollo IT"
                    subtitle="Llevamos tu software a otro nivel."
                />

                <CardService
                    image="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686149028/fusionWeb/iconseguridad_huzbfb.webp"
                    title="Prevención de fraudes"
                    subtitle="Protección integral contra amenazas y vulnerabilidades."
                />
            </div>

        </section>
    )
}

export default Services