// app/logout/page.tsx

'use client';
import { auth } from '../../server/firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      Cookies.remove('firebaseToken'); // Удаляем токен из cookies
      router.push('/login'); // Перенаправляем на страницу входа
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
