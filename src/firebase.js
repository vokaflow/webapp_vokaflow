import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBcpx5gOGxxD1Q9hGZyoz_UA6ZDNB2NkVk",
  authDomain: "vokaflow-c1061.firebaseapp.com",
  projectId: "vokaflow-c1061",
  storageBucket: "vokaflow-c1061.firebasestorage.app",
  messagingSenderId: "991486137413",
  appId: "1:991486137413:web:ee2bcae304a0340ebdbf2c",
  measurementId: "G-W0T4QFDW9J"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 🔐 App Check activado con clave reCAPTCHA válida
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LeN1x4rAAAAADtd0VPoMPCb3AjfSlYRwdD7DWuG'),
  isTokenAutoRefreshEnabled: true
});

export { app, analytics, auth, provider, appCheck };
