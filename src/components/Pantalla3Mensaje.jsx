import { motion } from 'framer-motion';

export default function Pantalla3Mensaje({ onContinuar }) {
  // Puedes agregar todo el texto que quieras, el contenedor se adaptará y permitirá hacer scroll
  const parrafos = [
    "Se que las cosas han sido difíciles a veces, pero quiero que sepas que cada momento contigo ha sido un regalo.",
    "aunque a veces no lo exprese con palabras, mi corazón siempre está contigo, latiendo al ritmo de un cariño profundo e incondicional.",
    "Si alguna vez dudas de lo que siento, recuerda que mi amor por ti es tan vasto como el cielo y tan constante como las estrellas que nos guían en la noche.",
    "Y mientras lleve conmigo esa liga que me regalaste, cada vez que la vea, recordaré el compromiso que hice contigo de amarte y cuidarte siempre.",
    "Se que me perdi estos dias, pero espero que estas palabras puedan transmitir aunque sea una parte de lo que siento por ti.",
    "No espero que estas palabras arreglen todo, pero sí espero que te recuerden lo mucho que te amo y lo agradecido que estoy de tenerte en mi vida.",
    "La liga que me diste no es solo un accesorio, es una señal de que te estare esperando siempre, sin importar las circunstancias, porque mi amor por ti es incondicional",
    "Estuve escribiendo esto durante días, tratando de encontrar las palabras adecuadas para expresar lo que siento, y aunque sé que ninguna palabra puede capturar completamente la profundidad de mi amor por ti, espero que estas líneas puedan acercarse un poco a lo que hay en mi corazón.",
    "Perdon si te cause incomodides que no supe solucionar, y se que aveces soy insitente, pero si algo aprendi sobre amarte es que el amor no siempre es perfecto, pero es real y sincero",
    "Gracias por ser tú, por tu paciencia, tu comprensión y por el amor que me diste desde el primer día."
  ];

  // Tiempo de espera entre cada párrafo (en segundos)
  const delayEntreLineas = 2.5; 

  return (
    // Cambiamos a overflow-y-auto y py-20 para asegurar el scroll y los márgenes en móviles
    <div className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 py-20 sm:px-12 overflow-x-hidden overflow-y-auto">
      
      {/* Contenedor del texto con w-full para que respete los márgenes laterales */}
      <div className="max-w-3xl text-center space-y-8 sm:space-y-12 z-10 w-full">
        {parrafos.map((texto, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ 
              delay: index * delayEntreLineas, 
              duration: 2, 
              ease: "easeOut" 
            }}
            className="text-white text-lg sm:text-2xl font-light tracking-wide leading-relaxed"
          >
            {texto}
          </motion.p>
        ))}
      </div>

      {/* Botón Blanco de Continuar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          delay: (parrafos.length * delayEntreLineas) + 1.5, 
          duration: 1.5 
        }}
        // mt-24 lo separa del texto, mb-10 deja espacio debajo del botón para el final del scroll
className="mt-48 sm:mt-60 mb-20 z-10"      >
        <button onClick={onContinuar} className="btn btn-white text-lg px-12 py-3">
    Continuar
  </button>
</motion.div>

    </div>
  );
}