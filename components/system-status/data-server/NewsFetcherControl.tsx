import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const NewsFetcherControl = () => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle>News Fetcher Control</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-destructive inline-block" />
          <span className="font-semibold text-gray-900">Stopped</span>
        </div>
        <Button className="sm:ml-auto w-full sm:w-auto mt-2 sm:mt-0">
          Start
        </Button>
      </div>
      <div className="mb-2 text-sm text-gray-700">
        Query: gold price news
      </div>
      <div className="mb-2 text-sm text-gray-700">Articles: 10</div>
      <div className="mb-2 text-sm text-gray-700">
        Time Filter: qdr:d
      </div>
      <div className="mb-2 text-sm text-gray-700">Interval: 2h</div>
      <div className="mb-2 text-sm text-gray-700">
        Last Fetch: 5 min ago
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        <Button className="w-full sm:w-auto">Manual Fetch</Button>
      </div>
    </CardContent>
  </Card>
);

export default NewsFetcherControl;
