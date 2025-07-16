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
  { step: 'Idle', value: 0 },
  { step: 'Detect', value: 40 },
  { step: 'Alert', value: 100 },
];

const perfData = [
  { time: '10:00', ms: 80 },
  { time: '10:10', ms: 60 },
  { time: '10:20', ms: 90 },
  { time: '10:30', ms: 70 },
];

const responseData = [
  { time: '10:00', resp: 30 },
  { time: '10:10', resp: 25 },
  { time: '10:20', resp: 40 },
  { time: '10:30', resp: 35 },
];

const chartConfig = {
  value: { label: 'Progress', color: '#2563eb' },
  ms: { label: 'Detection Time (ms)', color: '#22c55e' },
  resp: { label: 'Response Time (ms)', color: '#f59e42' },
};

const TriggerAIExecutionMonitor = () => (
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
        Detection History Timeline:
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
        Response Time Optimization:
      </div>
      <ChartContainer config={chartConfig} className="h-32 w-full">
        <BarChart
          data={responseData}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="resp" fill="#f59e42" />
        </BarChart>
      </ChartContainer>
    </CardContent>
  </Card>
);

export default TriggerAIExecutionMonitor;
