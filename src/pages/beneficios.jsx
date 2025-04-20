
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Globe2, Smile, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const beneficios = [
  {
    title: 'Comunicación Multilingüe al Instante',
    description: 'Conecta instantáneamente en cualquier idioma con traducción precisa en tiempo real.',
    icon: Globe2,
    link: '/beneficios/comunicacion-multilingue',
    image: '/assets/comunicacion-multilingue.jpg',
    imageAlt: 'Demostración de traducción multilingüe en tiempo real - Interfaz mostrando conversaciones fluidas entre diferentes idiomas',
    cta: 'Descubre más'
  },
  {
    title: 'Interfaz Amigable y Eficiente',
    description: 'Disfruta una experiencia de usuario fluida e intuitiva.',
    icon: Smile,
    link: '/beneficios/facilidad-uso',
    image: '/assets/facilidad-uso.jpg',
    imageAlt: 'Interfaz intuitiva de VokaFlow - Panel de control simplificado con funciones de traducción fáciles de usar',
    cta: 'Ver detalles'
  },
  {
    title: 'Comunicación Segura y Confidencial',
    description: 'Protege todas tus conversaciones con la máxima seguridad.',
    icon: Shield,
    link: '/beneficios/seguridad-garantizada',
    image: '/assets/seguridad-garantizada.jpg',
    imageAlt: 'Sistema de seguridad VokaFlow - Visualización de cifrado y protección de datos en tiempo real',
    cta: 'Conoce cómo'
  }
];

export function Beneficios() {
  return (
    <>
      <Helmet>
        <title>Beneficios Exclusivos | VokaFlow</title>
        <meta 
          name="description" 
          content="Explora los beneficios exclusivos de VokaFlow: traducción multilingüe instantánea, interfaz intuitiva y seguridad garantizada."
        />
      </Helmet>

      <div className="min-h-screen pt-20">
        <section className="py-24 bg-background" aria-labelledby="beneficios-title">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="mb-12">
                <LazyLoadImage
                  src="/assets/hero-3.jpg"
                  alt="Panel principal de beneficios VokaFlow - Visualización de características premium y ventajas exclusivas"
                  className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl mb-12"
                  effect="blur"
                  loading="lazy"
                />
              </div>
              
              <h1 id="beneficios-title" className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0078FF] via-[#FFA700] to-[#D8409F]">
                Beneficios Exclusivos de VokaFlow
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Descubre por qué elegir VokaFlow. Ofrecemos comunicación multilingüe instantánea, interfaz fácil de usar y seguridad garantizada.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3 mb-16">
              {beneficios.map((beneficio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={beneficio.link} className="block h-full">
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 bg-[#0078FF]/10 rounded-full flex items-center justify-center">
                            {React.createElement(beneficio.icon, { 
                              className: "w-8 h-8 text-[#0078FF]",
                              "aria-hidden": "true"
                            })}
                          </div>
                          <h2 className="text-2xl font-semibold mb-4">{beneficio.title}</h2>
                          <LazyLoadImage
                            src={beneficio.image}
                            alt={beneficio.imageAlt}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                            effect="blur"
                            loading="lazy"
                          />
                          <p className="text-muted-foreground mb-6">{beneficio.description}</p>
                          <Button 
                            className="w-full bg-[#0078FF] hover:bg-[#D8409F] text-white rounded-lg transition-all duration-300"
                          >
                            {beneficio.cta}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mb-16">
              <LazyLoadImage
                src="/assets/hero-4.jpg"
                alt="Demostración interactiva de beneficios VokaFlow - Tablets mostrando traducción simultánea y características premium en acción"
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg"
                effect="blur"
                loading="lazy"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <Link to="/casos-exito">
                <Button
                  size="lg"
                  className="bg-[#0078FF] hover:bg-[#D8409F] text-white text-lg px-8 py-6 rounded-lg"
                >
                  Explora nuestros casos de éxito
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
