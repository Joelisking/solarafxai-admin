import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const APIHealthPanel = () => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle>API Health</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="h-3 w-3 rounded-full bg-green-500 inline-block" />
        <span className="font-semibold text-gray-900">Connected</span>
        <span className="text-sm text-gray-700 ml-4">
          Response: 60ms
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-700">
          Requests (last hour):
        </span>
        <span className="font-bold">2,340</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-700">Error Rate:</span>
        <Progress value={2.5} className="w-40" />
        <span className="text-xs text-red-600">2.5%</span>
      </div>
    </CardContent>
  </Card>
);

export default APIHealthPanel;
