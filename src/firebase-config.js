import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCt5MLMamH2JWum53e5of4WMYsGHeZFuSU",
  authDomain: "rpg-edu-project.firebaseapp.com",
  projectId: "rpg-edu-project",
  storageBucket: "rpg-edu-project.firebasestorage.app",
  messagingSenderId: "615986217208",
  appId: "1:615986217208:web:df7fde08d8141c586a7b0d",
  measurementId: "G-YEW9SZXPQV"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };