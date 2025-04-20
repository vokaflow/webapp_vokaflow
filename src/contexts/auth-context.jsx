
import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  onAuthStateChanged 
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '@/firebase-config';
import { useToast } from '@/components/ui/use-toast';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const createUserDocument = async (user, additionalData = {}) => {
    if (!user) return;

    const userRef = doc(db, 'users', user.uid);
    const userData = {
      email: user.email,
      nombre: user.displayName || additionalData.nombre,
      fecha_registro: serverTimestamp(),
    };

    try {
      await setDoc(userRef, userData);
    } catch (error) {
      console.error('Error creating user document:', error);
      toast({
        title: "Error",
        description: "No se pudo crear el perfil del usuario",
        variant: "destructive",
      });
    }
  };

  const signUp = async (email, password, nombre) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await createUserDocument(user, { nombre });
      toast({
        title: "¡Registro exitoso!",
        description: "Bienvenido a VokaFlow",
      });
      return user;
    } catch (error) {
      toast({
        title: "Error en el registro",
        description: error.message,
        variant: "destructive",
      });
      throw error;
    }
  };

  const signIn = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "¡Inicio de sesión exitoso!",
        description: "Bienvenido de nuevo",
      });
      return user;
    } catch (error) {
      toast({
        title: "Error al iniciar sesión",
        description: error.message,
        variant: "destructive",
      });
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      await createUserDocument(user);
      toast({
        title: "¡Inicio de sesión exitoso!",
        description: "Bienvenido a VokaFlow",
      });
      return user;
    } catch (error) {
      toast({
        title: "Error al iniciar sesión con Google",
        description: error.message,
        variant: "destructive",
      });
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      toast({
        title: "Sesión cerrada",
        description: "Has cerrado sesión correctamente",
      });
    } catch (error) {
      toast({
        title: "Error al cerrar sesión",
        description: error.message,
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
