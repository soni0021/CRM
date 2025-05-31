'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input'; // Adjust path if necessary
import { Button } from '@/components/ui/button'; // Adjust path if necessary
import RuleBuilder from '@/components/campaigns/RuleBuilder/RuleBuilder'; // Adjust path if necessary
import { Label } from '@/components/ui/label'; // Adjust path if necessary

export default function CampaignForm() {
  const [campaignName, setCampaignName] = useState('');

  const handleSaveCampaign = () => {
    console.log('Saving campaign:', campaignName);
    // Rules will be handled by RuleBuilder's state initially
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="campaignName" className="text-lg">Campaign Name</Label>
        <Input
          id="campaignName"
          type="text"
          value={campaignName}
          onChange={(e) => setCampaignName(e.target.value)}
          placeholder="e.g., Q2 Product Update"
          className="mt-1"
        />
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Define Audience Rules</h2>
        <RuleBuilder />
      </div>

      <div className="flex justify-end">
        <Button onClick={handleSaveCampaign} size="lg">
          Save Campaign
        </Button>
      </div>
    </div>
  );
}
