import { Campaign } from '@/lib/types'; // Adjust path if necessary
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'; // Adjust path if necessary
import { Button } from '@/components/ui/button'; // Adjust path if necessary
import Link from 'next/link';
import { PlusCircle } from 'lucide-react';

async function getCampaigns(): Promise<Campaign[]> {
  // In a real app, fetch from your API endpoint
  // For now, directly use the mock or fetch from the /api/campaigns if running the dev server
  // const res = await fetch('http://localhost:3000/api/campaigns', { cache: 'no-store' });
  // if (!res.ok) {
  //   throw new Error('Failed to fetch campaigns');
  // }
  // return res.json();

  // Using a direct import for now to avoid issues if the subtask environment can't fetch
   const mockCampaignsDirect: Campaign[] = [
    { id: '1', name: 'Summer Sale Announcement', createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), audienceSize: 1200, status: 'Sent', deliveryStats: { sent: 1150, failed: 50 }},
    { id: '2', name: 'New Product Launch Teaser', createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), audienceSize: 2500, status: 'Sent', deliveryStats: { sent: 2400, failed: 100 }},
    { id: '3', name: 'Holiday Greetings 2023', createdAt: new Date('2023-12-20T10:00:00.000Z').toISOString(), audienceSize: 5000, status: 'Sent', deliveryStats: { sent: 4950, failed: 50 }},
    { id: '4', name: 'Q1 Newsletter Draft', createdAt: new Date().toISOString(), audienceSize: 0, status: 'Draft', deliveryStats: { sent: 0, failed: 0 }},
    { id: '5', name: 'Abandoned Cart Recovery - March', createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), audienceSize: 300, status: 'Sending', deliveryStats: { sent: 150, failed: 5 }},
  ];
  return mockCampaignsDirect.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default async function CampaignsPage() {
  const campaigns = await getCampaigns();

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Campaign History</h1>
        <Button asChild>
          <Link href="/campaigns/new">
            <PlusCircle className="mr-2 h-4 w-4" /> Create New Campaign
          </Link>
        </Button>
      </div>
      {campaigns.length === 0 ? (
        <p>No campaigns found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <Card key={campaign.id}>
              <CardHeader>
                <CardTitle>{campaign.name}</CardTitle>
                <CardDescription>Created: {formatDate(campaign.createdAt)}</CardDescription>
              </CardHeader>
              <CardContent>
                <p><strong>Audience Size:</strong> {campaign.audienceSize.toLocaleString()}</p>
                <p><strong>Status:</strong> {campaign.status}</p>
                <p>
                  <strong>Delivery:</strong> Sent {campaign.deliveryStats.sent.toLocaleString()} /
                  Failed {campaign.deliveryStats.failed.toLocaleString()}
                </p>
              </CardContent>
              <CardFooter>
                {/* Add any actions like 'View Details' or 'Edit' if needed later */}
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
