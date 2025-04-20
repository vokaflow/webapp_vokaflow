
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function ValueProposition() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-[44px] font-bold text-[#0078FF] font-montserrat">
            Comunícate instantáneamente en cualquier idioma
          </h2>
          
          <p className="text-[18px] text-[#121212] font-roboto">
            Con VokaFlow, romper las barreras del idioma es fácil, rápido y natural
            Experimenta la traducción simultánea de texto y audio en tiempo real, 
            haciendo que cada interacción global sea clara y efectiva
            Conecta con personas en todo el mundo sin esfuerzo, potenciando tu comunicación al máximo
          </p>

          <p className="text-[22px] italic text-[#D8409F] font-roboto font-medium">
            ¡Empieza a hablar globalmente hoy!
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="text-[18px] px-8 py-6 bg-[#0078FF] text-white font-roboto font-medium hover:bg-[#0078FF]/90"
            >
              Pruébalo Gratis
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
