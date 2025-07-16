import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CombinedAIControls = () => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle>Combined Controls</CardTitle>
    </CardHeader>
    <CardContent className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-green-500 inline-block" />
        <span className="font-semibold text-gray-900">
          All Systems Operational
        </span>
      </div>
      <Button>Start Both</Button>
      <Button variant="destructive">Stop Both</Button>
    </CardContent>
  </Card>
);

export default CombinedAIControls;
