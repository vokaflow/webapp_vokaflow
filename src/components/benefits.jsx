
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Globe, Zap } from 'lucide-react';

const benefits = [
  {
    icon: <MessageSquare className="h-12 w-12" />,
    title: "Comunicación Instantánea y Precisa",
    description: "Traducción simultánea, fluida y precisa para conversaciones claras y naturales en tiempo real."
  },
  {
    icon: <Globe className="h-12 w-12" />,
    title: "Accesibilidad Total",
    description: "Interactúa fácilmente desde cualquier dispositivo, en cualquier momento y lugar, con una experiencia intuitiva y amigable."
  },
  {
    icon: <Zap className="h-12 w-12" />,
    title: "Impacto Global Inmediato",
    description: "Expande tus oportunidades personales y profesionales al conectar instantáneamente con personas de todo el mundo."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Benefits() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Beneficios</h2>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative p-6 rounded-2xl bg-card hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl" />
              <div className="relative z-10">
                <div className="mb-4 text-primary">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
