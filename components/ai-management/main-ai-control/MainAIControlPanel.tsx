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
  <Card className="mb-4 sm:mb-6">
    <CardHeader>
      <CardTitle>MainAI Control Panel</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-4">
      <div className="flex flex-col xs:flex-row xs:items-center gap-4 xs:gap-6">
        <Button
          size="lg"
          className="h-14 w-14 xs:h-16 xs:w-16 rounded-full text-lg min-w-0">
          Start
        </Button>
        <div className="flex flex-col gap-1 w-full max-w-xs">
          <span className="font-semibold text-green-600">
            Running
          </span>
          <Progress value={70} className="w-full" />
          <span className="text-xs text-gray-500">70% complete</span>
        </div>
      </div>
      <div className="text-sm text-gray-700">
        Next Scheduled: 11:00 AM
      </div>
      <div className="flex flex-col xs:flex-row xs:items-center gap-2 mt-2">
        <div className="flex items-center gap-2">
          <Switch />
          <span className="text-xs text-gray-700">
            Manual Override
          </span>
        </div>
        <Button
          size="sm"
          variant="outline"
          className="w-full xs:w-auto mt-2 xs:mt-0">
          Force Run
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default MainAIControlPanel;
