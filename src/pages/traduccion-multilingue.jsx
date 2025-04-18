
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Globe, Zap } from 'lucide-react';

const features = [
  {
    icon: <MessageSquare className="h-12 w-12" />,
    title: "Traducción en Tiempo Real",
    description: "Disfruta de conversaciones sin esfuerzo en múltiples idiomas gracias a nuestra tecnología avanzada de traducción instantánea de texto y audio. Comunícate claramente sin importar dónde estés ni el idioma que hables."
  },
  {
    icon: <Globe className="h-12 w-12" />,
    title: "Modo Conversación Inteligente",
    description: "Mantén conversaciones dinámicas y fluidas en tiempo real con reconocimiento automático del idioma hablado, ofreciendo una experiencia natural y sin interrupciones."
  },
  {
    icon: <Zap className="h-12 w-12" />,
    title: "Transcripción Automática",
    description: "Genera transcripciones precisas y en tiempo real de tus conversaciones, facilitando la revisión y documentación posterior para uso personal y profesional."
  }
];

const cases = [
  {
    title: "Negocios Globales",
    name: "Ana",
    role: "Empresaria española",
    description: "Ana, empresaria española, usa VokaFlow para negociar contratos fluidamente con clientes en Japón, impulsando sus relaciones comerciales.",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/111c0a44f090b126b1d8fc849e47f9a6.png"
  },
  {
    title: "Educación Internacional",
    name: "Luis",
    role: "Estudiante mexicano",
    description: "Luis, estudiante mexicano en Alemania, utiliza VokaFlow para entender claramente sus clases impartidas en alemán, facilitando su aprendizaje y adaptación.",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/44656263269b77cf0101aeeadd791a7d.png"
  },
  {
    title: "Viajes Sin Estrés",
    name: "María",
    role: "Viajera frecuente",
    description: "María, viajera frecuente, explora nuevos países con confianza gracias a la comunicación sencilla y efectiva que ofrece VokaFlow en cada idioma.",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/636a9c423047ec69f0cdd118c482debc.png"
  }
];

const testimonials = [
  {
    name: "Jorge R.",
    location: "España",
    content: "Gracias a VokaFlow, pude cerrar un acuerdo crucial con mis socios en China. ¡Esta aplicación ha cambiado completamente la forma en que trabajo!"
  },
  {
    name: "Sofía L.",
    location: "Argentina",
    content: "Usar VokaFlow en mi viaje por Europa fue increíble. Sentí que hablaba todos los idiomas sin esfuerzo y pude conectar realmente con las personas locales."
  },
  {
    name: "Carlos M.",
    location: "México",
    content: "Como estudiante en el extranjero, esta app ha hecho que integrarme sea mucho más fácil y cómodo. ¡La recomiendo ampliamente a cualquiera que viva o viaje fuera de su país!"
  }
];

export function TraduccionMultilingue() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Traducción Multilingüe Simultánea
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experimenta la comunicación global sin barreras con nuestra tecnología de traducción instantánea
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Características Principales</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-4 text-primary">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Casos de Uso</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {cases.map((case_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={case_.image}
                        alt={`${case_.name} - ${case_.role}`}
                        className="w-24 h-24 rounded-full mb-4"
                        loading="lazy"
                      />
                      <h3 className="text-xl font-semibold mb-2">{case_.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {case_.name} - {case_.role}
                      </p>
                      <p className="text-muted-foreground">{case_.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonios de Usuarios</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <h3 className="text-xl font-semibold mb-1">{testimonial.name}</h3>
                      <p className="text-sm text-primary mb-4">{testimonial.location}</p>
                      <p className="italic text-muted-foreground">"{testimonial.content}"</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">¿Listo para comunicarte globalmente?</h2>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
              >
                Prueba VokaFlow Ahora
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
