import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Debug environment variables
console.log('=== Firebase Environment Variables Debug ===');
console.log('NODE_ENV:', import.meta.env.NODE_ENV);
console.log('MODE:', import.meta.env.MODE);
console.log('VITE_FIREBASE_API_KEY:', import.meta.env.VITE_FIREBASE_API_KEY ? 'SET' : 'NOT SET');
console.log('VITE_FIREBASE_AUTH_DOMAIN:', import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ? 'SET' : 'NOT SET');
console.log('VITE_FIREBASE_PROJECT_ID:', import.meta.env.VITE_FIREBASE_PROJECT_ID ? 'SET' : 'NOT SET');
console.log('VITE_FIREBASE_STORAGE_BUCKET:', import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ? 'SET' : 'NOT SET');
console.log('VITE_FIREBASE_MESSAGING_SENDER_ID:', import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ? 'SET' : 'NOT SET');
console.log('VITE_FIREBASE_APP_ID:', import.meta.env.VITE_FIREBASE_APP_ID ? 'SET' : 'NOT SET');
console.log('VITE_FIREBASE_MEASUREMENT_ID:', import.meta.env.VITE_FIREBASE_MEASUREMENT_ID ? 'SET' : 'NOT SET');

// Log first few characters of each value (for debugging without exposing secrets)
console.log('API_KEY preview:', import.meta.env.VITE_FIREBASE_API_KEY?.substring(0, 10) + '...');
console.log('PROJECT_ID preview:', import.meta.env.VITE_FIREBASE_PROJECT_ID?.substring(0, 10) + '...');

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyAGiIlrOrehsdOjBlcqiQwSot1mYvhpMnI',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'mahesabirthday-aca69.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'mahesabirthday-aca69',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'mahesabirthday-aca69.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '312973229322',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:312973229322:web:40e2f6a037401180120ef3',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-R3FZXVMPS4'
};

console.log('=== Final Firebase Config ===');
console.log('apiKey:', firebaseConfig.apiKey?.substring(0, 10) + '...');
console.log('authDomain:', firebaseConfig.authDomain);
console.log('projectId:', firebaseConfig.projectId);
console.log('storageBucket:', firebaseConfig.storageBucket);
console.log('messagingSenderId:', firebaseConfig.messagingSenderId);
console.log('appId:', firebaseConfig.appId?.substring(0, 20) + '...');
console.log('measurementId:', firebaseConfig.measurementId);

// Check if all required fields are present
const requiredFields = ['apiKey', 'authDomain', 'projectId', 'storageBucket', 'messagingSenderId', 'appId'];
const missingFields = requiredFields.filter(field => !firebaseConfig[field]);

if (missingFields.length > 0) {
  console.error('❌ Missing Firebase configuration fields:', missingFields);
  throw new Error(`Missing Firebase configuration: ${missingFields.join(', ')}`);
} else {
  console.log('✅ All Firebase configuration fields are present');
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);