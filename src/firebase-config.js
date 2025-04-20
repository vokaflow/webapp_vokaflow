
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";

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
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, auth, db, analytics };
