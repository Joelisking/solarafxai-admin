import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';

const ServerHealthPanel = () => (
  <Card className="mb-8">
    <CardHeader>
      <CardTitle>Server Health</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 items-start sm:items-center">
      <div className="flex items-center gap-2 mb-2 sm:mb-0">
        <span className="h-3 w-3 rounded-full bg-green-500 inline-block" />
        <span className="font-semibold text-gray-900">Connected</span>
      </div>
      <div className="text-sm text-gray-700">Uptime: 2d 4h 12m</div>
      <div className="text-sm text-gray-700">
        Last Response: 120ms
      </div>
      <div className="text-sm text-gray-700">
        Errors: 1 (Last: 10 min ago)
      </div>
    </CardContent>
  </Card>
);

export default ServerHealthPanel;
