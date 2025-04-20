
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcpx5gOGxxD1Q9hGZyoz_UA6ZDNB2NkVk",
  authDomain: "vokaflow-c1061.firebaseapp.com",
  projectId: "vokaflow-c1061",
  storageBucket: "vokaflow-c1061.firebasestorage.app",
  messagingSenderId: "991486137413",
  appId: "1:991486137413:web:ee2bcae304a0340ebdbf2c",
  measurementId: "G-W0T4QFDW9J"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, analytics, auth, provider };
