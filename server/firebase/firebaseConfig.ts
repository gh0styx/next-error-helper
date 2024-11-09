// firebaseConfig.ts

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Импортируем getFirestore из firebase/firestore
import { getStorage } from 'firebase/storage'; // Импортируем getStorage из firebase/storage

// Конфигурация Firebase, которую вы получаете из Firebase Console
const firebaseConfig = {
  apiKey: 'AIzaSyAXQp_JLDaX0ssloUHdBa-OodGgBnxXnR0',
  authDomain: 'error-helper-a709c.firebaseapp.com',
  databaseURL:
    'https://error-helper-a709c-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'error-helper-a709c',
  storageBucket: 'error-helper-a709c.firebasestorage.app',
  messagingSenderId: '103710536588',
  appId: '1:103710536588:web:e3425c47447905d2141ca9',
  measurementId: 'G-PBKJ5N56DC',
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Экспорт необходимых сервисов Firebase
export const auth = getAuth(app);
export const firestore = getFirestore(app); // Экспорт firestore
export const storage = getStorage(app); // Экспорт storage
export default app;
