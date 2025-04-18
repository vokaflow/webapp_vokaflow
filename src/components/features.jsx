
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Traducción múltiple simultánea',
    description: 'Comunicación fluida en múltiples idiomas en tiempo real',
    icon: "https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/00217ec862dafbf23b91d361e9325575.png",
    alt: "Icono de traducción múltiple",
    path: "/traduccion-multilingue",
    width: 64,
    height: 64
  },
  {
    title: 'Seguridad y privacidad garantizada',
    description: 'Protección avanzada para todas tus conversaciones',
    icon: "https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/df1d5eb3ba75a50b6370a29d73d1c26e.png",
    alt: "Icono de seguridad",
    path: "/seguridad",
    width: 64,
    height: 64
  },
  {
    title: 'Traducción texto a texto',
    description: 'Transmisión instantánea de mensajes escritos',
    icon: "https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/ea44fcf569f81b9fcf149ae0249007fd.png",
    alt: "Icono de traducción de texto",
    path: "/traduccion-texto",
    width: 64,
    height: 64
  },
  {
    title: 'Traducción audio a audio',
    description: 'Conversión de voz en tiempo real',
    icon: "https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/56e71212e4523263005fea632d2711d9.png",
    alt: "Icono de traducción de voz",
    path: "/traduccion-audio",
    width: 64,
    height: 64
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const iconAnimation = {
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "50px" }}
          variants={container}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <Link 
              to={feature.path} 
              key={index}
              prefetch="intent"
            >
              <motion.div 
                variants={item}
                whileHover="hover"
                className="feature-card-wrapper"
                loading="lazy"
              >
                <Card className="feature-card h-full transform transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <motion.div
                      variants={iconAnimation}
                      className="mx-auto mb-4"
                    >
                      <img
                        src={feature.icon}
                        alt={feature.alt}
                        width={feature.width}
                        height={feature.height}
                        className="h-16 w-16 mx-auto"
                        loading="lazy"
                        decoding="async"
                      />
                    </motion.div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
