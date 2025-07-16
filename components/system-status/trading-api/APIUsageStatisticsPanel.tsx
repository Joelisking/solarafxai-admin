import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';

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
  <Card className="mb-4 sm:mb-6">
    <CardHeader>
      <CardTitle className="text-base sm:text-lg">
        API Usage Statistics
      </CardTitle>
    </CardHeader>
    <CardContent className="overflow-x-auto">
      <Table className="text-xs sm:text-sm mb-2">
        <TableHeader>
          <TableRow>
            <TableHead>Endpoint</TableHead>
            <TableHead>Requests</TableHead>
            <TableHead>Response</TableHead>
            <TableHead>Errors</TableHead>
            <TableHead>Rate Limit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {endpoints.map((e) => (
            <TableRow key={e.endpoint}>
              <TableCell>{e.endpoint}</TableCell>
              <TableCell>{e.requests}</TableCell>
              <TableCell>{e.response}</TableCell>
              <TableCell
                className={e.errors ? 'text-red-600 font-bold' : ''}>
                {e.errors}
              </TableCell>
              <TableCell>{e.rateLimit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

export default APIUsageStatisticsPanel;
