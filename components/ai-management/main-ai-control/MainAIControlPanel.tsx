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

const MainAIControlPanel = () => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle>MainAI Control Panel</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-4">
      <div className="flex items-center gap-6">
        <Button size="lg" className="h-16 w-16 rounded-full text-lg">
          Start
        </Button>
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-green-600">
            Running
          </span>
          <Progress value={70} className="w-32" />
          <span className="text-xs text-gray-500">70% complete</span>
        </div>
      </div>
      <div className="text-sm text-gray-700">
        Next Scheduled: 11:00 AM
      </div>
      <div className="flex items-center gap-2 mt-2">
        <Switch />
        <span className="text-xs text-gray-700">Manual Override</span>
        <Button size="sm" variant="outline">
          Force Run
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default MainAIControlPanel;
