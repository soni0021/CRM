export interface Campaign {
  id: string;
  name: string;
  createdAt: string; // ISO date string
  audienceSize: number;
  status: 'Draft' | 'Sending' | 'Sent' | 'Failed';
  deliveryStats: {
    sent: number;
    failed: number;
  };
}
