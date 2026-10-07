import { perfil } from '../data'

export default function Footer() {
  return (
    <footer className="px-5 py-8 border-t border-tinta/10 text-humo">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-3">
        <p>© {new Date().getFullYear()} {perfil.nombre}</p>
        <div className="flex gap-6 font-medium">
          <a href={perfil.github} target="_blank" rel="noreferrer" className="hover:text-cobalto">GitHub</a>
          <a href={perfil.linkedin} target="_blank" rel="noreferrer" className="hover:text-cobalto">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
