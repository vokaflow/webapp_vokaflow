
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: '¡Mensaje enviado!',
      description: 'Nos pondremos en contacto contigo pronto.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Contacto</h2>
          <p className="text-muted-foreground">
            Estamos aquí para ayudarte. Contáctanos en{' '}
            <a
              href="mailto:vokaflow@vokaflow.com"
              className="text-primary hover:underline"
            >
              vokaflow@vokaflow.com
            </a>
          </p>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-md mx-auto space-y-6"
        >
          <FormItem>
            <FormLabel>Nombre</FormLabel>
            <FormControl>
              <Input
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </FormControl>
          </FormItem>
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </FormControl>
          </FormItem>
          <FormItem>
            <FormLabel>Mensaje</FormLabel>
            <FormControl>
              <textarea
                className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Tu mensaje"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
            </FormControl>
          </FormItem>
          <Button type="submit" className="w-full">
            Enviar Mensaje
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
