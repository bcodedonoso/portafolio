const simbolos = ['{ }', '</>', '( )', ';', '=>', '[ ]', '&&', '//', '</>', '{ }', '=>', '( )', '[ ]', ';']

export default function FondoCodigo() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      {simbolos.map((simbolo, i) => (
        <span
          key={i}
          className="simbolo absolute font-mono font-bold text-cobalto/15 select-none"
          style={{
            left: `${(i * 37) % 95}%`,
            fontSize: `${1.25 + (i % 4) * 0.6}rem`,
            animationDuration: `${16 + (i % 5) * 4}s`,
            // Retraso negativo: al cargar, los símbolos ya están repartidos por la pantalla
            animationDelay: `-${i * 2.3}s`,
          }}
        >
          {simbolo}
        </span>
      ))}
    </div>
  )
}
