import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';

type Activity = {
  time: string;
  event: string;
};

const ActivityFeed = ({ activities }: { activities: Activity[] }) => (
  <Card className="flex-1">
    <CardHeader>
      <CardTitle className="text-gray-900">Activity Feed</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {activities.map((a, i) => (
          <li key={i} className="text-sm text-gray-900">
            <span className="text-xs text-gray-500 mr-2">
              {a.time}
            </span>
            {a.event}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default ActivityFeed;
