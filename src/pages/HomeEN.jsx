import Projects from '../components/ingles/Projects'
import Clients from '../components/ingles/Clients'
import Contact from '../components/ingles/Contact'
import Hero from '../components/ingles/Hero'
import Navbar from '../components/ingles/Navbar'
import Services from '../components/ingles/Services'
import WhatsappButton from '../components/ingles/WhatsappButton'
import About from '../components/ingles/About'
import LastProjects from '../components/ingles/LastProjects'


const HomeEN = () => {
    return (
        <div className="font-poppins">

            <Navbar />
            <Hero />
            <Services />
            <Projects />
            <About />
            <Clients />
            <LastProjects />
            <Contact />

            <WhatsappButton />
        </div>
    )
}

export default HomeEN