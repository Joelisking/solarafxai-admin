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
    <Card className="w-full">
      <CardHeader className="pb-3 sm:pb-4">
        <CardTitle className="text-lg sm:text-xl md:text-2xl">
          News Analytics
        </CardTitle>
      </CardHeader>
      <CardContent className="px-3 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Keyword Trending */}
          <div className="space-y-3">
            <div className="font-semibold text-sm sm:text-base md:text-lg">
              Trending Keywords
            </div>
            <div className="flex flex-wrap gap-2">
              {trendingKeywords.map((kw, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs sm:text-sm font-medium">
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* Sentiment Trends Over Time */}
          <div className="space-y-3">
            <div className="font-semibold text-sm sm:text-base md:text-lg">
              Sentiment Trends Over Time
            </div>
            <div className="h-20 sm:h-24 md:h-28 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs sm:text-sm">
              [Line Chart Placeholder]
            </div>
          </div>

          {/* Market Impact Correlation */}
          <div className="space-y-3">
            <div className="font-semibold text-sm sm:text-base md:text-lg">
              Market Impact Correlation
            </div>
            <div className="h-16 sm:h-20 md:h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs sm:text-sm">
              [Correlation Chart Placeholder]
            </div>
          </div>

          {/* Source Performance Analysis */}
          <div className="space-y-3">
            <div className="font-semibold text-sm sm:text-base md:text-lg">
              Source Performance Analysis
            </div>
            <div className="h-16 sm:h-20 md:h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs sm:text-sm">
              [Performance Chart Placeholder]
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default NewsAnalyticsPanel;
