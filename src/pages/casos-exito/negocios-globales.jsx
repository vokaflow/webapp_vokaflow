
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Helmet } from 'react-helmet';

export function NegociosGlobales() {
  return (
    <>
      <Helmet>
        <title>Expande Tu Negocio Internacionalmente | VokaFlow</title>
        <meta name="description" content="Descubre cómo empresas internacionales multiplican su éxito al usar la comunicación multilingüe en tiempo real que ofrece VokaFlow." />
      </Helmet>

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
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Descubre cómo empresas internacionales multiplican su éxito al usar la comunicación multilingüe en tiempo real que ofrece VokaFlow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto mt-12"
            >
              <div className="mb-12">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Empresas globales de diversos sectores han adoptado VokaFlow para eliminar completamente las barreras idiomáticas en sus operaciones internacionales. Desde negociaciones comerciales hasta reuniones internas, VokaFlow facilita interacciones efectivas y claras, sin importar el idioma.
                </p>
              </div>

              <Card className="mb-12 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <img  
                        className="rounded-lg w-full h-auto shadow-xl"
                        alt="Reunión empresarial internacional" src="https://images.unsplash.com/photo-1634213625130-f702915cda99" />
                    </div>
                    <div className="md:w-1/2 space-y-4">
                      <h3 className="text-2xl font-semibold text-primary">
                        Expansión Internacional Exitosa
                      </h3>
                      <p className="text-muted-foreground">
                        Gracias a nuestra tecnología, empresas pueden rápidamente expandirse hacia nuevos mercados, fortaleciendo sus relaciones comerciales y aumentando significativamente su eficiencia operativa global.
                      </p>
                    </div>
                  </div>
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
                  <h3 className="text-xl font-semibold mb-2">Expansión Global</h3>
                  <p className="text-muted-foreground">
                    Expansión eficaz a mercados internacionales con comunicación clara
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="feature-card"
                >
                  <Users className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Equipos Multilingües</h3>
                  <p className="text-muted-foreground">
                    Comunicación fluida en equipos internacionales diversos
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="feature-card"
                >
                  <Building2 className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Eficiencia Operativa</h3>
                  <p className="text-muted-foreground">
                    Incremento significativo en eficiencia operativa global
                  </p>
                </motion.div>
              </div>

              <Card className="mb-12 bg-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <blockquote className="text-xl italic text-primary relative pl-4 border-l-4 border-primary">
                    "VokaFlow ha transformado nuestra forma de hacer negocios internacionalmente. La comunicación fluida y precisa nos ha permitido expandirnos a nuevos mercados con confianza."
                    <footer className="mt-4 text-sm text-muted-foreground">
                      — Carlos R., Director de Expansión Internacional
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <h2 className="text-2xl font-semibold mb-8">
                  ¡Lleva tu negocio al siguiente nivel global con VokaFlow!
                </h2>
                <Link to="/contacto">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
                  >
                    Comienza tu expansión global
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
