import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';

const trendingKeywords = [
  'inflation',
  'AI',
  'earnings',
  'oil',
  'crypto',
];

function NewsAnalyticsPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>News Analytics</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        {/* Keyword Trending */}
        <div>
          <div className="font-semibold mb-1">Keyword Trending</div>
          <ul className="list-disc pl-6 text-gray-900">
            {trendingKeywords.map((kw, i) => (
              <li key={i}>{kw}</li>
            ))}
          </ul>
        </div>
        {/* Sentiment Trends Over Time */}
        <div>
          <div className="font-semibold mb-1">
            Sentiment Trends Over Time
          </div>
          <div className="h-24 bg-gray-100 rounded flex items-center justify-center text-gray-400">
            [Line Chart Placeholder]
          </div>
        </div>
        {/* Market Impact Correlation */}
        <div>
          <div className="font-semibold mb-1">
            Market Impact Correlation
          </div>
          <div className="h-16 bg-gray-100 rounded flex items-center justify-center text-gray-400">
            [Correlation Chart Placeholder]
          </div>
        </div>
        {/* Source Performance Analysis */}
        <div>
          <div className="font-semibold mb-1">
            Source Performance Analysis
          </div>
          <div className="h-16 bg-gray-100 rounded flex items-center justify-center text-gray-400">
            [Performance Chart Placeholder]
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default NewsAnalyticsPanel;
