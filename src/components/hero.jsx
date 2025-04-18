
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
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
            >
              <img
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/27c031f20224ebfd6d12c19920ea4a0b.png"
                alt="VokaFlow Icon"
                width={96}
                height={96}
                className="h-24 md:h-28 mx-auto mb-6"
                loading="eager"
                decoding="async"
              />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Comunícate sin límites, conecta sin fronteras.
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground max-w-[800px] mx-auto leading-relaxed">
              Experimenta conversaciones naturales y fluidas en cualquier idioma, con traducción instantánea de audio y texto. VokaFlow rompe todas las barreras lingüísticas y transforma cada interacción en una conexión global.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            >
              Descubre ahora el poder de comunicarte globalmente
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
