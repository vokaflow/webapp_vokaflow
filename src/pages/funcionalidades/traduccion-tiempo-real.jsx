
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Globe, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export function TraduccionTiempoReal() {
  return (
    <>
      <Helmet>
        <title>Traducción en Tiempo Real | VokaFlow</title>
        <meta name="description" content="Experimenta la comunicación global instantánea y precisa con la funcionalidad avanzada de traducción en tiempo real de VokaFlow." />
        <meta name="keywords" content="traducción tiempo real, traducción instantánea, comunicación global, VokaFlow" />
        <link rel="canonical" href="https://vokaflow.com/funcionalidades/traduccion-tiempo-real" />
        <meta property="og:title" content="Traducción en Tiempo Real | VokaFlow" />
        <meta property="og:description" content="Experimenta la comunicación global instantánea y precisa con la funcionalidad avanzada de traducción en tiempo real de VokaFlow." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vokaflow.com/funcionalidades/traduccion-tiempo-real" />
      </Helmet>
      
      <main className="min-h-screen pt-20" role="main">
        <section className="py-24 bg-background" aria-labelledby="traduccion-titulo">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 
                id="traduccion-titulo"
                className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent"
              >
                Traducción en Tiempo Real
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
                Experimenta la comunicación global instantánea y precisa
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
                  Comunícate al instante y sin barreras gracias a nuestra innovadora tecnología de 
                  traducción simultánea de texto y audio. Ideal para conversaciones fluidas en reuniones, 
                  viajes o entornos educativos, garantizando siempre precisión y claridad.
                </p>
              </div>

              <Card className="mb-12 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <LazyLoadImage
                        className="rounded-lg w-full h-auto shadow-xl"
                        alt="Interfaz de traducción en tiempo real mostrando conversaciones multilingües simultáneas"
                        src="https://images.unsplash.com/photo-1581303708722-80d3c511d9eb"
                        effect="blur"
                        loading="lazy"
                        wrapperClassName="w-full"
                      />
                    </div>
                    <div className="md:w-1/2 space-y-4">
                      <h3 className="text-2xl font-semibold text-primary">
                        Características Principales
                      </h3>
                      <ul className="space-y-3" role="list">
                        <li className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-primary" aria-hidden="true" />
                          <span>Traducción instantánea y precisa</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Globe className="w-5 h-5 text-primary" aria-hidden="true" />
                          <span>Soporte para múltiples idiomas</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <MessageSquare className="w-5 h-5 text-primary" aria-hidden="true" />
                          <span>Interfaz intuitiva y fácil de usar</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card className="feature-card">
                  <CardContent className="p-6">
                    <LazyLoadImage
                      className="rounded-lg w-full h-48 object-cover mb-4"
                      alt="Demostración de traducción de texto en tiempo real"
                      src="https://images.unsplash.com/photo-1515414797016-948204e0696a"
                      effect="blur"
                      loading="lazy"
                      wrapperClassName="w-full h-48"
                    />
                    <h4 className="text-xl font-semibold mb-2">Traducción de Texto</h4>
                    <p className="text-muted-foreground">
                      Traduce mensajes escritos instantáneamente manteniendo el contexto y la precisión
                    </p>
                  </CardContent>
                </Card>

                <Card className="feature-card">
                  <CardContent className="p-6">
                    <LazyLoadImage
                      className="rounded-lg w-full h-48 object-cover mb-4"
                      alt="Demostración de traducción de voz en tiempo real"
                      src="https://images.unsplash.com/photo-1569056905458-0cdfd53e3be2"
                      effect="blur"
                      loading="lazy"
                      wrapperClassName="w-full h-48"
                    />
                    <h4 className="text-xl font-semibold mb-2">Traducción de Voz</h4>
                    <p className="text-muted-foreground">
                      Convierte conversaciones habladas a otros idiomas en tiempo real
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
                  Experimenta la traducción en tiempo real de VokaFlow
                </h2>
                <Link to="/contacto">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 hover-lift"
                    aria-label="Iniciar prueba gratuita"
                  >
                    Prueba Gratis Ahora
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
