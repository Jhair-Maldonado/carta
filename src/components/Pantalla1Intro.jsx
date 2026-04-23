import { useState } from 'react'

export default function Pantalla1Intro({ onContinuar }) {
  // Estado para guardar las coordenadas del mouse
  const [mousePos, setMousePos] = useState({ x: '50%', y: '50%' })

  // Función que se ejecuta cada vez que el mouse se mueve sobre este componente
  const handleMouseMove = (e) => {
    setMousePos({
      x: `${e.clientX}px`,
      y: `${e.clientY}px`,
    })
  }

  return (
    <div
      className="relative w-full h-screen flex flex-col items-center justify-center glow-purple"
      onMouseMove={handleMouseMove}
      style={{
        '--x': mousePos.x,
        '--y': mousePos.y,
      }}
    >
      <button 
        onClick={onContinuar}
        className="btn btn-yellow text-xl px-10 py-4"
      >
        Abrir mensaje
      </button>
    </div>
  )
}