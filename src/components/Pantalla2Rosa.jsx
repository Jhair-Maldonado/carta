import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.5, type: "spring", duration: 2.5, bounce: 0 },
      opacity: { delay: i * 0.5, duration: 0.5 },
    },
  }),
};

const popIn = {
  hidden: { scale: 0, opacity: 0 },
  visible: (delay) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: delay, type: "spring", stiffness: 80, damping: 12 },
  }),
};

export default function Pantalla2Rosa({ onContinuar }) {
  const [mensajeActivo, setMensajeActivo] = useState("Toca las 3 flores...");
  const [floresTocadas, setFloresTocadas] = useState([]);

  const mensajes = [
    "Eres lo más bonito que llegó a mi vida.",
    "Gracias por tu paciencia y tu cariño incondicional.",
    "Prometo cuidarte y hacerte sonreír cada día."
  ];

  const handleFlorClick = (index) => {
    setMensajeActivo(mensajes[index]);
    if (!floresTocadas.includes(index)) {
      setFloresTocadas([...floresTocadas, index]);
    }
  };

  const particulas = Array.from({ length: 20 });

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center">
      
      {/* 1. FONDO DE PARTÍCULAS */}
      {particulas.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-pink-400 rounded-full"
          initial={{ y: "100vh", x: `${Math.random() * 100}vw`, opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0, 1, 0] }}
          transition={{ duration: Math.random() * 4 + 3, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
        />
      ))}

      {/* 2. INTERFAZ SUPERIOR (Botón y Mensajes más abajo) */}
<div className="relative z-20 mt-48 sm:mt-56 flex flex-col items-center text-center px-6 w-full max-w-lg pointer-events-none">        
        {/* Botón de Continuar */}
        <div className="h-16 mb-4 pointer-events-auto">
          <AnimatePresence>
            {floresTocadas.length > 0 && (
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                onClick={onContinuar}
                className="btn btn-pink text-lg px-10 py-3 shadow-lg"
              >
                Continuar a la carta
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Mensaje dinámico */}
        <motion.p
          key={mensajeActivo}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-xl sm:text-2xl text-pink-200 font-serif italic min-h-[4rem]"
          style={{ textShadow: "0 0 10px rgba(0,0,0,0.8), 0 0 20px rgba(236,72,153,0.6)" }}
        >
          {mensajeActivo}
        </motion.p>
      </div>

      {/* 3. LA ROSA (Más grande) */}
      <div className="absolute bottom-0 w-full flex justify-center items-end pointer-events-none">
        <svg
          viewBox="0 0 200 200"
          className="w-full max-w-[650px] sm:max-w-[700px] h-auto overflow-visible pointer-events-auto"
          fill="none"
        >
          {/* PASTO */}
          <motion.path d="M0 200 Q 30 160 10 140" stroke="#9d174d" strokeWidth="2" variants={draw} initial="hidden" animate="visible" custom={0.2} />
          <motion.path d="M200 200 Q 170 150 190 130" stroke="#9d174d" strokeWidth="2" variants={draw} initial="hidden" animate="visible" custom={0.4} />

          {/* TALLOS */}
          <motion.path d="M100 200 Q 70 140 50 100" stroke="#db2777" strokeWidth="4" strokeLinecap="round" variants={draw} initial="hidden" animate="visible" custom={1} />
          <motion.path d="M100 200 Q 130 140 150 100" stroke="#db2777" strokeWidth="4" strokeLinecap="round" variants={draw} initial="hidden" animate="visible" custom={1.2} />
          <motion.path d="M100 200 V 80" stroke="#be185d" strokeWidth="5" strokeLinecap="round" variants={draw} initial="hidden" animate="visible" custom={1.5} />

          {/* HOJAS */}
          <motion.path d="M100 170 Q 140 160 130 130 C 110 140 100 160 100 170 Z" fill="#f472b6" variants={popIn} initial="hidden" animate="visible" custom={2.2} style={{ originX: "100px", originY: "170px" }} />
          <motion.path d="M100 140 Q 60 130 70 100 C 85 110 100 140 100 140 Z" fill="#f472b6" variants={popIn} initial="hidden" animate="visible" custom={2.5} style={{ originX: "100px", originY: "140px" }} />

          {/* FLORES INTERACTIVAS */}
          {/* Izquierda */}
          <motion.g onClick={() => handleFlorClick(0)} className="cursor-pointer" variants={popIn} initial="hidden" animate="visible" custom={3} style={{ originX: "50px", originY: "100px" }}>
            <circle cx="50" cy="100" r="25" fill="transparent" className="hover:fill-white/10" />
            <path d="M50 100 C 20 100 10 70 50 65 C 90 70 80 100 50 100 Z" fill="#fbcfe8" />
            <path d="M50 100 C 40 85 45 75 50 75 C 55 75 60 85 50 100 Z" fill="#ec4899" />
          </motion.g>

          {/* Derecha */}
          <motion.g onClick={() => handleFlorClick(2)} className="cursor-pointer" variants={popIn} initial="hidden" animate="visible" custom={3.3} style={{ originX: "150px", originY: "100px" }}>
            <circle cx="150" cy="100" r="25" fill="transparent" className="hover:fill-white/10" />
            <path d="M150 100 C 120 100 110 70 150 65 C 190 70 180 100 150 100 Z" fill="#fbcfe8" />
            <path d="M150 100 C 140 85 145 75 150 75 C 155 75 160 85 150 100 Z" fill="#ec4899" />
          </motion.g>

          {/* Centro */}
          <motion.g onClick={() => handleFlorClick(1)} className="cursor-pointer" variants={popIn} initial="hidden" animate="visible" custom={3.6} style={{ originX: "100px", originY: "80px" }}>
            <circle cx="100" cy="80" r="30" fill="transparent" className="hover:fill-white/10" />
            <path d="M100 80 C 60 80 50 35 100 30 C 150 35 140 80 100 80 Z" fill="#f9a8d4" />
            <path d="M100 80 C 80 60 85 45 100 45 C 115 45 120 60 100 80 Z" fill="#db2777" />
          </motion.g>
        </svg>
      </div>
    </div>
  );
}