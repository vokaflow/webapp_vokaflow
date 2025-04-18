
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TraduccionTexto() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container px-4 md:px-6 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al inicio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <img
            src="https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/ea44fcf569f81b9fcf149ae0249007fd.png"
            alt="Icono de traducción de texto"
            className="w-24 h-24 mx-auto mb-6"
          />
          
          <h1 className="text-4xl font-bold mb-4">
            Traducción Texto a Texto
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Traduce textos escritos al instante, manteniendo claridad y precisión absoluta
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">¿Qué es?</h2>
              <p className="text-muted-foreground">
                La Traducción Texto a Texto de VokaFlow convierte instantáneamente mensajes escritos 
                de un idioma a otro, permitiendo conversaciones fluidas y claras sin esperas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">¿Cómo funciona?</h2>
              <ol className="text-left space-y-4">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  El usuario escribe un texto en su idioma original
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  La tecnología VokaFlow detecta y traduce instantáneamente el texto al idioma destino elegido
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  El receptor lee el mensaje perfectamente traducido en tiempo real
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">4.</span>
                  La comunicación escrita es rápida, precisa y efectiva
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Ventajas Clave</h2>
              <ul className="text-left space-y-2">
                <li>• Traducción instantánea sin tiempos de espera</li>
                <li>• Claridad absoluta y precisión profesional</li>
                <li>• Compatible con múltiples idiomas simultáneamente</li>
                <li>• Fácil integración en chat y mensajería global</li>
              </ul>
            </section>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pt-8"
            >
              <Button 
                className="bg-[#D8409F] text-white hover:bg-[#D8409F]/90 px-8 py-6"
              >
                Probar ahora
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
