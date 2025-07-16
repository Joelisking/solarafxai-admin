import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DataPollerControl = () => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle>Data Poller Control</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-green-500 inline-block" />
          <span className="font-semibold text-gray-900">Running</span>
        </div>
        <Button
          variant="destructive"
          className="sm:ml-auto w-full sm:w-auto mt-2 sm:mt-0">
          Stop
        </Button>
      </div>
      <div className="mb-2 text-sm text-gray-700">Symbol: XAUUSD</div>
      <div className="mb-2 text-sm text-gray-700">
        Timeframes: 1H, 30M, 15M, 5M
      </div>
      <div className="mb-2 text-sm text-gray-700">
        Poll Interval: 60s
      </div>
      <div className="mb-2 text-sm text-gray-700">
        Last Poll: 1 min ago
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        <Button className="w-full sm:w-auto">Fetch 1H</Button>
        <Button className="w-full sm:w-auto">Fetch 30M</Button>
        <Button className="w-full sm:w-auto">Fetch 15M</Button>
        <Button className="w-full sm:w-auto">Fetch 5M</Button>
      </div>
    </CardContent>
  </Card>
);

export default DataPollerControl;
