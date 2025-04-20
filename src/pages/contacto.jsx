
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Facebook, MessageCircle } from 'lucide-react';

export function Contacto() {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: '¡Mensaje enviado con éxito!',
      description: 'Nuestro equipo se pondrá en contacto contigo pronto.',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Atención al Usuario Siempre Disponible | VokaFlow</title>
        <meta name="description" content="Recibe atención personalizada y eficiente cuando más la necesites. Contacta fácilmente con nuestro soporte técnico y resuelve tus consultas al instante." />
      </Helmet>

      <div className="min-h-screen pt-20">
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background pointer-events-none" />
          
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                Atención al Usuario Siempre Disponible
              </h1>
              <p className="text-xl text-muted-foreground">
                Recibe atención personalizada y eficiente cuando más la necesites. Contacta fácilmente con nuestro soporte técnico y resuelve tus consultas al instante.
              </p>
            </motion.div>

            <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                <div className="feature-card">
                  <h2 className="text-2xl font-semibold mb-6">Información de Contacto</h2>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <a href="mailto:soporte@vokaflow.com" className="text-muted-foreground hover:text-primary transition-colors">
                          soporte@vokaflow.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <h3 className="font-medium">Teléfono</h3>
                        <a href="tel:+41076459914" className="text-muted-foreground hover:text-primary transition-colors">
                          +41 076 459 94 14
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <h3 className="font-medium">Horario de Atención</h3>
                        <p className="text-muted-foreground">24/7 - Siempre disponibles</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MessageCircle className="w-5 h-5 text-primary" />
                      <div>
                        <h3 className="font-medium">Chat en Vivo</h3>
                        <p className="text-muted-foreground">Disponible en horario laboral</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t">
                    <h3 className="font-medium mb-4">Síguenos en Redes Sociales</h3>
                    <div className="flex space-x-6">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="w-6 h-6" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="w-6 h-6" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Facebook className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="feature-card">
                  <h2 className="text-2xl font-semibold mb-4">Características del Soporte</h2>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Atención rápida y personalizada</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Soporte técnico especializado</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Múltiples canales de contacto</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Resolución rápida de consultas</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="feature-card"
              >
                <h2 className="text-2xl font-semibold mb-6">Envíanos un Mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <FormItem>
                    <FormLabel>Nombre completo</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </FormControl>
                  </FormItem>

                  <FormItem>
                    <FormLabel>Asunto</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Asunto de tu mensaje"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </FormControl>
                  </FormItem>

                  <FormItem>
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                      <textarea
                        className="min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Escribe tu mensaje aquí..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </FormControl>
                  </FormItem>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-6"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
