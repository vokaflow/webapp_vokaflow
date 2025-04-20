
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Building2, GraduationCap, Plane } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const casos = [
  {
    titulo: "Negocios Globales Sin Fronteras",
    descripcion: "Comunicación instantánea efectiva que facilita negociaciones internacionales exitosas.",
    icon: Building2,
    link: "/casos-exito/negocios-globales",
    image: "/assets/negocios-globales.jpg",
    cta: "Ver caso"
  },
  {
    titulo: "Comunicación en Educación Internacional",
    descripcion: "Facilitando aprendizajes internacionales mediante traducción instantánea precisa.",
    icon: GraduationCap,
    link: "/casos-exito/educacion-internacional",
    image: "/assets/educacion-internacional.jpg",
    cta: "Explorar"
  },
  {
    titulo: "Viajes Sin Barreras Lingüísticas",
    descripcion: "Comunicación fluida en cualquier país del mundo para viajeros frecuentes.",
    icon: Plane,
    link: "/casos-exito/viajes-sin-estres",
    image: "/assets/viajes-sin-estres.jpg",
    cta: "Descubrir más"
  }
];

export function CasosExito() {
  return (
    <>
      <Helmet>
        <title>Casos de Éxito en Traducción Simultánea y Comunicación Global | VokaFlow</title>
        <meta 
          name="description" 
          content="Descubre cómo empresas, instituciones educativas y viajeros superan barreras lingüísticas con VokaFlow. Casos reales de éxito en comunicación global."
        />
        <meta name="keywords" content="casos de éxito, traducción simultánea, comunicación global, VokaFlow, negocios internacionales, educación internacional, viajes" />
        <meta property="og:title" content="Casos de Éxito en Traducción Simultánea | VokaFlow" />
        <meta property="og:description" content="Descubre cómo empresas, instituciones educativas y viajeros superan barreras lingüísticas con VokaFlow." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vokaflow.com/casos-exito" />
        <link rel="canonical" href="https://vokaflow.com/casos-exito" />
      </Helmet>

      <div className="min-h-screen pt-20">
        <section className="py-24 bg-background" aria-labelledby="casos-exito-title">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="mb-12">
                <LazyLoadImage
                  src="/assets/hero-5.jpg"
                  alt="Empresas y organizaciones utilizando VokaFlow para comunicación global efectiva"
                  className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl mb-12"
                  effect="blur"
                  loading="lazy"
                />
              </div>
              
              <h1 id="casos-exito-title" className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0078FF] via-[#FFA700] to-[#D8409F]">
                Casos de Éxito VokaFlow: Transformando la Comunicación Global
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Conoce cómo VokaFlow impulsa comunicaciones efectivas en negocios globales, educación internacional y viajes alrededor del mundo gracias a su innovadora traducción simultánea.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3 mb-16">
              {casos.map((caso, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={caso.link} className="block h-full">
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 bg-[#0078FF]/10 rounded-full flex items-center justify-center">
                            {React.createElement(caso.icon, { 
                              className: "w-8 h-8 text-[#0078FF]",
                              "aria-hidden": "true"
                            })}
                          </div>
                          <h2 className="text-2xl font-semibold mb-4">{caso.titulo}</h2>
                          <LazyLoadImage
                            src={caso.image}
                            alt={`Caso de éxito: ${caso.titulo} - Ejemplo de implementación VokaFlow`}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                            effect="blur"
                            loading="lazy"
                          />
                          <p className="text-muted-foreground mb-6">{caso.descripcion}</p>
                          <Button 
                            className="w-full bg-[#0078FF] hover:bg-[#D8409F] text-white rounded-lg transition-all duration-300"
                            aria-label={`Ver detalles del caso de éxito: ${caso.titulo}`}
                          >
                            {caso.cta}
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
                src="/assets/hero-6.jpg"
                alt="Impacto global de VokaFlow: Dispositivos mostrando traducción simultánea en acción"
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
              <Link to="/precios">
                <Button
                  size="lg"
                  className="bg-[#0078FF] hover:bg-[#D8409F] text-white text-lg px-8 py-6 rounded-lg"
                  aria-label="Ver planes y precios de VokaFlow"
                >
                  Descubre nuestros planes
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
