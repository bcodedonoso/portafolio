import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Lenguajes from './components/Lenguajes'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-papel min-h-screen font-sans antialiased">
      <Navbar />
      <Hero />
      <Lenguajes />
      <Contacto />
      <Footer />
    </div>
  )
}
