'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Adjust path if necessary
import { LogIn, LogOut } from 'lucide-react'; // Example icons

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderBottom: '1px solid #eee' }}>
      <div>
        <Link href="/" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Mini CRM</Link>
      </div>
      <div>
        {status === 'authenticated' && session?.user?.email && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '1rem' }}>{session.user.email}</span>
            <Button variant="outline" onClick={() => signOut()}>
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </Button>
          </>
        )}
        {status === 'unauthenticated' && (
          <Link href="/login">
            <Button variant="outline">
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Button>
          </Link>
        )}
         {status === 'loading' && (
          <Button variant="outline" disabled>
            Loading...
          </Button>
        )}
      </div>
    </nav>
  );
}
