import { NextResponse } from 'next/server';
import { Campaign } from '@/lib/types'; // Adjust path if necessary

const mockCampaigns: Campaign[] = [
  {
    id: '1',
    name: 'Summer Sale Announcement',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    audienceSize: 1200,
    status: 'Sent',
    deliveryStats: { sent: 1150, failed: 50 },
  },
  {
    id: '2',
    name: 'New Product Launch Teaser',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
    audienceSize: 2500,
    status: 'Sent',
    deliveryStats: { sent: 2400, failed: 100 },
  },
  {
    id: '3',
    name: 'Holiday Greetings 2023',
    createdAt: new Date('2023-12-20T10:00:00.000Z').toISOString(),
    audienceSize: 5000,
    status: 'Sent',
    deliveryStats: { sent: 4950, failed: 50 },
  },
  {
    id: '4',
    name: 'Q1 Newsletter Draft',
    createdAt: new Date().toISOString(), // Today
    audienceSize: 0,
    status: 'Draft',
    deliveryStats: { sent: 0, failed: 0 },
  },
  {
    id: '5',
    name: 'Abandoned Cart Recovery - March',
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    audienceSize: 300,
    status: 'Sending',
    deliveryStats: { sent: 150, failed: 5 },
  },
];

export async function GET() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return NextResponse.json(mockCampaigns);
}

export async function POST(request: Request) {
  // Mock POST handler for Task 11
  const body = await request.json();
  console.log('Mock API received campaign data:', body);
  const newCampaignId = (mockCampaigns.length + 1).toString();
  const newCampaign: Campaign = {
    id: newCampaignId,
    name: body.name || 'Untitled Campaign',
    createdAt: new Date().toISOString(),
    audienceSize: body.rules ? body.rules.length * 100 : 0, // Mock audience size
    status: 'Draft',
    deliveryStats: { sent: 0, failed: 0 },
    // ... any other properties you expect from the POST
  };
  mockCampaigns.push(newCampaign); // Add to our mock data store
  return NextResponse.json(newCampaign, { status: 201 });
}
