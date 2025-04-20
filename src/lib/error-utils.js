
import { toast } from '@/components/ui/use-toast';

export const errorLogger = {
  log: (error, context = {}) => {
    const errorLog = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      context,
      url: window.location.href,
      userAgent: navigator.userAgent
    };

    // In production, send to error tracking service
    console.error('Error logged:', errorLog);

    // Show user-friendly toast
    toast({
      variant: "destructive",
      title: "Error",
      description: "Ha ocurrido un error. Por favor, inténtalo de nuevo."
    });
  }
};

export const handleAsyncError = async (promise, context = {}) => {
  try {
    return await promise;
  } catch (error) {
    errorLogger.log(error, context);
    throw error;
  }
};

export const validateForm = (data, rules) => {
  const errors = {};
  
  Object.keys(rules).forEach(field => {
    const value = data[field];
    const fieldRules = rules[field];

    if (fieldRules.required && !value) {
      errors[field] = 'Este campo es requerido';
    }

    if (fieldRules.email && value && !/\S+@\S+\.\S+/.test(value)) {
      errors[field] = 'Email inválido';
    }

    if (fieldRules.minLength && value && value.length < fieldRules.minLength) {
      errors[field] = `Mínimo ${fieldRules.minLength} caracteres`;
    }
  });

  return errors;
};
