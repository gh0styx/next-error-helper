import { auth } from './firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import Cookies from 'js-cookie';

// Функция handleLogout для использования в других компонентах
export const handleLogout = async () => {
  try {
    await signOut(auth);
    Cookies.remove('firebaseToken'); // Удаляем токен из cookies
  } catch (error) {
    console.error('Failed to logout:', error);
  }
};
