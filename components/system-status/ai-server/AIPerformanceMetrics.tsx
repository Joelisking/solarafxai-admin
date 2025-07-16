'use client';
import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { ChartContainer } from '@/components/ui/chart';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from 'recharts';

const executionTimeData = [
  { hour: '00', ms: 120 },
  { hour: '04', ms: 110 },
  { hour: '08', ms: 150 },
  { hour: '12', ms: 90 },
  { hour: '16', ms: 130 },
  { hour: '20', ms: 100 },
  { hour: '24', ms: 140 },
];

const resourceUsageData = [
  { time: '00', cpu: 30, mem: 40 },
  { time: '04', cpu: 35, mem: 45 },
  { time: '08', cpu: 50, mem: 60 },
  { time: '12', cpu: 40, mem: 55 },
  { time: '16', cpu: 60, mem: 70 },
  { time: '20', cpu: 45, mem: 50 },
  { time: '24', cpu: 55, mem: 65 },
];

const chartConfig = {
  ms: { label: 'Execution Time (ms)', color: '#2563eb' },
  cpu: { label: 'CPU %', color: '#22c55e' },
  mem: { label: 'Memory %', color: '#f59e42' },
};

const AIPerformanceMetrics = () => (
  <Card>
    <CardHeader>
      <CardTitle>Performance Metrics</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-4 sm:gap-6">
      <div className="text-xs xs:text-sm text-gray-700">
        Execution Time (24h):
      </div>
      <div className="w-full overflow-x-auto">
        <ChartContainer
          config={chartConfig}
          className="h-48 min-w-[320px] w-full">
          <LineChart
            data={executionTimeData}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="ms"
              stroke="#2563eb"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </div>
      <div className="text-xs xs:text-sm text-gray-700">
        Success Rate:{' '}
        <span className="font-bold text-green-600">97%</span>
      </div>
      <div className="text-xs xs:text-sm text-gray-700">
        Error Count: <span className="font-bold text-red-600">2</span>{' '}
        (Timeout, Data Error)
      </div>
      <div className="text-xs xs:text-sm text-gray-700">
        Resource Usage:
      </div>
      <div className="w-full overflow-x-auto">
        <ChartContainer
          config={chartConfig}
          className="h-48 min-w-[320px] w-full">
          <BarChart
            data={resourceUsageData}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="cpu" fill="#22c55e" />
            <Bar dataKey="mem" fill="#f59e42" />
          </BarChart>
        </ChartContainer>
      </div>
    </CardContent>
  </Card>
);

export default AIPerformanceMetrics;
