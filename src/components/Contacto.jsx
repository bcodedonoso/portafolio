import { useState } from 'react'
import { perfil } from '../data'
import TituloJson from './TituloJson'

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)

  const cambiar = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Sin backend: abre el cliente de correo del visitante con el mensaje ya escrito
  const enviar = (e) => {
    e.preventDefault()
    const asunto = encodeURIComponent(`Contacto desde portafolio - ${form.nombre}`)
    const cuerpo = encodeURIComponent(`${form.mensaje}\n\n${form.nombre} (${form.email})`)
    window.location.href = `mailto:${perfil.correo}?subject=${asunto}&body=${cuerpo}`
    setEnviado(true)
    setForm({ nombre: '', email: '', mensaje: '' })
  }

  const input =
    'mt-1 w-full rounded-xl bg-white border-2 border-tinta/15 px-4 py-3 text-tinta focus:outline-none focus:border-cobalto'

  return (
    <section id="contacto" className="px-5 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <TituloJson
            clave="contacto"
            lineas={['Escríbeme']}
            className="font-mono font-extrabold text-4xl md:text-5xl leading-tight tracking-tighter text-tinta"
          />
          <p className="mt-5 text-lg text-humo max-w-[40ch]">
            ¿Tienes una pregunta, un proyecto o una práctica? Déjame un mensaje o escríbeme directo.
          </p>
          <a
            href={`mailto:${perfil.correo}`}
            className="inline-block mt-8 text-xl md:text-2xl font-bold text-cobalto underline decoration-sol decoration-4 underline-offset-8 break-all"
          >
            {perfil.correo}
          </a>
        </div>

        <form onSubmit={enviar} className="space-y-5">
          <label className="block">
            <span className="font-semibold text-tinta">Nombre</span>
            <input name="nombre" value={form.nombre} onChange={cambiar} required className={input} />
          </label>
          <label className="block">
            <span className="font-semibold text-tinta">Correo</span>
            <input type="email" name="email" value={form.email} onChange={cambiar} required className={input} />
          </label>
          <label className="block">
            <span className="font-semibold text-tinta">Mensaje</span>
            <textarea name="mensaje" rows="5" value={form.mensaje} onChange={cambiar} required className={input} />
          </label>
          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-cobalto text-white font-semibold hover:bg-tinta transition-colors"
          >
            Enviar mensaje
          </button>
          {enviado && <p role="status" className="font-medium text-cobalto">Se abrió tu correo con el mensaje listo para enviar.</p>}
        </form>
      </div>
    </section>
  )
}
