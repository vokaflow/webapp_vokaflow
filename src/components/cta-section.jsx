
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';

export function CTASection() {
  const { toast } = useToast();
  const [formType, setFormType] = React.useState(null);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    userType: 'personal'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    toast({
      title: "¡Formulario enviado con éxito!",
      description: "Nos pondremos en contacto contigo pronto",
    });
    setFormType(null);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      userType: 'personal'
    });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setFormType('trial')}
              className="bg-[#0078FF] hover:bg-[#0078FF]/90 text-white"
            >
              🚀 Prueba Gratuita
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setFormType('demo')}
              className="border-[#D8409F] text-[#D8409F] hover:bg-[#D8409F]/10"
            >
              📞 Solicita una Demo
            </Button>
          </div>

          {formType && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Tu nombre"
                    />
                  </FormControl>
                </FormItem>

                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="tu@email.com"
                    />
                  </FormControl>
                </FormItem>

                {formType === 'trial' && (
                  <FormItem>
                    <FormLabel>Tipo de Usuario</FormLabel>
                    <FormControl>
                      <select
                        className="w-full h-10 px-3 rounded-md border bg-background"
                        value={formData.userType}
                        onChange={(e) => setFormData({...formData, userType: e.target.value})}
                      >
                        <option value="personal">Personal</option>
                        <option value="empresa">Empresa</option>
                      </select>
                    </FormControl>
                  </FormItem>
                )}

                {formType === 'demo' && (
                  <>
                    <FormItem>
                      <FormLabel>Empresa</FormLabel>
                      <FormControl>
                        <Input
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          placeholder="Nombre de tu empresa"
                        />
                      </FormControl>
                    </FormItem>

                    <FormItem>
                      <FormLabel>Teléfono</FormLabel>
                      <FormControl>
                        <Input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="Tu número de teléfono"
                        />
                      </FormControl>
                    </FormItem>
                  </>
                )}

                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-[#0078FF] hover:bg-[#0078FF]/90 text-white"
                  >
                    {formType === 'trial' ? 'Comenzar Prueba' : 'Solicitar Demo'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setFormType(null)}
                    className="flex-1"
                  >
                    Cancelar
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
