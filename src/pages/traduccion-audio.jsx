
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TraduccionAudio() {
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
            src="https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/56e71212e4523263005fea632d2711d9.png"
            alt="Icono de traducción de audio"
            className="w-24 h-24 mx-auto mb-6"
          />
          
          <h1 className="text-4xl font-bold mb-4">
            Traducción Audio a Audio
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Convierte fácilmente conversaciones habladas en múltiples idiomas, al instante
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">¿Qué es?</h2>
              <p className="text-muted-foreground">
                La Traducción Audio a Audio de VokaFlow permite convertir en tiempo real el lenguaje 
                hablado en varios idiomas, facilitando conversaciones directas sin necesidad de textos 
                o traducciones manuales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">¿Cómo funciona?</h2>
              <ol className="text-left space-y-4">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  El usuario habla claramente en su idioma original
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  La tecnología VokaFlow reconoce automáticamente el idioma
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  Traduce inmediatamente el audio al idioma seleccionado por el receptor
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">4.</span>
                  El receptor escucha la traducción al instante, sin retrasos ni interrupciones
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Ventajas Clave</h2>
              <ul className="text-left space-y-2">
                <li>• Comunicación directa y natural sin barreras lingüísticas</li>
                <li>• Precisión en tiempo real, incluso en conversaciones rápidas</li>
                <li>• Compatible con reuniones internacionales y eventos globales</li>
                <li>• Mejora significativamente la interacción personal y profesional</li>
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
