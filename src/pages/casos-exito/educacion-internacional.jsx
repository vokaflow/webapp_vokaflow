
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Book, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

export function EducacionInternacional() {
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
              Educación Internacional con VokaFlow
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              Facilitando el aprendizaje global y superando barreras lingüísticas en entornos educativos
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
                La educación internacional presenta desafíos significativos relacionados con el idioma y 
                la adaptación cultural. VokaFlow facilita a estudiantes y educadores la comunicación fluida 
                mediante traducciones instantáneas precisas, permitiendo una integración sencilla y efectiva 
                en ambientes educativos multiculturales.
              </p>
            </div>

            <Card className="mb-12 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <img  
                      className="rounded-lg w-full h-auto shadow-xl"
                      alt="Estudiantes internacionales colaborando"
                     src="https://images.unsplash.com/photo-1573894998033-c0cef4ed722b" />
                  </div>
                  <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-semibold text-primary">
                      Caso de éxito: Luis, Estudiante Mexicano en Alemania
                    </h3>
                    <p className="text-muted-foreground">
                      Luis, un estudiante universitario mexicano en Alemania, empleó VokaFlow para asistir 
                      a clases dictadas en alemán. Gracias a la traducción simultánea y transcripciones 
                      automáticas, Luis pudo comprender claramente el contenido académico, participar 
                      activamente en discusiones y mejorar significativamente su rendimiento académico y 
                      su experiencia internacional.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-12 bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <blockquote className="text-xl italic text-primary relative pl-4 border-l-4 border-primary">
                  "Con VokaFlow, pude adaptarme rápidamente a un nuevo idioma y aprovechar al máximo mis 
                  estudios. ¡Transformó completamente mi experiencia educativa en el extranjero!"
                  <footer className="mt-4 text-sm text-muted-foreground">
                    — Luis G. (México)
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
                <Book className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Comprensión Total</h3>
                <p className="text-muted-foreground">
                  Traducción instantánea de clases y materiales educativos
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="feature-card"
              >
                <Globe className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Integración Cultural</h3>
                <p className="text-muted-foreground">
                  Participación activa en discusiones y actividades académicas
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="feature-card"
              >
                <GraduationCap className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Éxito Académico</h3>
                <p className="text-muted-foreground">
                  Mejora significativa en el rendimiento y comprensión
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
                Descubre cómo VokaFlow puede transformar tu experiencia educativa internacional
              </h2>
              <Link to="/contacto">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 hover-lift"
                >
                  Solicita tu Prueba Gratuita
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
