import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';

const endpoints = [
  {
    endpoint: '/orders',
    requests: 520,
    response: '80ms',
    errors: 1,
    rateLimit: 'OK',
  },
  {
    endpoint: '/positions',
    requests: 410,
    response: '70ms',
    errors: 0,
    rateLimit: 'OK',
  },
  {
    endpoint: '/accounts',
    requests: 390,
    response: '90ms',
    errors: 2,
    rateLimit: 'OK',
  },
  {
    endpoint: '/prices',
    requests: 350,
    response: '60ms',
    errors: 0,
    rateLimit: 'OK',
  },
  {
    endpoint: '/login',
    requests: 300,
    response: '120ms',
    errors: 3,
    rateLimit: 'OK',
  },
  {
    endpoint: '/logout',
    requests: 210,
    response: '50ms',
    errors: 0,
    rateLimit: 'OK',
  },
  {
    endpoint: '/alerts',
    requests: 180,
    response: '110ms',
    errors: 1,
    rateLimit: 'OK',
  },
  {
    endpoint: '/history',
    requests: 160,
    response: '95ms',
    errors: 0,
    rateLimit: 'OK',
  },
  {
    endpoint: '/settings',
    requests: 120,
    response: '100ms',
    errors: 0,
    rateLimit: 'OK',
  },
  {
    endpoint: '/profile',
    requests: 90,
    response: '85ms',
    errors: 0,
    rateLimit: 'OK',
  },
];

const APIUsageStatisticsPanel = () => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle>API Usage Statistics</CardTitle>
    </CardHeader>
    <CardContent className="overflow-x-auto">
      <table className="w-full text-sm mb-2">
        <thead>
          <tr className="text-left text-gray-700">
            <th>Endpoint</th>
            <th>Requests</th>
            <th>Response</th>
            <th>Errors</th>
            <th>Rate Limit</th>
          </tr>
        </thead>
        <tbody>
          {endpoints.map((e) => (
            <tr key={e.endpoint}>
              <td>{e.endpoint}</td>
              <td>{e.requests}</td>
              <td>{e.response}</td>
              <td
                className={e.errors ? 'text-red-600 font-bold' : ''}>
                {e.errors}
              </td>
              <td>{e.rateLimit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </CardContent>
  </Card>
);

export default APIUsageStatisticsPanel;
