
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

export function CaseStudyTemplate({
  title,
  subtitle,
  description,
  caseTitle,
  caseDescription,
  testimonialQuote,
  testimonialAuthor,
  testimonialLocation,
  features,
  ctaText,
  ctaButtonText,
  imageSrc,
  imageAlt
}) {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              {title}
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              {subtitle}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto mt-12"
          >
            <div className="mb-12">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>

            <Card className="mb-12 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <img
                      className="rounded-lg w-full h-auto shadow-xl"
                      alt={imageAlt}
                      src={imageSrc}
                    />
                  </div>
                  <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-semibold text-primary">
                      {caseTitle}
                    </h3>
                    <p className="text-muted-foreground">
                      {caseDescription}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-12 bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <blockquote className="text-xl italic text-primary relative pl-4 border-l-4 border-primary">
                  {testimonialQuote}
                  <footer className="mt-4 text-sm text-muted-foreground">
                    — {testimonialAuthor} ({testimonialLocation})
                  </footer>
                </blockquote>
              </CardContent>
            </Card>

            <div className="grid gap-8 md:grid-cols-3 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="feature-card"
                >
                  {React.createElement(feature.icon, {
                    className: "w-12 h-12 mb-4 text-primary"
                  })}
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
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
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
