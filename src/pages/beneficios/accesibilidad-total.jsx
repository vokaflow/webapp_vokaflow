
import React from 'react';
import { motion } from 'framer-motion';
import { Computer as Devices, Globe, Smartphone, Laptop, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

export function AccesibilidadTotal() {
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
              Accesibilidad Total
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              Comunicación sin límites desde cualquier dispositivo y lugar
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
                VokaFlow te brinda una accesibilidad completa, permitiéndote comunicarte eficazmente 
                desde tu dispositivo preferido en cualquier lugar del mundo. Su diseño intuitivo y 
                amigable garantiza una experiencia fluida y sin complicaciones, haciendo la 
                comunicación global más accesible que nunca.
              </p>
            </div>

            <Card className="mb-12 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <img  
                      className="rounded-lg w-full h-auto shadow-xl"
                      alt="Múltiples dispositivos mostrando VokaFlow"
                     src="https://images.unsplash.com/photo-1572982408141-5444f29ca3ca" />
                  </div>
                  <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-semibold text-primary">
                      Beneficios Destacados
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <Devices className="w-5 h-5 text-primary" />
                        <span>Uso multiplataforma (móvil, tableta, escritorio)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Globe className="w-5 h-5 text-primary" />
                        <span>Interfaz intuitiva y sencilla de manejar</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Smartphone className="w-5 h-5 text-primary" />
                        <span>Acceso instantáneo desde cualquier ubicación</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">Ejemplos Prácticos</h3>
              <p className="text-lg text-muted-foreground">
                Ya sea desde la comodidad de tu oficina, mientras viajas o en un entorno académico, 
                VokaFlow te ofrece acceso total y constante para comunicarte claramente, eliminando 
                las limitaciones físicas y técnicas habituales.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <h2 className="text-2xl font-semibold mb-8">
                Prueba la accesibilidad total de VokaFlow hoy mismo
              </h2>
              <Link to="/contacto">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 hover-lift"
                >
                  Accede Ahora
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
