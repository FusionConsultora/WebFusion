import Projects from './components/Projects'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import WhatsappButton from './components/WhatsappButton'
import About from './components/About'

function App() {
  return (
    <div className="font-poppins">

      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Clients />
      <Contact />

      <WhatsappButton />
    </div>
  )
}

export default App
