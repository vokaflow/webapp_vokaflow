
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export function Hero() {
  return (
    <>
      <Helmet>
        <title>VokaFlow - Comunicación Global Instantánea con Traducción en Tiempo Real</title>
        <meta 
          name="description" 
          content="Rompe barreras lingüísticas con VokaFlow, la webapp líder en comunicación global instantánea mediante traducción simultánea precisa y segura."
        />
      </Helmet>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16" aria-labelledby="hero-title">
        <div className="absolute inset-0 gradient-bg opacity-10" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-4xl mx-auto"
              >
                <LazyLoadImage
                  src="/assets/hero.jpg"
                  alt="Plataforma VokaFlow en acción - Interfaz de traducción simultánea mostrando conversaciones multilingües en tiempo real"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  effect="blur"
                  loading="lazy"
                />
              </motion.div>
              <h1 id="hero-title" className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                Comunícate sin límites, conecta sin fronteras
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-[800px] mx-auto leading-relaxed">
                Experimenta conversaciones naturales y fluidas en cualquier idioma, con traducción instantánea de audio y texto.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-[#0078FF] hover:bg-[#D8409F] text-white transition-all duration-300 transform hover:scale-105"
              >
                Descubre ahora el poder de comunicarte globalmente
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
