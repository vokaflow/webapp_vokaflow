
import { toast } from '@/components/ui/use-toast';

export const validateEmail = (email) => {
  if (!email) return "El correo electrónico es requerido";
  if (!/^\S+@\S+\.\S+$/.test(email)) return "Correo electrónico inválido";
  return "";
};

export const validatePassword = (password) => {
  if (!password) return "La contraseña es requerida";
  if (password.length < 8) return "La contraseña debe tener al menos 8 caracteres";
  if (!/(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)) {
    return "La contraseña debe contener letras y números";
  }
  return "";
};

export const validatePasswordMatch = (password, confirmPassword) => {
  if (!confirmPassword) return "Confirma tu contraseña";
  if (password !== confirmPassword) return "Las contraseñas no coinciden";
  return "";
};

export const getFirebaseErrorMessage = (errorCode) => {
  const errorMessages = {
    'auth/email-already-in-use': 'Este correo electrónico ya está registrado',
    'auth/invalid-email': 'Correo electrónico inválido',
    'auth/operation-not-allowed': 'Operación no permitida',
    'auth/weak-password': 'La contraseña es demasiado débil',
    'auth/user-disabled': 'Esta cuenta ha sido deshabilitada',
    'auth/user-not-found': 'No existe una cuenta con este correo electrónico',
    'auth/wrong-password': 'Contraseña incorrecta',
    'auth/invalid-credential': 'Credenciales inválidas',
    'auth/too-many-requests': 'Demasiados intentos fallidos. Por favor, intenta más tarde',
    'auth/network-request-failed': 'Error de conexión. Verifica tu internet',
    'auth/popup-closed-by-user': 'Ventana de inicio de sesión cerrada',
    'auth/cancelled-popup-request': 'Operación cancelada',
    'auth/popup-blocked': 'El navegador bloqueó la ventana emergente',
    'auth/requires-recent-login': 'Por favor, vuelve a iniciar sesión',
  };

  return errorMessages[errorCode] || 'Ha ocurrido un error. Por favor, intenta nuevamente';
};

export const handleAuthError = (error) => {
  console.error('Error de autenticación:', error);
  
  const errorMessage = getFirebaseErrorMessage(error.code);
  
  toast({
    title: "Error",
    description: errorMessage,
    variant: "destructive",
  });
  
  return errorMessage;
};
