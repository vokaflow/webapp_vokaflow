
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Contacto() {
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
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">
              Contáctanos para Mejorar tu Comunicación Global con VokaFlow
            </h1>
            <p className="text-xl text-muted-foreground">
              Contacta al equipo VokaFlow y descubre cómo nuestra solución de traducción simultánea beneficia a tu organización
            </p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-6">
                Información de Contacto para Mejorar Productividad Multilingüe
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a
                    href="mailto:vokaflow@vokaflow.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    vokaflow@vokaflow.com
                  </a>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Síguenos en redes sociales:</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Síguenos en LinkedIn para novedades sobre traducción simultánea"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Síguenos en Twitter para actualizaciones sobre comunicación global"
                    >
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Síguenos en Facebook para noticias sobre productividad multilingüe"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold mb-6">
                Formulario de Contacto para Soluciones de Comunicación Global
              </h2>
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
                    aria-label="Ingresa tu nombre"
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
                    aria-label="Ingresa tu correo electrónico"
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
                    aria-label="Escribe tu mensaje"
                  />
                </FormControl>
              </FormItem>
              <Button type="submit" className="w-full">
                Enviar Mensaje
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
}
