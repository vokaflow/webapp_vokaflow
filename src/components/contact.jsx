
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { handleAsyncError, validateForm } from '@/lib/error-utils';

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const validationRules = {
    name: { required: true, minLength: 2 },
    email: { required: true, email: true },
    message: { required: true, minLength: 10 },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateForm(formData, validationRules);
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length > 0) {
      toast({
        variant: "destructive",
        title: "Error de validación",
        description: "Por favor, revisa los campos marcados en rojo."
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await handleAsyncError(
        // Simulated API call
        new Promise((resolve) => setTimeout(resolve, 1000)),
        { context: 'contact-form', formData }
      );

      toast({
        title: '¡Mensaje enviado!',
        description: 'Nos pondremos en contacto contigo pronto.',
      });
      
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      // Error already logged by handleAsyncError
      toast({
        variant: "destructive",
        title: "Error al enviar",
        description: "No se pudo enviar el mensaje. Por favor, inténtalo de nuevo."
      });
    } finally {
      setIsSubmitting(false);
    }
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
                className={errors.name ? "border-destructive" : ""}
                disabled={isSubmitting}
                required
              />
            </FormControl>
            {errors.name && <FormMessage>{errors.name}</FormMessage>}
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
                className={errors.email ? "border-destructive" : ""}
                disabled={isSubmitting}
                required
              />
            </FormControl>
            {errors.email && <FormMessage>{errors.email}</FormMessage>}
          </FormItem>
          <FormItem>
            <FormLabel>Mensaje</FormLabel>
            <FormControl>
              <textarea
                className={`min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                  errors.message ? "border-destructive" : ""
                }`}
                placeholder="Tu mensaje"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                disabled={isSubmitting}
                required
              />
            </FormControl>
            {errors.message && <FormMessage>{errors.message}</FormMessage>}
          </FormItem>
          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
