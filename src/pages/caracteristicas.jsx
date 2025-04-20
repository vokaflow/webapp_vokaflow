
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';
import { Clock, Accessibility, Globe } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const beneficios = [
  {
    title: "Comunicación Instantánea",
    description: "Traducción inmediata en tiempo real",
    icon: Clock,
    link: "/caracteristicas/comunicacion-instantanea",
    image: "/assets/comunicacion-instantanea.jpg"
  },
  {
    title: "Accesibilidad Total",
    description: "Compatibilidad y uso intuitivo en cualquier dispositivo",
    icon: Accessibility,
    link: "/caracteristicas/accesibilidad-total",
    image: "/assets/accesibilidad-total.jpg"
  },
  {
    title: "Impacto Global",
    description: "Expande tus comunicaciones a nivel internacional fácilmente",
    icon: Globe,
    link: "/caracteristicas/impacto-global",
    image: "/assets/impacto-global.jpg"
  }
];

export function Caracteristicas() {
  return (
    <>
      <Helmet>
        <title>Características Exclusivas | Comunicación, Accesibilidad e Impacto Global - VokaFlow</title>
        <meta 
          name="description" 
          content="Explora las características exclusivas de VokaFlow: traducción simultánea en tiempo real, accesibilidad total y comunicación global inmediata. Únete a la revolución multilingüe."
        />
      </Helmet>

      <div className="min-h-screen pt-20">
        <section className="py-24 bg-background">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="mb-12">
                <LazyLoadImage
                  src="/assets/hero-1.jpg"
                  alt="Comunicación instantánea con VokaFlow - Interfaz principal mostrando traducción en tiempo real"
                  className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl mb-12"
                  effect="blur"
                  loading="lazy"
                />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0078FF] via-[#FFA700] to-[#D8409F]">
                Descubre las Características Únicas de VokaFlow
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explora las características innovadoras que hacen de VokaFlow tu mejor opción para comunicaciones globales instantáneas.
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
                          {React.createElement(beneficio.icon, { 
                            className: "w-12 h-12 mx-auto mb-4 text-[#0078FF]" 
                          })}
                          <h2 className="text-2xl font-semibold mb-2">{beneficio.title}</h2>
                          <LazyLoadImage
                            src={beneficio.image}
                            alt={`Ilustración de ${beneficio.title} - Funcionalidad VokaFlow en acción`}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                            effect="blur"
                            loading="lazy"
                          />
                          <p className="text-muted-foreground mb-6">{beneficio.description}</p>
                          <Button 
                            className="w-full bg-[#0078FF] hover:bg-[#D8409F] text-white rounded-lg transition-all duration-300"
                          >
                            Ver más
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
                src="/assets/hero-2.jpg"
                alt="Dispositivos tecnológicos mostrando la interfaz de VokaFlow - Demostración de compatibilidad multiplataforma"
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
              <Link to="/beneficios">
                <Button
                  size="lg"
                  className="bg-[#0078FF] hover:bg-[#D8409F] text-white text-lg px-8 py-6 rounded-lg"
                >
                  Descubre todos los Beneficios
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
