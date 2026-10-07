import { useState } from 'react'
import { lenguajes } from '../data'
import TituloJson from './TituloJson'

// Pinta en amarillo los textos entre comillas
function Codigo({ texto }) {
  return texto.split(/(".*?")/).map((parte, i) =>
    parte.startsWith('"') ? <span key={i} className="text-sol">{parte}</span> : parte
  )
}

export default function Lenguajes() {
  const [activo, setActivo] = useState(lenguajes[0])

  return (
    <section id="lenguajes" className="bg-cobalto text-papel px-5 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[2fr_3fr] gap-12 items-start">
        <div>
          <TituloJson
            clave="lenguajes"
            lineas={['Lenguajes', 'que uso']}
            className="font-mono font-extrabold text-4xl md:text-5xl leading-tight tracking-tighter"
          />
          <p className="mt-5 text-lg text-papel/80 max-w-[40ch]">
            Elige uno para ver cómo me presento en ese lenguaje.
          </p>
          <div role="tablist" className="flex flex-wrap gap-2 mt-8">
            {lenguajes.map((lenguaje) => (
              <button
                key={lenguaje.nombre}
                role="tab"
                aria-selected={activo.nombre === lenguaje.nombre}
                onClick={() => setActivo(lenguaje)}
                className={`px-5 py-2 rounded-full font-semibold border-2 transition-colors ${
                  activo.nombre === lenguaje.nombre
                    ? 'bg-sol border-sol text-tinta'
                    : 'border-papel/40 hover:border-papel'
                }`}
              >
                {lenguaje.nombre}
              </button>
            ))}
          </div>
        </div>

        <div role="tabpanel" className="bg-tinta rounded-2xl overflow-hidden shadow-[12px_12px_0_var(--color-sol)]">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-papel/10">
            <span className="w-3 h-3 rounded-full bg-papel/20" />
            <span className="w-3 h-3 rounded-full bg-papel/20" />
            <span className="w-3 h-3 rounded-full bg-papel/20" />
            <span className="ml-3 font-mono text-sm text-papel/60">{activo.archivo}</span>
          </div>
          <pre className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed overflow-x-auto min-h-48">
            <code><Codigo texto={activo.codigo} /></code>
          </pre>
        </div>
      </div>
    </section>
  )
}
