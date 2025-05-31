import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="mb-4">Welcome to your Mini CRM dashboard.</p>
      <Button asChild>
        <Link href="/campaigns">View Campaigns</Link>
      </Button>
    </div>
  );
}
