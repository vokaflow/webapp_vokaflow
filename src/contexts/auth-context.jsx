
import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { auth, provider } from '@/firebase';
import { useToast } from '@/components/ui/use-toast';
import { getFirebaseErrorMessage } from '@/lib/form-validation';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('Auth state changed:', user ? 'User logged in' : 'User logged out');
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (email, password, nombre) => {
    try {
      console.log('Starting sign up process for:', email);
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      
      console.log('User created, updating profile...');
      await updateProfile(user, {
        displayName: nombre
      });
      
      toast({
        title: "¡Registro exitoso!",
        description: "Bienvenido a VokaFlow",
      });
      return user;
    } catch (error) {
      console.error('Error in signUp:', error);
      const errorMessage = getFirebaseErrorMessage(error.code);
      toast({
        title: "Error en el registro",
        description: errorMessage,
        variant: "destructive",
      });
      throw error;
    }
  };

  const signIn = async (email, password) => {
    try {
      console.log('Starting sign in process for:', email);
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in successfully');
      
      toast({
        title: "¡Inicio de sesión exitoso!",
        description: "Bienvenido de nuevo",
      });
      return user;
    } catch (error) {
      console.error('Error in signIn:', error);
      const errorMessage = getFirebaseErrorMessage(error.code);
      toast({
        title: "Error al iniciar sesión",
        description: errorMessage,
        variant: "destructive",
      });
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    try {
      console.log('Starting Google sign in process');
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Google sign in successful');
      
      toast({
        title: "¡Inicio de sesión exitoso!",
        description: "Bienvenido a VokaFlow",
      });
      
      return user;
    } catch (error) {
      console.error('Error in Google sign in:', error);
      let errorMessage;
      
      if (error.code === 'auth/popup-closed-by-user') {
        errorMessage = "Se cerró la ventana de Google. Por favor, intenta nuevamente.";
      } else if (error.code === 'auth/popup-blocked') {
        errorMessage = "Tu navegador bloqueó la ventana emergente. Por favor, permite ventanas emergentes y vuelve a intentar.";
      } else {
        errorMessage = getFirebaseErrorMessage(error.code);
      }
      
      toast({
        title: "Error al iniciar sesión con Google",
        description: errorMessage,
        variant: "destructive",
      });
      throw error;
    }
  };

  const signOut = async () => {
    try {
      console.log('Starting sign out process');
      await firebaseSignOut(auth);
      console.log('Sign out successful');
      
      toast({
        title: "Sesión cerrada",
        description: "Has cerrado sesión correctamente",
      });
    } catch (error) {
      console.error('Error in signOut:', error);
      const errorMessage = getFirebaseErrorMessage(error.code);
      toast({
        title: "Error al cerrar sesión",
        description: errorMessage,
        variant: "destructive",
      });
      throw error;
    }
  };

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signInWithGoogle,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
