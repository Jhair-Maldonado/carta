import { motion } from 'framer-motion';

export default function Pantalla4Final() {
  // CONFIGURACIÓN DE WHATSAPP
  // 1. Tu número
  const numeroWhatsApp = "51979862917"; 
  
  // 2. Personaliza el mensaje que quieres que te envíen al presionar cada botón
  const mensajeBlanco = "Gracias por leer mi carta, y por ser la persona maravillosa que eres."; 
  const mensajeMorado = "Valoro mucho tu carta y el amor que me has expresado.";

  // 3. Variables de los enlaces corregidas
  const linkBlanco = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeBlanco)}`;
  const linkMorado = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeMorado)}`;

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center p-6 overflow-hidden text-center">
      
      {/* El mensaje principal (Tamaño ajustado para que el párrafo largo encaje bien) */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8, filter: "blur(12px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="text-3xl sm:text-5xl text-white font-serif italic tracking-widest mb-40 sm:mb-64 px-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
      >
        Te amo con todo mi corazón, y siempre estaré aquí para ti, sin importar lo que pase. Eres mi todo.
      </motion.h1>

      {/* Los botones finales */}
      <motion.div 
        className="flex flex-col sm:flex-row gap-6 sm:gap-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 1.5 }}
      >
        <a 
          href={linkBlanco}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-white text-lg px-12 py-4 text-center shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]"
        >
          Cerrar
        </a>

        <a 
          href={linkMorado}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-cyan text-lg px-12 py-4 text-center shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]"
        >
          Abrir WhatsApp
        </a>
      </motion.div>

    </div>
  );
}