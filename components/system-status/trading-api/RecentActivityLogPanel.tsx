import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

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

const columns = [
  { header: 'Timestamp', accessorKey: 'ts' },
  { header: 'Endpoint', accessorKey: 'endpoint' },
  { header: 'User ID', accessorKey: 'user' },
  { header: 'Response', accessorKey: 'code' },
  { header: 'Duration', accessorKey: 'duration' },
];

const RecentActivityLogPanel = () => (
  <Card className="mb-4 sm:mb-6">
    <CardHeader>
      <CardTitle className="text-base sm:text-lg">
        Recent Activity Log
      </CardTitle>
    </CardHeader>
    <CardContent className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.accessorKey}>
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {logs.map((l, i) => (
            <TableRow key={i}>
              <TableCell>{l.ts}</TableCell>
              <TableCell>{l.endpoint}</TableCell>
              <TableCell>{l.user}</TableCell>
              <TableCell
                className={
                  l.code >= 400 ? 'text-red-600 font-bold' : ''
                }>
                {l.code}
              </TableCell>
              <TableCell>{l.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

export default RecentActivityLogPanel;
