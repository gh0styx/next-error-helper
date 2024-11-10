'use client';
import { Input } from '@nextui-org/input';
import { Button, Divider } from '@nextui-org/react';
import React, { useState } from 'react';

import Link from 'next/link';
import { auth, firestore } from '../../server/firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { GithubIcon, GoogleIcon } from '../ui/icons';

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

export const Register = () => {
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
    <div className="flex flex-col md:flex-row w-full overflow-hidden">
      {/* Left */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-background">
        <div className="w-full max-w-md p-8 flex flex-col items-center justify-center">
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-2">
            Create Account
          </h3>
          <p className="text-center mb-6 text-gray-400">
            Sign up for a new account to get started
          </p>

          <Button
            variant="bordered"
            color="default"
            className="w-full mb-3"
            startContent={<GoogleIcon />}
          >
            Google
          </Button>
          <Button
            variant="bordered"
            color="default"
            className="w-full mb-5"
            startContent={<GithubIcon />}
          >
            GitHub
          </Button>

          <div className="flex items-center mb-5 w-full">
            <Divider className="flex-grow bg-foreground-200 w-1/3" />
            <span className="px-2 text-foreground-200 whitespace-nowrap">
              OR
            </span>
            <Divider className="flex-grow bg-foreground-200 w-1/3" />
          </div>

          <Input
            fullWidth
            size="md"
            placeholder="Name"
            required={true}
            className="mb-4"
            variant="underlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            fullWidth
            size="md"
            placeholder="Email Address"
            required={true}
            className="mb-4"
            variant="underlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            fullWidth
            required={true}
            size="md"
            placeholder="Password"
            className="mb-4"
            type="password"
            variant="underlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* <div className="flex justify-between items-center mb-4 w-full">
            <Link href="#" className="underline text-sm">
              Forgot password?
            </Link>
          </div> */}

          <Button
            color="primary"
            className="w-full font-semibold"
            onClick={handleRegister}
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Log In'}
          </Button>

          {error && <p className="text-center text-red-500 mt-4">{error}</p>}

          <p className="text-center mt-6">
            Already have an account?{' '}
            <Link href="/sign-in" className="hover:underline text-primary">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden md:flex w-1/2 items-center justify-center p-8">
        <div className="text-center">
          <p className="text-lg font-semibold text-pretty">Error Handler</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
