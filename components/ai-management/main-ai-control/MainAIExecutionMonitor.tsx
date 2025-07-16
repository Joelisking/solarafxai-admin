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

const progressData = [
  { step: 'Start', value: 0 },
  { step: 'Load', value: 20 },
  { step: 'Analyze', value: 60 },
  { step: 'Output', value: 100 },
];

const perfData = [
  { time: '10:00', ms: 120 },
  { time: '10:10', ms: 110 },
  { time: '10:20', ms: 150 },
  { time: '10:30', ms: 90 },
];

const resourceData = [
  { time: '10:00', cpu: 30, mem: 40 },
  { time: '10:10', cpu: 35, mem: 45 },
  { time: '10:20', cpu: 50, mem: 60 },
  { time: '10:30', cpu: 40, mem: 55 },
];

const chartConfig = {
  value: { label: 'Progress', color: '#2563eb' },
  ms: { label: 'Exec Time (ms)', color: '#22c55e' },
  cpu: { label: 'CPU %', color: '#f59e42' },
  mem: { label: 'Memory %', color: '#a855f7' },
};

const MainAIExecutionMonitor = () => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle>Execution Monitoring</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-6">
      <div className="text-sm text-gray-700">Real-time Progress:</div>
      <ChartContainer config={chartConfig} className="h-32 w-full">
        <LineChart
          data={progressData}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="step" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
            strokeWidth={2}
            dot
          />
        </LineChart>
      </ChartContainer>
      <div className="text-sm text-gray-700">
        Execution History Timeline:
      </div>
      <ChartContainer config={chartConfig} className="h-32 w-full">
        <LineChart
          data={perfData}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="ms"
            stroke="#22c55e"
            strokeWidth={2}
            dot
          />
        </LineChart>
      </ChartContainer>
      <div className="text-sm text-gray-700">
        Resource Usage During Execution:
      </div>
      <ChartContainer config={chartConfig} className="h-32 w-full">
        <BarChart
          data={resourceData}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="cpu" fill="#f59e42" />
          <Bar dataKey="mem" fill="#a855f7" />
        </BarChart>
      </ChartContainer>
    </CardContent>
  </Card>
);

export default MainAIExecutionMonitor;
