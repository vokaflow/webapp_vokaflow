
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';

export function TestimonialTemplate({
  title,
  subtitle,
  testimonials,
  ctaText = "¿Quieres compartir también tu experiencia con VokaFlow?",
  ctaButtonText = "Comparte tu Testimonio"
}) {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              {title}
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              {subtitle}
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      {testimonial.avatar ? (
                        <img
                          src={testimonial.avatar}
                          alt={`Foto de ${testimonial.name}`}
                          className="w-24 h-24 rounded-full mb-4 object-cover"
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <MessageCircle className="w-12 h-12 text-primary" />
                        </div>
                      )}
                      <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{testimonial.context}</p>
                      <p className="italic text-muted-foreground mb-4">"{testimonial.content}"</p>
                      {testimonial.location && (
                        <p className="text-sm font-medium text-primary">
                          {testimonial.location}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <h2 className="text-2xl font-semibold mb-8">
              {ctaText}
            </h2>
            <Link to="/contacto">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 hover-lift"
              >
                {ctaButtonText}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
