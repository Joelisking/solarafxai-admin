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
    <CardHeader className="px-3 sm:px-6">
      <CardTitle className="text-gray-900 text-base sm:text-lg">
        Quick Actions
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col gap-3">
        {servers.map((s) => (
          <div
            key={s.name}
            className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-2">
            <span className="text-xs sm:text-sm text-gray-900 w-28">
              {s.name}
            </span>
            <div className="flex flex-row gap-2 w-full xs:w-auto">
              <button className="flex-1 xs:flex-none bg-blue-700 hover:bg-blue-800 text-white px-3 py-1 rounded text-xs sm:text-sm">
                Start
              </button>
              <button className="flex-1 xs:flex-none bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs sm:text-sm">
                Stop
              </button>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default QuickActions;
