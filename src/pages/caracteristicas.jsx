
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Traducción de Texto y Audio en Tiempo Real',
    description: 'Experimenta una comunicación fluida y natural con traducción simultánea de alta precisión en múltiples idiomas.',
    icon: "https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/00217ec862dafbf23b91d361e9325575.png",
    alt: "Icono representando la traducción simultánea multilingüe de VokaFlow",
    path: "/funcionalidades/traduccion-tiempo-real"
  },
  {
    title: 'Modo Conversación Inteligente',
    description: 'Accede a VokaFlow desde cualquier dispositivo y mantén una comunicación global efectiva sin interrupciones.',
    icon: "https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/df1d5eb3ba75a50b6370a29d73d1c26e.png",
    alt: "Icono ilustrando la seguridad y compatibilidad multiplataforma de VokaFlow",
    path: "/funcionalidades/conversacion-inteligente"
  },
  {
    title: 'Transcripción Automática',
    description: 'Diseño centrado en el usuario que facilita la comunicación global y mejora la productividad del equipo.',
    icon: "https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/ea44fcf569f81b9fcf149ae0249007fd.png",
    alt: "Icono mostrando la interfaz intuitiva de traducción de texto de VokaFlow",
    path: "/funcionalidades/transcripcion-automatica"
  },
  {
    title: 'Traducción de Voz Avanzada',
    description: 'Tecnología de punta para traducción de audio que mantiene el tono y la naturalidad de la conversación.',
    icon: "https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/56e71212e4523263005fea632d2711d9.png",
    alt: "Icono representando la traducción de voz en tiempo real de VokaFlow",
    path: "/funcionalidades/traduccion-tiempo-real"
  }
];

export function Caracteristicas() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">
              Características de VokaFlow: Traducción Simultánea para una Comunicación Global
            </h1>
            <p className="text-xl text-muted-foreground">
              Descubre las funcionalidades clave de VokaFlow que facilitan la traducción simultánea y mejoran la comunicación global en tiempo real
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
              <Link 
                to={feature.path}
                key={index}
                className="block transition-transform hover:scale-105"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="h-full"
                >
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader className="space-y-1">
                      <div className="w-16 h-16 mb-4 mx-auto">
                        <img
                          src={feature.icon}
                          alt={feature.alt}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <CardTitle className="text-2xl text-center">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-center">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
