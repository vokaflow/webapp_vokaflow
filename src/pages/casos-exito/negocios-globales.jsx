
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

export function NegociosGlobales() {
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
              Negocios Globales con VokaFlow
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              Impulsando conexiones comerciales fluidas y exitosas entre culturas e idiomas distintos
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
                Los negocios globales enfrentan retos constantes relacionados con las barreras lingüísticas y culturales. 
                VokaFlow rompe estas barreras proporcionando traducción instantánea y precisa en tiempo real. Permite a 
                empresarios, directivos y profesionales negociar, colaborar y comunicarse eficazmente sin importar el 
                idioma que hablen sus socios o clientes.
              </p>
            </div>

            <Card className="mb-12 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <img  
                      className="rounded-lg w-full h-auto shadow-xl"
                      alt="Videoconferencia internacional con gráficos de crecimiento empresarial" src="https://images.unsplash.com/photo-1551135049-8a33b5883817" />
                  </div>
                  <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-semibold text-primary">
                      Caso de éxito: Ana, Empresaria Española
                    </h3>
                    <p className="text-muted-foreground">
                      Ana, empresaria del sector tecnológico, utilizó VokaFlow para negociar un acuerdo estratégico 
                      con una importante empresa japonesa. Gracias a la traducción instantánea y precisa, Ana pudo 
                      presentar claramente su propuesta, entender las necesidades de sus socios potenciales y cerrar 
                      exitosamente un acuerdo crucial para su expansión internacional.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <img  
                    className="rounded-lg w-full h-48 object-cover mb-4"
                    alt="Gráficos de estadísticas de éxito comercial" src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                  <h4 className="text-xl font-semibold mb-2">Resultados Medibles</h4>
                  <p className="text-muted-foreground">
                    Incremento significativo en el éxito de negociaciones internacionales
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <img  
                    className="rounded-lg w-full h-48 object-cover mb-4"
                    alt="Iconos internacionales de negocios" src="https://images.unsplash.com/photo-1561491432-82f2b22a263e" />
                  <h4 className="text-xl font-semibold mb-2">Alcance Global</h4>
                  <p className="text-muted-foreground">
                    Expansión efectiva a nuevos mercados internacionales
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-12 bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <blockquote className="text-xl italic text-primary relative pl-4 border-l-4 border-primary">
                  "VokaFlow eliminó completamente la ansiedad de comunicarme en otro idioma. Me sentí segura, 
                  comprendida y efectiva en mis negociaciones. Ha sido una herramienta esencial para mi 
                  crecimiento profesional internacional."
                  <footer className="mt-4 text-sm text-muted-foreground">
                    — Ana S. (España)
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
                  Traducción instantánea y precisa para negociaciones efectivas
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="feature-card"
              >
                <Users className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Colaboración Efectiva</h3>
                <p className="text-muted-foreground">
                  Facilita reuniones y negociaciones internacionales
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="feature-card"
              >
                <Building2 className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Expansión Internacional</h3>
                <p className="text-muted-foreground">
                  Impulsa el crecimiento global de tu negocio
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
                Descubre cómo VokaFlow puede potenciar también tu negocio global
              </h2>
              <Link to="/contacto">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 hover-lift"
                >
                  Solicita tu Demo Gratuita
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
