import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';

const TriggerAIControlPanel = () => (
  <Card className="mb-4 md:mb-6">
    <CardHeader>
      <CardTitle>TriggerAI Control Panel</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-3 md:gap-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
        <Button
          size="lg"
          className="h-12 w-12 sm:h-16 sm:w-16 rounded-full text-base sm:text-lg">
          Start
        </Button>
        <div className="flex flex-col gap-1 w-full sm:w-auto">
          <span className="font-semibold text-blue-600">Idle</span>
          <Progress value={0} className="w-full sm:w-32" />
          <span className="text-xs text-gray-500">
            Waiting for trigger
          </span>
        </div>
      </div>
      <div className="text-sm text-gray-700">
        Next Scheduled: 11:30 AM
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2">
        <Switch />
        <span className="text-xs text-gray-700">Manual Override</span>
        <Button size="sm" variant="outline">
          Force Trigger
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default TriggerAIControlPanel;
