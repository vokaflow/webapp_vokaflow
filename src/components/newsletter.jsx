
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

export function Newsletter() {
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: '¡Suscripción exitosa!',
      description: 'Te has suscrito a nuestro newsletter.',
    });
    setEmail('');
  };

  return (
    <section className="py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Mantente Informado</h2>
          <p className="text-muted-foreground mb-8">
            Suscríbete para recibir las últimas novedades y actualizaciones de VokaFlow
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit">Suscribirse</Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
