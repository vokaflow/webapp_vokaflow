
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    title: "Comunicación Multilingüe",
    description: "Conecta instantáneamente en cualquier idioma con traducción precisa en tiempo real",
    link: "/beneficios/comunicacion-multilingue"
  },
  {
    title: "Facilidad de Uso",
    description: "Interfaz intuitiva y amigable para todos los usuarios",
    link: "/beneficios/facilidad-uso"
  },
  {
    title: "Seguridad Garantizada",
    description: "Máxima protección y privacidad en todas tus comunicaciones",
    link: "/beneficios/seguridad-garantizada"
  }
];

export function Benefits() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={benefit.link} className="block h-full">
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground mb-4">{benefit.description}</p>
                    <Button 
                      className="w-full bg-[#0078FF] hover:bg-[#D8409F] text-white rounded-lg transition-all duration-300"
                    >
                      Descubrir más
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
