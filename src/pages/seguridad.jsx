
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Seguridad() {
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
            src="https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/df1d5eb3ba75a50b6370a29d73d1c26e.png"
            alt="Icono de seguridad"
            className="w-24 h-24 mx-auto mb-6"
          />
          
          <h1 className="text-4xl font-bold mb-4">
            Seguridad y Privacidad Garantizada
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Tu privacidad y seguridad siempre protegidas, con estándares del más alto nivel
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">¿Qué es?</h2>
              <p className="text-muted-foreground">
                La seguridad y privacidad garantizada de VokaFlow asegura que cada interacción 
                y dato compartido permanezca protegido con la tecnología más avanzada del mercado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">¿Cómo funciona?</h2>
              <ol className="text-left space-y-4">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  Cifrado robusto de extremo a extremo para cada interacción
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  Protección automática contra accesos no autorizados
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  Monitoreo constante y proactivo de la seguridad
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">4.</span>
                  Cumplimiento riguroso de regulaciones internacionales de privacidad
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Ventajas Clave</h2>
              <ul className="text-left space-y-2">
                <li>• Protección absoluta de datos personales</li>
                <li>• Garantía de confidencialidad en cada conversación</li>
                <li>• Seguridad técnica avanzada automática</li>
                <li>• Confianza y tranquilidad para usuarios globales</li>
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
