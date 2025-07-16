import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';

export type ServerStatus = {
  name: string;
  status: 'up' | 'down' | 'warning';
};

const SystemHealthCard = ({
  servers,
}: {
  servers: ServerStatus[];
}) => (
  <Card>
    <CardHeader className="pb-2 px-3 sm:px-6">
      <CardTitle className="text-xs sm:text-sm font-semibold text-gray-900">
        System Health
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {servers.map((s) => (
          <li key={s.name} className="flex items-center gap-2">
            <span
              className={`h-3 w-3 rounded-full inline-block ${
                s.status === 'up'
                  ? 'bg-green-500'
                  : s.status === 'down'
                  ? 'bg-red-500'
                  : 'bg-yellow-400'
              }`}
            />
            <span className="text-xs sm:text-sm text-gray-900 font-medium">
              {s.name}
            </span>
            <span
              className={`text-xs ml-2 ${
                s.status === 'down'
                  ? 'text-red-600'
                  : 'text-green-600'
              }`}>
              {s.status === 'up' ? 'Online' : 'Down'}
            </span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default SystemHealthCard;
