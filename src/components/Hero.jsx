import { perfil } from '../data'
import Boton from './Boton'
import TituloJson from './TituloJson'
import FondoCodigo from './FondoCodigo'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden px-5 pt-32 pb-24 md:pt-40 md:pb-32">
      <FondoCodigo />
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-[1fr_auto] gap-14 items-center">
        <div>
          <TituloJson
            as="h1"
            escribir
            clave="nombre"
            lineas={perfil.nombre.split(' ')}
            className="font-mono font-extrabold text-tinta text-[clamp(2.5rem,8.5vw,6.5rem)] leading-[0.95] tracking-tighter"
          />
          <p className="mt-8 text-xl md:text-2xl font-semibold text-cobalto">{perfil.titulo}</p>
          <p className="mt-4 text-lg leading-relaxed text-humo max-w-[52ch]">
            <span aria-hidden="true" className="block font-mono text-base text-cobalto/70">&lt;p&gt;</span>
            <span className="block pl-6">{perfil.descripcion}</span>
            <span aria-hidden="true" className="block font-mono text-base text-cobalto/70">&lt;/p&gt;</span>
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Boton href={perfil.github}>GitHub</Boton>
            <Boton href={perfil.linkedin}>LinkedIn</Boton>
          </div>
        </div>

        <figure className="relative justify-self-center md:justify-self-end rotate-3">
          <img
            src="/foto.jpg"
            alt={`Foto de ${perfil.nombre}`}
            className="w-60 md:w-80 aspect-square object-cover rounded-[2.5rem] border-[10px] border-white shadow-[12px_12px_0_var(--color-cobalto)]"
          />
          <figcaption className="absolute -bottom-5 -left-6 -rotate-6 bg-sol text-tinta font-bold px-4 py-2 rounded-full">
            {perfil.usuarioGithub}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
