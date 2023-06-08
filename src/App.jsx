import About from './components/About'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Details from './components/Details'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import WhatsappButton from './components/WhatsappButton'

function App() {
  return (
    <div className="font-poppins">

      <Navbar />
      <Hero />
      <Services />
      <About />
      <Details />
      <Clients />
      <Contact />

      <WhatsappButton />
    </div>
  )
}

export default App
