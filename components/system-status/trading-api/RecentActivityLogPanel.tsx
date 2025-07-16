import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';

const logs = [
  {
    ts: '10:15:01',
    endpoint: '/orders',
    user: 'u123',
    code: 200,
    duration: '80ms',
  },
  {
    ts: '10:14:58',
    endpoint: '/positions',
    user: 'u234',
    code: 200,
    duration: '70ms',
  },
  {
    ts: '10:14:55',
    endpoint: '/accounts',
    user: 'u345',
    code: 500,
    duration: '120ms',
  },
  {
    ts: '10:14:52',
    endpoint: '/prices',
    user: 'u456',
    code: 200,
    duration: '60ms',
  },
  {
    ts: '10:14:50',
    endpoint: '/login',
    user: 'u567',
    code: 401,
    duration: '110ms',
  },
  {
    ts: '10:14:48',
    endpoint: '/logout',
    user: 'u678',
    code: 200,
    duration: '50ms',
  },
  {
    ts: '10:14:45',
    endpoint: '/alerts',
    user: 'u789',
    code: 200,
    duration: '90ms',
  },
  {
    ts: '10:14:42',
    endpoint: '/history',
    user: 'u890',
    code: 200,
    duration: '95ms',
  },
  {
    ts: '10:14:39',
    endpoint: '/settings',
    user: 'u901',
    code: 200,
    duration: '100ms',
  },
  {
    ts: '10:14:36',
    endpoint: '/profile',
    user: 'u012',
    code: 200,
    duration: '85ms',
  },
  // ...add more for up to 20
];

const RecentActivityLogPanel = () => (
  <Card>
    <CardHeader>
      <CardTitle>Recent Activity Log</CardTitle>
    </CardHeader>
    <CardContent className="overflow-x-auto">
      <table className="w-full text-sm mb-2">
        <thead>
          <tr className="text-left text-gray-700">
            <th>Timestamp</th>
            <th>Endpoint</th>
            <th>User ID</th>
            <th>Response</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((l, i) => (
            <tr key={i}>
              <td>{l.ts}</td>
              <td>{l.endpoint}</td>
              <td>{l.user}</td>
              <td
                className={
                  l.code >= 400 ? 'text-red-600 font-bold' : ''
                }>
                {l.code}
              </td>
              <td>{l.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </CardContent>
  </Card>
);

export default RecentActivityLogPanel;
