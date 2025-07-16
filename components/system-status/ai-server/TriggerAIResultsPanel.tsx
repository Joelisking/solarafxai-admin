import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';

const TriggerAIResultsPanel = () => (
  <Card className="mb-4 sm:mb-6">
    <CardHeader>
      <CardTitle>TriggerAI Results</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-1.5 sm:gap-2">
      <div className="text-xs text-gray-500">
        Timestamp: 2024-06-10 10:00:00
      </div>
      <div className="text-xs xs:text-sm text-gray-700">
        Triggers Detected: Price spike, RSI overbought
      </div>
      <div className="text-xs xs:text-sm text-gray-700">
        Actions Recommended:{' '}
        <span className="font-bold">Sell XAUUSD</span>
      </div>
      <div className="text-xs xs:text-sm text-gray-700">
        Confidence:{' '}
        <span className="font-bold text-yellow-600">Medium</span>
      </div>
    </CardContent>
  </Card>
);

export default TriggerAIResultsPanel;
