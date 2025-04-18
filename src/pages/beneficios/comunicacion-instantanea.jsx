
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

export function ComunicacionInstantanea() {
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
              Comunicación Instantánea y Precisa
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              Experimenta conversaciones fluidas y claras en cualquier idioma, en tiempo real
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
                VokaFlow permite romper todas las barreras lingüísticas con traducciones instantáneas 
                altamente precisas. Gracias a nuestra tecnología avanzada, cada conversación se 
                convierte en una interacción natural y sin esfuerzo, permitiendo una comunicación 
                clara y efectiva en entornos personales y profesionales.
              </p>
            </div>

            <Card className="mb-12 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <img 
                      className="rounded-lg w-full h-auto shadow-xl"
                      alt="Personas comunicándose efectivamente en diferentes idiomas"
                     src="https://images.unsplash.com/photo-1602459192614-a31e98d39881" />
                  </div>
                  <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-semibold text-primary">
                      Beneficios Destacados
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-primary" />
                        <span>Conversaciones en tiempo real sin retrasos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-primary" />
                        <span>Traducciones precisas y confiables</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Globe className="w-5 h-5 text-primary" />
                        <span>Experiencia natural y fluida</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">Ejemplos Prácticos</h3>
              <p className="text-lg text-muted-foreground">
                Ya sea en una reunión internacional de negocios, en una clase universitaria en el 
                extranjero o simplemente durante tus viajes, la comunicación instantánea y precisa 
                de VokaFlow garantiza que tu mensaje sea siempre claro y bien entendido.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <h2 className="text-2xl font-semibold mb-8">
                Comprueba cómo la comunicación instantánea puede cambiar tu vida
              </h2>
              <Link to="/contacto">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 hover-lift"
                >
                  Prueba Gratis Ahora
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
