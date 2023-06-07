import About from './components/About'
import Clients from './components/Clients'
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
      <Clients />

      <WhatsappButton />

      <div className='h-[40rem] bg-white'> </div>
    </div>
  )
}

export default App
