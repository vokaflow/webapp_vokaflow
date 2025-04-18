
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe2, Zap, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const beneficios = [
  {
    title: 'Comunicación Instantánea y Precisa',
    description: 'Traducción simultánea, fluida y precisa para conversaciones claras y naturales en tiempo real.',
    icon: Globe2,
    link: '/beneficios/comunicacion-instantanea'
  },
  {
    title: 'Accesibilidad Total',
    description: 'Interactúa fácilmente desde cualquier dispositivo, en cualquier momento y lugar, con una experiencia intuitiva y amigable.',
    icon: Zap,
    link: '/beneficios/accesibilidad-total'
  },
  {
    title: 'Impacto Global Inmediato',
    description: 'Expande tus oportunidades personales y profesionales al conectar instantáneamente con personas de todo el mundo.',
    icon: Smile,
    link: '/beneficios/impacto-global'
  }
];

export function Beneficios() {
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
              Beneficios de Usar VokaFlow
            </h1>
            <p className="text-xl text-muted-foreground">
              Descubre cómo VokaFlow puede transformar tu comunicación global
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={beneficio.link}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 mx-auto mb-4 text-primary">
                        {React.createElement(beneficio.icon, { size: 48 })}
                      </div>
                      <CardTitle className="text-2xl">{beneficio.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-center mb-4">
                        {beneficio.description}
                      </p>
                      <div className="text-center">
                        <Button variant="ghost" className="text-primary hover:text-primary/90">
                          Saber más →
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
