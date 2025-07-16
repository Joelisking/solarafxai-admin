import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const AISystemsHealthPanel = () => (
  <Card className="mb-4 sm:mb-6">
    <CardHeader>
      <CardTitle>AI Systems Health</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-3 sm:gap-4">
      <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-4">
        <span className="h-3 w-3 rounded-full bg-green-500 inline-block" />
        <span className="font-semibold text-gray-900 text-sm xs:text-base">
          Online
        </span>
        <span className="text-xs xs:text-sm text-gray-700 xs:ml-4">
          Response: 85ms
        </span>
      </div>
      <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-4">
        <span className="text-xs xs:text-sm text-gray-700">
          Memory Usage:
        </span>
        <Progress value={62} className="w-full xs:w-40" />
        <span className="text-xs text-gray-500">62%</span>
      </div>
      <div className="text-xs xs:text-sm text-gray-700">
        Active Processes: <span className="font-bold">4</span>
      </div>
    </CardContent>
  </Card>
);

export default AISystemsHealthPanel;
