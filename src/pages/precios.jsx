
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Helmet } from 'react-helmet';

const plans = [
  {
    name: "Plan Explorador",
    description: "Inicia tu comunicación global con nuestro plan básico, ideal para usuarios individuales o pequeñas empresas que comienzan a descubrir VokaFlow.",
    price: "$9.99/mes",
    features: [
      "Traducción simultánea básica",
      "Acceso hasta 5 idiomas",
      "Soporte estándar",
      "Uso individual o pequeñas empresas",
      "Traducción de texto y voz básica",
      "Historial de traducciones limitado"
    ],
    cta: "¡Empieza tu viaje global!",
    gradient: "from-primary/20 via-primary/10 to-transparent"
  },
  {
    name: "Plan Profesional",
    description: "Amplía tus horizontes comunicativos con funciones avanzadas, diseñadas para usuarios frecuentes y empresas que buscan eficacia y precisión multilingüe.",
    price: "$29.99/mes",
    features: [
      "Traducción simultánea avanzada",
      "Acceso hasta 20 idiomas",
      "Soporte prioritario",
      "Herramientas para equipos",
      "Funciones especiales para reuniones",
      "Traducción de documentos avanzada",
      "Historial ilimitado"
    ],
    cta: "¡Impulsa tu comunicación profesional!",
    popular: true,
    gradient: "from-secondary/20 via-secondary/10 to-transparent"
  },
  {
    name: "Plan Empresarial",
    description: "Optimiza la comunicación global de tu empresa con una solución completa, segura y personalizada diseñada específicamente para grandes negocios.",
    price: "Contacto para cotización",
    features: [
      "Traducción simultánea ilimitada",
      "Todos los idiomas disponibles",
      "Seguridad avanzada y protección",
      "Integraciones personalizadas",
      "Soporte dedicado 24/7",
      "API empresarial",
      "Panel de administración avanzado",
      "Personalización completa"
    ],
    cta: "¡Solicita tu cotización personalizada!",
    gradient: "from-accent/20 via-accent/10 to-transparent"
  }
];

export function Precios() {
  return (
    <>
      <Helmet>
        <title>Planes y Precios | VokaFlow</title>
        <meta name="description" content="Descubre nuestros planes flexibles adaptados a tus necesidades de comunicación global. Desde soluciones básicas hasta empresariales personalizadas." />
      </Helmet>

      <div className="min-h-screen pt-20">
        <section className="py-24">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                Elige el Plan Perfecto para Ti
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Selecciona el plan que mejor se adapte a tus necesidades y comienza a comunicarte globalmente con VokaFlow
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
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
                          "w-full text-base py-6 font-semibold tracking-wide group",
                          plan.popular
                            ? "bg-primary hover:bg-primary/90"
                            : "bg-secondary hover:bg-secondary/90"
                        )}
                      >
                        {plan.cta}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-16"
            >
              <p className="text-muted-foreground mb-6">
                ¿Necesitas una solución personalizada? Contáctanos para discutir tus necesidades específicas
              </p>
              <Button
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-transform"
                onClick={() => window.location.href = '/contacto'}
              >
                Contactar con Ventas
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
