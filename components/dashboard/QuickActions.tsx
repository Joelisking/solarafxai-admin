import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import type { ServerStatus } from './SystemHealthCard';

const QuickActions = ({ servers }: { servers: ServerStatus[] }) => (
  <Card>
    <CardHeader>
      <CardTitle className="text-gray-900">Quick Actions</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col gap-3">
        {servers.map((s) => (
          <div key={s.name} className="flex items-center gap-2">
            <span className="text-sm text-gray-900 w-28">
              {s.name}
            </span>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-3 py-1 rounded">
              Start
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
              Stop
            </button>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default QuickActions;
