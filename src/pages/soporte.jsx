
import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const faqs = [
  {
    question: '¿Cómo funciona la traducción simultánea?',
    answer: 'VokaFlow utiliza tecnología avanzada de procesamiento de lenguaje natural para proporcionar traducción en tiempo real. El sistema detecta automáticamente el idioma y traduce instantáneamente el contenido manteniendo el contexto y la naturalidad de la comunicación.'
  },
  {
    question: '¿Qué idiomas soporta VokaFlow?',
    answer: 'VokaFlow soporta más de 50 idiomas principales, incluyendo español, inglés, francés, alemán, chino, japonés, y muchos más. La lista de idiomas se actualiza regularmente para incluir nuevas opciones.'
  },
  {
    question: '¿Cómo garantizan la privacidad de las conversaciones?',
    answer: 'Implementamos encriptación de extremo a extremo y seguimos estrictos protocolos de seguridad. Tus conversaciones y datos están protegidos en todo momento, cumpliendo con los estándares internacionales de privacidad.'
  }
];

const guias = [
  {
    titulo: 'Primeros Pasos con VokaFlow',
    descripcion: 'Guía completa para comenzar a utilizar todas las funcionalidades de traducción simultánea.',
    link: '/guias/primeros-pasos'
  },
  {
    titulo: 'Optimización de Traducción',
    descripcion: 'Aprende a maximizar la precisión de las traducciones en tiempo real.',
    link: '/guias/optimizacion'
  },
  {
    titulo: 'Configuración Avanzada',
    descripcion: 'Descubre todas las opciones de personalización disponibles.',
    link: '/guias/configuracion'
  }
];

export function Soporte() {
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">
              Centro de Soporte VokaFlow
            </h1>
            <p className="text-xl text-muted-foreground">
              Encuentra respuestas rápidas y guías detalladas para mejorar tu experiencia con la traducción simultánea
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar en el centro de ayuda..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Preguntas Frecuentes</h2>
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Guías de Usuario</h2>
              <div className="space-y-4">
                {guias.map((guia, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{guia.titulo}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{guia.descripcion}</p>
                      <a
                        href={guia.link}
                        className="text-primary hover:underline mt-2 inline-block"
                      >
                        Leer más →
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
