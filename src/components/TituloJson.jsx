import { useEffect, useState } from 'react'

function Cursor() {
  return <span className="cursor inline-block w-[0.08em] h-[0.8em] ml-[0.05em] bg-cobalto" />
}

// Muestra un título como valor de un objeto JSON: { "clave": "texto" }
// Con `escribir`, el texto aparece letra por letra con un cursor.
export default function TituloJson({ as: Etiqueta = 'h2', clave, lineas, className, escribir = false }) {
  const total = lineas.join('').length
  const [letras, setLetras] = useState(escribir ? 0 : total)

  useEffect(() => {
    if (!escribir) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLetras(total)
      return
    }
    const intervalo = setInterval(() => setLetras((n) => (n < total ? n + 1 : n)), 90)
    return () => clearInterval(intervalo)
  }, [escribir, total])

  const terminado = letras === total
  const ultima = lineas.length - 1
  const simbolo = 'opacity-50'
  let restantes = letras
  let cursorPuesto = false

  return (
    <Etiqueta className={className}>
      <span className="sr-only">{lineas.join(' ')}</span>
      <span aria-hidden="true">
        <span className={`block text-[0.35em] font-medium tracking-normal mb-[0.4em] ${simbolo}`}>
          {'{ '}"{clave}":
        </span>
        {lineas.map((linea, i) => {
          const visible = linea.slice(0, Math.max(0, restantes))
          restantes -= linea.length
          const cursorAqui = escribir && !terminado && !cursorPuesto && restantes <= 0
          if (cursorAqui) cursorPuesto = true

          return (
            <span key={linea} className="block pl-[0.6em]">
              {i === 0 && <span className={`-ml-[0.6em] ${simbolo}`}>"</span>}
              {visible}
              {cursorAqui && <Cursor />}
              {/* El resto queda invisible para reservar el espacio y que nada salte */}
              <span className="invisible">{linea.slice(visible.length)}</span>
              {i === ultima && <span className={terminado ? simbolo : 'invisible'}>"</span>}
              {i === ultima && escribir && terminado && <Cursor />}
            </span>
          )
        })}
        <span className={`block text-[0.35em] font-medium tracking-normal mt-[0.4em] ${simbolo}`}>
          {'}'}
        </span>
      </span>
    </Etiqueta>
  )
}
