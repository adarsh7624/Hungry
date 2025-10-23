// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  
  authDomain: "hungry-5d35c.firebaseapp.com",
  projectId: "hungry-5d35c",
  storageBucket: "hungry-5d35c.firebasestorage.app",
  messagingSenderId: "623340916019",
  appId: "1:623340916019:web:3d4dc43be0e7c4fe738246"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}
