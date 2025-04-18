
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

export function TranscripcionAutomatica() {
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
              Transcripción Automática
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              Accede a transcripciones precisas en tiempo real de tus conversaciones
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
                Con nuestra transcripción automática, convierte instantáneamente conversaciones 
                habladas en texto escrito claro y detallado, facilitando así la revisión y 
                documentación precisa en contextos profesionales y académicos.
              </p>
            </div>

            <Card className="mb-12 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <img  
                      className="rounded-lg w-full h-auto shadow-xl"
                      alt="Interfaz de transcripción automática"
                     src="https://images.unsplash.com/photo-1516321497487-e288fb19713f" />
                  </div>
                  <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-semibold text-primary">
                      Características Principales
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        <span>Transcripción en tiempo real</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Alta precisión y claridad</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        <span>Exportación en múltiples formatos</span>
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
                    alt="Transcripción de reuniones"
                   src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" />
                  <h4 className="text-xl font-semibold mb-2">Reuniones Eficientes</h4>
                  <p className="text-muted-foreground">
                    Captura cada detalle importante de tus reuniones automáticamente
                  </p>
                </CardContent>
              </Card>

              <Card className="feature-card">
                <CardContent className="p-6">
                  <img  
                    className="rounded-lg w-full h-48 object-cover mb-4"
                    alt="Documentación académica"
                   src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173" />
                  <h4 className="text-xl font-semibold mb-2">Documentación Académica</h4>
                  <p className="text-muted-foreground">
                    Ideal para clases, conferencias y presentaciones académicas
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
                Experimenta la transcripción automática de VokaFlow
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
