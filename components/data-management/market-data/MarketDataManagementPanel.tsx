import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MarketDataManagementPanel = () => (
  <Card className="mb-4 md:mb-6">
    <CardHeader>
      <CardTitle>Data Management Tools</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Button>Manual Refresh</Button>
        <Button variant="outline">Export Data</Button>
        <Button variant="outline">Historical Access</Button>
        <Button variant="destructive">Purge Data</Button>
      </div>
    </CardContent>
  </Card>
);

export default MarketDataManagementPanel;
