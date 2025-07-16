import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';

const NewsDataOverview = () => (
  <Card>
    <CardHeader>
      <CardTitle>News Data Overview</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="mb-2">
        <div className="font-medium text-gray-800 mb-1">
          Latest News Articles
        </div>
        <ul className="mb-2">
          <li className="text-sm mb-1">
            [Positive] Gold surges on Fed news{' '}
            <span className="text-gray-500">(Reuters, 2m ago)</span>
          </li>
          <li className="text-sm mb-1">
            [Neutral] Market awaits CPI data{' '}
            <span className="text-gray-500">(Bloomberg, 5m ago)</span>
          </li>
          <li className="text-sm mb-1">
            [Negative] Dollar strength weighs on gold{' '}
            <span className="text-gray-500">(CNBC, 10m ago)</span>
          </li>
          <li className="text-sm mb-1">
            [Positive] Gold demand up in Asia{' '}
            <span className="text-gray-500">(Kitco, 15m ago)</span>
          </li>
          <li className="text-sm mb-1">
            [Neutral] Analysts split on gold outlook{' '}
            <span className="text-gray-500">(FXStreet, 20m ago)</span>
          </li>
        </ul>
      </div>
      <div className="mb-2 text-sm text-gray-700">
        Total Articles Today: <span className="font-bold">32</span>
      </div>
      <div className="mb-2 text-sm text-gray-700">
        Average Sentiment: <span className="font-bold">0.12</span>
      </div>
      <div className="mb-2 text-sm text-gray-700">
        Top Keywords: gold, Fed, inflation, demand
      </div>
    </CardContent>
  </Card>
);

export default NewsDataOverview;
