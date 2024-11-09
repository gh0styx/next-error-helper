'use client';
import { Button } from '@nextui-org/button';
import { Card } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const NotAuthorized = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl font-bold mb-4">Not Authorized</h1>
      <p className="mb-6">You do not have access to this page.</p>
      <Button
        color="primary"
        onClick={() => router.push('/login')}
        className="w-1/3"
      >
        Back to Login
      </Button>
    </div>
  );
};

export default NotAuthorized;
