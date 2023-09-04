import CardProject from "../../utils/CardProject"

const Projects = () => {

    return (
        <section className="mt-32 mx-4">
            <CardProject
                image="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686426251/fusionWeb/Herramientaslogito_nn9mog.webp"
                title="Management tools"
                subtitle="We relieve, organize, plan and structure the processes of your company."
                phrase="Know more"
                href="https://api.whatsapp.com/send/?phone=5491130500025&text=Buenos+dias%2C+estoy+interesado+en+consultoria+y+gestion+de+procesos%21&type=phone_number&app_absent=0"
                left={true}
                fade="fade-right"
                modalTitle="Business management"
                modalOptions={["Management tools", "Comprehensive administrative consulting", "Economic and financial consulting", "Organizational consulting", "Customer service optimization", "Administrative outsourcing"]}
            />

            <CardProject
                image="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686425815/fusionWeb/gesti%C3%B3nlogito_wd7uv0.webp"
                title="Consulting and process management"
                subtitle="Our human resources management is oriented to reach the highest levels of performance and organizational competitiveness."
                phrase="Know more"
                href="https://api.whatsapp.com/send/?phone=5491130500025&text=Buenos+dias%2C+estoy+interesado+en+gestion+y+de+recursos+humanos%21&type=phone_number&app_absent=0"
                left={false}
                fade="fade-left"
                modalTitle="Human Resources"
                modalOptions={["Recruitment and selection", "Consulting and process management", "Performance evaluation", "Consulting and organizational analysis", "Consulting in the implementation of ISO Standards"]}
            />

            <CardProject
                image="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686425939/fusionWeb/itlogito_vyl6pe.webp"
                title="Development of customized projects and IT implementation"
                subtitle="We design, optimize and implement tools that will allow you to speed up the image, positioning and management of your company."
                phrase="Know more"
                href="https://api.whatsapp.com/send/?phone=5491130500025&text=Buenos+dias%2C+estoy+interesado+en+desarrollo+de+software%21&type=phone_number&app_absent=0"
                left={true}
                fade="fade-right"
                modalTitle="IT development"
                modalOptions={["Web development", "Development of customized projects and IT implementation", "Stock control system", "Human resources software"]}
            />

            <CardProject
                image="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686425622/fusionWeb/cyberseguridad_myws5h.webp"
                title="Prevention of scams and labor fraud"
                subtitle="Our automated prevention system and state-of-the-art consulting anticipate possible vulnerabilities and external and internal threats, guaranteeing the protection and proper functioning of the structure of a business, company or administration."
                phrase="Know more"
                href="https://api.whatsapp.com/send/?phone=5491130500025&text=Buenos+dias%2C+estoy+interesado+en+prevencion+de+fraudes%21&type=phone_number&app_absent=0"
                left={false}
                fade="fade-left"
                modalTitle="Cybersecurity and fraud prevention"
                modalOptions={["Fraud prevention", "Anti-fraud protection for businesses", "Virtual fraud prevention", "Labor fraud and fraud prevention", "Comprehensive consulting on risk factors", "Cybersecurity", "Ethical hacking"]}
            />
        </section>
    )
}

export default Projects