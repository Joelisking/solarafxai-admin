import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';

const ActiveConnectionsPanel = () => (
  <Card className="mb-4 sm:mb-6">
    <CardHeader>
      <CardTitle className="text-base sm:text-lg">
        Active Connections
      </CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-2 sm:gap-3">
      <div className="text-xs sm:text-sm text-gray-700">
        Current Active Sessions: <span className="font-bold">38</span>
      </div>
      <div className="text-xs sm:text-sm text-gray-700">
        Peak Connections Today: <span className="font-bold">102</span>
      </div>
      <div className="text-xs sm:text-sm text-gray-700">
        Avg. Session Duration:{' '}
        <span className="font-bold">12m 30s</span>
      </div>
      <div className="text-xs sm:text-sm text-gray-700">
        Geographic Distribution:{' '}
        <span className="text-xs text-gray-500">
          [map/chart here]
        </span>
      </div>
    </CardContent>
  </Card>
);

export default ActiveConnectionsPanel;
