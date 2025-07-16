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
      <div className="flex items-center gap-2 mb-2">
        <span className="h-3 w-3 rounded-full bg-green-500 inline-block" />
        <span className="font-semibold text-gray-900">Running</span>
        <Button variant="destructive" className="ml-auto">
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
        <Button>Fetch 1H</Button>
        <Button>Fetch 30M</Button>
        <Button>Fetch 15M</Button>
        <Button>Fetch 5M</Button>
      </div>
    </CardContent>
  </Card>
);

export default DataPollerControl;
