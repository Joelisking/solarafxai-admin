import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';

const DatabaseStatusPanel = () => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle>Database Status</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-green-500 inline-block" />
        <span className="font-semibold text-gray-900">Connected</span>
      </div>
      <div className="text-sm text-gray-700">
        Query Performance: <span className="font-bold">Fast</span>{' '}
        (avg 18ms)
      </div>
      <div className="text-sm text-gray-700">
        Data Integrity:{' '}
        <span className="font-bold text-green-600">OK</span>
      </div>
      <div className="text-sm text-gray-700">
        Backup Status:{' '}
        <span className="font-bold text-blue-600">Up to date</span>
      </div>
    </CardContent>
  </Card>
);

export default DatabaseStatusPanel;
