
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const benefits = [
  {
    title: "Comunicación instantánea sin barreras idiomáticas",
    description: "Conecta con cualquier persona en tiempo real, sin importar el idioma"
  },
  {
    title: "Disponible en web y aplicaciones móviles",
    description: "Accede desde cualquier dispositivo, en cualquier momento"
  },
  {
    title: "Personalización avanzada",
    description: "Adapta la plataforma según tus preferencias y necesidades"
  },
  {
    title: "Seguridad y privacidad garantizadas",
    description: "Protección completa en cada interacción"
  }
];

export function InfoSections() {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* ¿Qué es VokaFlow? */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0078FF] mb-6">
              ¿Qué es VokaFlow?
            </h2>
            <p className="text-lg text-muted-foreground">
              VokaFlow es tu plataforma integral de traducción simultánea que transforma la comunicación global. Con traducción instantánea de audio y texto en tiempo real, facilitamos conversaciones naturales y fluidas en cualquier idioma, haciendo que la comunicación internacional sea tan simple como hablar con un vecino
            </p>
          </div>

          {/* Beneficios Principales */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0078FF] mb-8">
              Beneficios Principales
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soluciones para Empresas */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0078FF] mb-6">
              Soluciones para Empresas
            </h2>
            <p className="text-lg text-muted-foreground">
              VokaFlow se integra perfectamente con tus herramientas empresariales favoritas como CRM, Slack y Teams. Potencia tu comunicación empresarial con análisis detallado de conversaciones y soporte multilingüe, permitiendo que tu equipo se conecte globalmente sin esfuerzo
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
