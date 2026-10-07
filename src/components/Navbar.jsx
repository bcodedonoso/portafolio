export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-papel/85 backdrop-blur border-b border-tinta/10 z-10">
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
        <a href="#inicio" className="font-mono font-extrabold text-lg text-tinta">Matías G.</a>
        <div className="flex gap-5 md:gap-8 text-sm md:text-base font-medium text-humo">
          <a href="#lenguajes" className="hover:text-cobalto">Lenguajes</a>
          <a href="#contacto" className="hover:text-cobalto">Contacto</a>
        </div>
      </div>
    </nav>
  )
}
