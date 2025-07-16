import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';

const MainAIResultsPanel = () => (
  <Card className="mb-4 sm:mb-6">
    <CardHeader>
      <CardTitle>MainAI Results</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-1.5 sm:gap-2">
      <div className="text-xs text-gray-500">
        Timestamp: 2024-06-10 10:15:00
      </div>
      <div className="text-xs xs:text-sm text-gray-700">
        Key Findings: Uptrend detected, volatility low
      </div>
      <div className="text-xs xs:text-sm text-gray-700">
        Signal Strength:{' '}
        <span className="font-bold text-green-600">Strong</span>
      </div>
      <div className="text-xs xs:text-sm text-gray-700">
        Recommendations: <span className="font-bold">Buy XAUUSD</span>
      </div>
    </CardContent>
  </Card>
);

export default MainAIResultsPanel;
