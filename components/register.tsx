'use client';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
import { title } from './primitives';
import Link from 'next/link';
import { auth, firestore } from '../server/firebase/firebaseConfig'; // Убедитесь, что firebaseConfig.ts настроен правильно
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

// Функция для регистрации пользователя и добавления его в Firestore
const registerUser = async (email: string, password: string, name: string) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );
  const user = userCredential.user;

  // Сохраняем данные пользователя в Firestore с использованием UID пользователя
  await setDoc(doc(firestore, 'users', user.uid), {
    name: name,
    email: user.email,
    createdAt: new Date().toISOString(),
  });
};

export const Register: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    setLoading(true);
    setError(null);
    try {
      await registerUser(email, password, name);
      alert('Registered successfully');
    } catch (error: any) {
      setError(error.message || 'Failed to register');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center text-center items-center h-2/3">
      <div className="p-6 w-5/12">
        <h1 className={title()}>Register</h1>
        <div className="flex flex-col place-items-center gap-3 mt-4">
          <Input
            size="sm"
            variant="bordered"
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            onClick={handleRegister}
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </Button>

          {error && <p className="text-red-500 mt-2">{error}</p>}
          <Link href="/login" className="mt-2 text-blue-500 underline">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
