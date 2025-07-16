import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';

const ChartsSection = () => (
  <div className="grid grid-cols-2 gap-6 mt-8">
    <Card className="h-96">
      <CardHeader>
        <CardTitle className="text-gray-900">
          Gold Price (Live)
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Replace with shadcn candlestick chart when API ready */}
        <div className="h-80 flex items-center justify-center text-gray-400">
          [Gold Price Chart]
        </div>
      </CardContent>
    </Card>
    <Card className="h-96">
      <CardHeader>
        <CardTitle className="text-gray-900">Daily P&amp;L</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Replace with shadcn line chart when API ready */}
        <div className="h-80 flex items-center justify-center text-gray-400">
          [P&amp;L Line Chart]
        </div>
      </CardContent>
    </Card>
  </div>
);

export default ChartsSection;
