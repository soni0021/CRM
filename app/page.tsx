'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading
    if (status === 'authenticated') {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  }, [session, status, router]);

  // Optional: Render a loading state or a simple message
  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return <h1>Welcome to Mini CRM</h1>; // This will be briefly visible or not at all due to redirect
}
