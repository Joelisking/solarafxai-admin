import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';

const MarketDataOverview = () => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle>Market Data Overview</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-4">
          <thead>
            <tr className="text-left text-gray-700">
              <th>Timeframe</th>
              <th>Last Update</th>
              <th>Records</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1H</td>
              <td>2 min ago</td>
              <td>1,247</td>
              <td>
                <span className="h-3 w-3 rounded-full bg-green-500 inline-block mr-1" />
                Fresh
              </td>
            </tr>
            <tr>
              <td>30M</td>
              <td>5 min ago</td>
              <td>2,891</td>
              <td>
                <span className="h-3 w-3 rounded-full bg-yellow-400 inline-block mr-1" />
                Stale
              </td>
            </tr>
            <tr>
              <td>15M</td>
              <td>1 min ago</td>
              <td>5,124</td>
              <td>
                <span className="h-3 w-3 rounded-full bg-green-500 inline-block mr-1" />
                Fresh
              </td>
            </tr>
            <tr>
              <td>5M</td>
              <td>30 sec ago</td>
              <td>12,456</td>
              <td>
                <span className="h-3 w-3 rounded-full bg-green-500 inline-block mr-1" />
                Fresh
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex items-center gap-4 mb-2">
        <div className="text-sm text-gray-700">
          Latest Price:{' '}
          <span className="font-bold text-green-600">$2,350.10</span>{' '}
          <span className="ml-2 text-xs text-green-600">▲ +0.5%</span>
        </div>
        <div className="text-xs text-gray-500">
          (trend chart here)
        </div>
      </div>
    </CardContent>
  </Card>
);

export default MarketDataOverview;
