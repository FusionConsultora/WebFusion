import CardAbout from "../utils/CardAbout"

const About = () => {
    return (
        <section className="mt-32 mx-4">
            <CardAbout
                image="https://web-experto.com.ar/wp-content/uploads/2021/03/solucion_1.png"
                title="Herramientas de gestión"
                subtitle="Relevamos, organizamos, planificamos y estructuramos los procesos de tu empresa."
                phrase="Hagamoslo realidad"
                href="https://api.whatsapp.com/send/?phone=5491130500025&text=Buenos+dias%2C+estoy+interesado+en+consultoria+y+gestion+de+procesos%21&type=phone_number&app_absent=0"
                left={true}
            />

            <CardAbout
                image="https://web-experto.com.ar/wp-content/uploads/2021/03/solucion_1.png"
                title="Consultoría y gestión de procesos"
                subtitle="Nuestra gestión en recursos humanos está orientada a alcanzar los mas altos niveles de desempeño y competitividad organizacional."
                phrase="Me interesa"
                href="https://api.whatsapp.com/send/?phone=5491130500025&text=Buenos+dias%2C+estoy+interesado+en+gestion+y+de+recursos+humanos%21&type=phone_number&app_absent=0"
                left={false}
            />

            <CardAbout
                image="https://web-experto.com.ar/wp-content/uploads/2021/03/solucion_1.png"
                title="Desarrollo de proyectos a medida e implementación IT"
                subtitle="Diseñamos, optimizamos e implementamos herramientas que te permitirán agilizar la imagen, posicionamiento y gestión de tu empresa."
                phrase="Quiero comenzar"
                href="https://api.whatsapp.com/send/?phone=5491130500025&text=Buenos+dias%2C+estoy+interesado+en+desarrollo+de+software%21&type=phone_number&app_absent=0"
                left={true}
            />

            <CardAbout
                image="https://web-experto.com.ar/wp-content/uploads/2021/03/solucion_1.png"
                title="Prevención de estafas y fraudes laborales"
                subtitle="Nuestro sistema de prevención automatizado y una consultoría de vanguardia anticipán las posibles vulnerabilidades y amenazas externas e internas garantizando el resguardo y buen funcionamiento de la estructura de un negocio, empresa o administración."
                phrase="A por ello"
                href="https://api.whatsapp.com/send/?phone=5491130500025&text=Buenos+dias%2C+estoy+interesado+en+prevencion+de+fraudes%21&type=phone_number&app_absent=0"
                left={false}
            />
        </section>
    )
}

export default About