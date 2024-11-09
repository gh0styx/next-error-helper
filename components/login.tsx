'use client';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { title } from './primitives';
import { auth } from '../server/firebase/firebaseConfig';
import { signInWithEmailAndPassword, getIdToken } from 'firebase/auth';
import Cookies from 'js-cookie';

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      // Входим в Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      // Получаем ID токен и сохраняем его в cookies
      const token = await getIdToken(user);
      Cookies.set('firebaseToken', token, { expires: 1 }); // Устанавливаем токен с истечением в 1 день

      alert('Logged in successfully');

      // Перенаправляем на главную страницу после успешного входа
      router.push('/');
    } catch (error: any) {
      setError(error.message || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center text-center items-center h-2/3">
      <div className="p-6 w-5/12">
        <h1 className={title()}>Login</h1>
        <div className="flex flex-col place-items-center gap-3 mt-4">
          <Input
            size="sm"
            variant="bordered"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            size="sm"
            variant="bordered"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            color="primary"
            className="w-full"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </Button>

          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
