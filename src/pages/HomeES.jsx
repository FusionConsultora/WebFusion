import Projects from '../components/español/Projects'
import Clients from '../components/español/Clients'
import Contact from '../components/español/Contact'
import Hero from '../components/español/Hero'
import Navbar from '../components/español/Navbar'
import Services from '../components/español/Services'
import WhatsappButton from '../components/español/WhatsappButton'
import About from '../components/español/About'
import LastProjects from '../components/español/LastProjects'
import Coaching from '../components/español/Coaching'

function HomeES() {
    return (
        <div className="font-poppins">

            <Navbar />
            <Hero />
            <Services />
            <Coaching />
            <Projects />
            <About />
            <Clients />
            <LastProjects />
            <Contact />

            <WhatsappButton />
        </div>
    )
}

export default HomeES
