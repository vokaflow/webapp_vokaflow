
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Building2, GraduationCap, Plane } from 'lucide-react';

const casos = [
  {
    titulo: "Negocios Globales",
    descripcion: "Descubre cómo empresas internacionales eliminan las barreras lingüísticas",
    icon: Building2,
    link: "/casos-exito/negocios-globales"
  },
  {
    titulo: "Educación Internacional",
    descripcion: "Estudiantes superando desafíos lingüísticos en el extranjero",
    icon: GraduationCap,
    link: "/casos-exito/educacion-internacional"
  },
  {
    titulo: "Viajes Sin Estrés",
    descripcion: "Experiencias de viaje mejoradas con comunicación fluida",
    icon: Plane,
    link: "/casos-exito/viajes-sin-estres"
  }
];

const testimonios = [
  {
    nombre: "María González",
    cargo: "Gerente de Proyectos Internacionales",
    empresa: "Tech Global Solutions",
    testimonio: "VokaFlow ha transformado completamente nuestra forma de trabajar con equipos internacionales. La traducción simultánea ha mejorado significativamente nuestra productividad multilingüe.",
    avatar: "https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/111c0a44f090b126b1d8fc849e47f9a6.png"
  },
  {
    nombre: "Carlos Rodríguez",
    cargo: "Director de Operaciones",
    empresa: "Innovate Corp",
    testimonio: "La comunicación global efectiva es esencial para nuestro negocio, y VokaFlow ha superado todas nuestras expectativas en traducción simultánea.",
    avatar: "https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/44656263269b77cf0101aeeadd791a7d.png"
  },
  {
    nombre: "Ana Martínez",
    cargo: "Coordinadora de Equipos Remotos",
    empresa: "Digital Solutions",
    testimonio: "La productividad multilingüe de nuestros equipos se ha disparado gracias a VokaFlow. La traducción simultánea hace que la comunicación sea natural y efectiva.",
    avatar: "https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/636a9c423047ec69f0cdd118c482debc.png"
  }
];

export function CasosExito() {
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
              Casos de Éxito con VokaFlow
            </h1>
            <p className="text-xl text-muted-foreground">
              Descubre historias reales de éxito usando VokaFlow
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
                <Link to={caso.link}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="text-center">
                        {React.createElement(caso.icon, { 
                          className: "w-12 h-12 mx-auto mb-4 text-primary" 
                        })}
                        <h2 className="text-2xl font-semibold mb-2">{caso.titulo}</h2>
                        <p className="text-muted-foreground mb-4">{caso.descripcion}</p>
                        <Button variant="ghost" className="text-primary hover:text-primary/90">
                          Ver caso completo →
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonios.map((testimonio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={testimonio.avatar}
                        alt={`Fotografía de ${testimonio.nombre}`}
                        className="w-24 h-24 rounded-full mb-4"
                        loading="lazy"
                      />
                      <h3 className="text-xl font-semibold mb-1">
                        {testimonio.nombre}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        {testimonio.cargo}
                      </p>
                      <p className="text-sm font-medium text-primary mb-4">
                        {testimonio.empresa}
                      </p>
                      <p className="italic text-muted-foreground">
                        "{testimonio.testimonio}"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
