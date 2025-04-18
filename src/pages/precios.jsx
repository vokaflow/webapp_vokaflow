
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: "Explorador",
    description: "Perfecto para viajeros y usuarios ocasionales. Accede a traducciones básicas, ideales para explorar nuevos destinos con confianza.",
    price: "$9.99/mes",
    features: [
      "Traducción instantánea básica",
      "Hasta 3 idiomas disponibles",
      "Uso ocasional hasta 100 traducciones mensuales",
      "Acceso desde móvil y escritorio"
    ],
    cta: "Empieza a explorar ahora",
    gradient: "from-primary/20 via-primary/10 to-transparent"
  },
  {
    name: "Profesional",
    description: "Diseñado para profesionales y estudiantes internacionales que necesitan comunicaciones claras y transcripciones precisas. Incluye soporte avanzado y mayor capacidad de uso.",
    price: "$29.99/mes",
    features: [
      "Traducción avanzada en tiempo real",
      "Hasta 10 idiomas simultáneos",
      "Hasta 1000 traducciones mensuales",
      "Transcripción automática incluida",
      "Soporte técnico prioritario",
      "Acceso multiplataforma"
    ],
    cta: "Potencia tu comunicación",
    popular: true,
    gradient: "from-secondary/20 via-secondary/10 to-transparent"
  },
  {
    name: "Empresarial",
    description: "Solución completa para empresas globales. Traducciones ilimitadas, integraciones personalizadas y soporte prioritario para equipos exigentes.",
    price: "Contacto para cotización personalizada",
    features: [
      "Traducciones y transcripciones ilimitadas",
      "Idiomas ilimitados disponibles",
      "Integración API y soluciones personalizadas",
      "Gestor de cuenta dedicado",
      "Soporte 24/7 prioritario",
      "Formación y asesoría especializada",
      "Acceso empresarial con gestión de usuarios"
    ],
    cta: "Solicita tu cotización personalizada",
    gradient: "from-accent/20 via-accent/10 to-transparent"
  }
];

export function Precios() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Elige tu plan ideal
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Selecciona el plan que más se ajusta a tus necesidades y lleva tu comunicación global al siguiente nivel con VokaFlow
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex"
              >
                <Card className={cn(
                  "flex flex-col w-full hover:shadow-xl transition-all duration-300 relative overflow-hidden backdrop-blur-sm bg-background/60",
                  plan.popular && "border-primary shadow-lg scale-105"
                )}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-bl-lg text-sm font-medium">
                      Más Popular
                    </div>
                  )}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br pointer-events-none",
                    plan.gradient
                  )} />
                  <CardHeader>
                    <CardTitle className="text-2xl md:text-3xl">{plan.name}</CardTitle>
                    <CardDescription className="mt-2 text-base">{plan.description}</CardDescription>
                    <div className="mt-4 font-bold text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                      {plan.price}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                          <span className="text-foreground/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={cn(
                        "w-full text-base py-6 font-semibold tracking-wide",
                        plan.popular
                          ? "bg-primary hover:bg-primary/90"
                          : "bg-secondary hover:bg-secondary/90"
                      )}
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
