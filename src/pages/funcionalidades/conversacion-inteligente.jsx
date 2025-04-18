
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Mic, Languages, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

export function ConversacionInteligente() {
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
              Modo Conversación Inteligente
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              Mantén diálogos fluidos y dinámicos con reconocimiento automático de idiomas
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
                Nuestro modo conversación inteligente identifica automáticamente el idioma hablado y 
                facilita una interacción natural y fluida, permitiendo conversaciones dinámicas sin 
                interrupciones en tiempo real.
              </p>
            </div>

            <Card className="mb-12 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <img  
                      className="rounded-lg w-full h-auto shadow-xl"
                      alt="Reconocimiento automático de idiomas"
                     src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6" />
                  </div>
                  <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-semibold text-primary">
                      Características Principales
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <Brain className="w-5 h-5 text-primary" />
                        <span>Reconocimiento automático de idiomas</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Mic className="w-5 h-5 text-primary" />
                        <span>Interacción natural y fluida</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Languages className="w-5 h-5 text-primary" />
                        <span>Soporte multilingüe avanzado</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="feature-card">
                <CardContent className="p-6">
                  <img  
                    className="rounded-lg w-full h-48 object-cover mb-4"
                    alt="Reconocimiento de voz inteligente"
                   src="https://images.unsplash.com/photo-1589254065878-42c9da997008" />
                  <h4 className="text-xl font-semibold mb-2">Reconocimiento Inteligente</h4>
                  <p className="text-muted-foreground">
                    Detecta y adapta automáticamente el idioma durante la conversación
                  </p>
                </CardContent>
              </Card>

              <Card className="feature-card">
                <CardContent className="p-6">
                  <img  
                    className="rounded-lg w-full h-48 object-cover mb-4"
                    alt="Conversación natural fluida"
                   src="https://images.unsplash.com/photo-1521120367316-4d54779e41b5" />
                  <h4 className="text-xl font-semibold mb-2">Conversación Natural</h4>
                  <p className="text-muted-foreground">
                    Mantén diálogos fluidos sin interrupciones técnicas
                  </p>
                </CardContent>
              </Card>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <h2 className="text-2xl font-semibold mb-8">
                Descubre la conversación inteligente de VokaFlow
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
