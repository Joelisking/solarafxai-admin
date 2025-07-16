import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const TriggerAIControlPanel = () => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle>TriggerAI Control Panel</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Switch />
        <span className="font-semibold text-red-600">Stopped</span>
        <span className="text-xs text-gray-500 ml-2">
          (Last run: 10:00 AM)
        </span>
      </div>
      <div className="flex flex-col gap-1 text-sm text-gray-700">
        <div>Next scheduled run: 10:30 AM</div>
        <div>Execution interval: 30 minutes</div>
        <div>Total runs today: 8</div>
      </div>
      <div className="flex gap-2 mt-2">
        <Button>Force Execution</Button>
        <Button variant="outline">Config</Button>
      </div>
    </CardContent>
  </Card>
);

export default TriggerAIControlPanel;
