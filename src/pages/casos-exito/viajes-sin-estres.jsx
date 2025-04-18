
import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Map, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

export function ViajesSinEstres() {
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
              Viajes Sin Estrés con VokaFlow
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              Transformando tus aventuras internacionales en experiencias relajantes y enriquecedoras
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
                Viajar internacionalmente es emocionante, pero comunicarse en un nuevo idioma puede 
                generar estrés. VokaFlow elimina este obstáculo al proporcionar traducción instantánea 
                y precisa, permitiéndote explorar el mundo con plena confianza y disfrutar cada 
                interacción al máximo.
              </p>
            </div>

            <Card className="mb-12 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <img  
                      className="rounded-lg w-full h-auto shadow-xl"
                      alt="Viajeros disfrutando una conversación"
                     src="https://images.unsplash.com/photo-1587562462785-202f55d1fa09" />
                  </div>
                  <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-semibold text-primary">
                      Caso de éxito: María, Viajera Frecuente
                    </h3>
                    <p className="text-muted-foreground">
                      María es una apasionada viajera que exploró diversos países utilizando VokaFlow. 
                      Gracias a esta tecnología innovadora, pudo interactuar cómodamente con residentes 
                      locales, resolver situaciones cotidianas con facilidad y vivir auténticamente cada 
                      cultura visitada, haciendo de sus viajes experiencias inolvidables y sin estrés.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-12 bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <blockquote className="text-xl italic text-primary relative pl-4 border-l-4 border-primary">
                  "VokaFlow me permitió viajar con tranquilidad y confianza. Ahora puedo explorar 
                  cualquier destino sin preocuparme por las barreras lingüísticas. ¡Cambió radicalmente 
                  mi forma de viajar!"
                  <footer className="mt-4 text-sm text-muted-foreground">
                    — María P. (Argentina)
                  </footer>
                </blockquote>
              </CardContent>
            </Card>

            <div className="grid gap-8 md:grid-cols-3 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="feature-card"
              >
                <Globe className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Comunicación Global</h3>
                <p className="text-muted-foreground">
                  Interactúa con confianza en cualquier idioma durante tus viajes
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="feature-card"
              >
                <Map className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Exploración Sin Límites</h3>
                <p className="text-muted-foreground">
                  Navega fácilmente por nuevos destinos y culturas
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="feature-card"
              >
                <Plane className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Viajes Memorables</h3>
                <p className="text-muted-foreground">
                  Crea conexiones auténticas y experiencias inolvidables
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <h2 className="text-2xl font-semibold mb-8">
                Descubre cómo VokaFlow puede hacer tu próximo viaje inolvidable
              </h2>
              <Link to="/contacto">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 hover-lift"
                >
                  Prueba VokaFlow Gratis
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
