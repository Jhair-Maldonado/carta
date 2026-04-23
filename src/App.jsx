import { useState } from 'react'
import Pantalla1Intro from './components/Pantalla1Intro'
import Pantalla2Rosa from './components/Pantalla2Rosa'
import Pantalla3Mensaje from './components/Pantalla3Mensaje'
import Pantalla4Final from './components/Pantalla4Final' // IMPORTAMOS LA PANTALLA FINAL

function App() {
  const [etapa, setEtapa] = useState(1)

  const avanzarEtapa = () => {
    setEtapa((prev) => prev + 1)
  }

  return (
    <main className="w-full min-h-screen bg-black overflow-x-hidden text-white font-sans">
      
      {etapa === 1 && <Pantalla1Intro onContinuar={avanzarEtapa} />}
      
      {etapa === 2 && <Pantalla2Rosa onContinuar={avanzarEtapa} />}
      
      {etapa === 3 && <Pantalla3Mensaje onContinuar={avanzarEtapa} />}
      
      {/* Etapa 4: El Gran Final */}
      {etapa === 4 && <Pantalla4Final />}
      
    </main>
  )
}

export default App