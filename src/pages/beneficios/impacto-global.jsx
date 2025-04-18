
import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Users, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

export function ImpactoGlobal() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Impacto Global Inmediato
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              Conecta instantáneamente con el mundo y expande tus horizontes personales y profesionales
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto mt-12"
          >
            <div className="mb-12">
              <p className="text-lg leading-relaxed text-muted-foreground">
                El impacto global de VokaFlow se siente de manera inmediata al permitirte comunicarte 
                fácilmente en múltiples idiomas, eliminando barreras lingüísticas y culturales. 
                Aumenta exponencialmente tus oportunidades personales y profesionales, facilitando 
                interacciones internacionales fluidas y efectivas.
              </p>
            </div>

            <Card className="mb-12 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <img  
                      className="rounded-lg w-full h-auto shadow-xl"
                      alt="Conexiones globales y redes internacionales"
                     src="https://images.unsplash.com/photo-1651372381086-9861c9c81db5" />
                  </div>
                  <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-semibold text-primary">
                      Beneficios Destacados
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <Globe2 className="w-5 h-5 text-primary" />
                        <span>Expansión inmediata de redes profesionales y personales</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        <span>Reducción significativa de barreras lingüísticas y culturales</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-primary" />
                        <span>Incremento en oportunidades de crecimiento global</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">Ejemplos Prácticos</h3>
              <p className="text-lg text-muted-foreground">
                Desde empresarios internacionales hasta estudiantes en intercambio y viajeros 
                frecuentes, el impacto global de VokaFlow es evidente en cada interacción que 
                facilita, permitiendo conexiones efectivas y significativas alrededor del mundo.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <h2 className="text-2xl font-semibold mb-8">
                Descubre cómo lograr tu propio impacto global con VokaFlow
              </h2>
              <Link to="/contacto">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 hover-lift"
                >
                  Comienza Ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
