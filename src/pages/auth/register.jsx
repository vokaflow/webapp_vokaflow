
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormMessage } from '@/components/ui/form';
import { useAuth } from '@/contexts/auth-context';
import { motion } from 'framer-motion';
import { Spinner } from '@/components/ui/spinner';
import { validateEmail, validatePassword, validatePasswordMatch } from '@/lib/form-validation';
import { cn } from '@/lib/utils';

export function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nombre: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { signUp, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
      confirmPassword: validatePasswordMatch(formData.password, formData.confirmPassword),
      nombre: !formData.nombre ? "El nombre es requerido" : ""
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validación en tiempo real
    setErrors(prev => ({
      ...prev,
      [name]: name === 'confirmPassword' 
        ? validatePasswordMatch(formData.password, value)
        : name === 'password'
        ? validatePassword(value)
        : name === 'email'
        ? validateEmail(value)
        : !value ? "Este campo es requerido" : ""
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await signUp(formData.email, formData.password, formData.nombre);
      navigate('/');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0078FF]/10 to-[#D8409F]/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#0078FF] to-[#D8409F] bg-clip-text text-transparent">
          Crear Cuenta
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              value={formData.nombre}
              onChange={handleChange}
              required
              className={cn("w-full", errors.nombre && "border-red-500")}
            />
            {errors.nombre && <FormMessage>{errors.nombre}</FormMessage>}
          </div>

          <div>
            <Input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
              className={cn("w-full", errors.email && "border-red-500")}
            />
            {errors.email && <FormMessage>{errors.email}</FormMessage>}
          </div>
          
          <div>
            <Input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
              className={cn("w-full", errors.password && "border-red-500")}
            />
            {errors.password && <FormMessage>{errors.password}</FormMessage>}
          </div>

          <div>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className={cn("w-full", errors.confirmPassword && "border-red-500")}
            />
            {errors.confirmPassword && <FormMessage>{errors.confirmPassword}</FormMessage>}
          </div>

          <Button
            type="submit"
            className="w-full bg-[#D8409F] hover:bg-[#D8409F]/90"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <Spinner className="mr-2" />
                <span>Creando cuenta...</span>
              </div>
            ) : (
              'Crear Cuenta'
            )}
          </Button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">O regístrate con</span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full mt-4"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <Spinner className="mr-2" />
                <span>Conectando...</span>
              </div>
            ) : (
              <>
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                Google
              </>
            )}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
