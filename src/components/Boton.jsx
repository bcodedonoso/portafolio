export default function Boton({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="px-6 py-3 rounded-full border-2 border-tinta font-semibold text-tinta hover:bg-tinta hover:text-papel transition-colors"
    >
      {children}
    </a>
  )
}
