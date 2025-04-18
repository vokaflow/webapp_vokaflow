
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'María González',
    role: 'Gerente de Proyectos Internacionales',
    content: 'VokaFlow ha transformado nuestra comunicación global. Es increíblemente intuitivo y eficiente.',
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Director de Operaciones',
    content: 'La mejor herramienta para comunicación multilingüe que he usado. Simplemente funciona.',
  },
  {
    name: 'Ana Martínez',
    role: 'Coordinadora de Equipos Remotos',
    content: 'Gracias a VokaFlow, nuestras reuniones internacionales son más productivas que nunca.',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Experiencias VokaFlow</h2>
          <p className="text-muted-foreground">Lo que dicen nuestros usuarios</p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <img 
                      className="w-12 h-12 rounded-full mx-auto mb-4"
                      alt={`Avatar de ${testimonial.name}`}
                     src="https://images.unsplash.com/photo-1578390432942-d323db577792" />
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <p className="italic">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
