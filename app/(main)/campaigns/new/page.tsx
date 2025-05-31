import CampaignForm from '@/components/campaigns/CampaignForm'; // Adjust path if necessary

export default function NewCampaignPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Create New Campaign</h1>
      <CampaignForm />
    </div>
  );
}
