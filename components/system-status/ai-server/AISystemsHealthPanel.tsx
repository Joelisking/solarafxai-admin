import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const AISystemsHealthPanel = () => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle>AI Systems Health</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="h-3 w-3 rounded-full bg-green-500 inline-block" />
        <span className="font-semibold text-gray-900">Online</span>
        <span className="text-sm text-gray-700 ml-4">
          Response: 85ms
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-700">Memory Usage:</span>
        <Progress value={62} className="w-40" />
        <span className="text-xs text-gray-500">62%</span>
      </div>
      <div className="text-sm text-gray-700">
        Active Processes: <span className="font-bold">4</span>
      </div>
    </CardContent>
  </Card>
);

export default AISystemsHealthPanel;
