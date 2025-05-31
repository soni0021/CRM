'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button'; // Adjust path if necessary

export default function LoginPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Login to Mini CRM</h1>
      <Button onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>
        Sign in with Google
      </Button>
    </div>
  );
}
