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

const accuracyData = [
  { time: 'Mon', acc: 92 },
  { time: 'Tue', acc: 95 },
  { time: 'Wed', acc: 90 },
  { time: 'Thu', acc: 97 },
  { time: 'Fri', acc: 93 },
];

const signalData = [
  { time: 'Mon', strength: 80 },
  { time: 'Tue', strength: 85 },
  { time: 'Wed', strength: 70 },
  { time: 'Thu', strength: 90 },
  { time: 'Fri', strength: 88 },
];

const roiData = [
  { time: 'Mon', roi: 1.2 },
  { time: 'Tue', roi: 0.8 },
  { time: 'Wed', roi: -0.5 },
  { time: 'Thu', roi: 1.5 },
  { time: 'Fri', roi: 0.9 },
];

const chartConfig = {
  acc: { label: 'Accuracy %', color: '#2563eb' },
  strength: { label: 'Signal Strength', color: '#22c55e' },
  roi: { label: 'ROI %', color: '#f59e42' },
};

const PerformanceAnalyticsPanel = () => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle>Performance Analytics</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-6">
      <div className="text-sm text-gray-700">
        Accuracy Tracking Over Time:
      </div>
      <ChartContainer config={chartConfig} className="h-32 w-full">
        <LineChart
          data={accuracyData}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="acc"
            stroke="#2563eb"
            strokeWidth={2}
            dot
          />
        </LineChart>
      </ChartContainer>
      <div className="text-sm text-gray-700">
        Signal Strength Analysis:
      </div>
      <ChartContainer config={chartConfig} className="h-32 w-full">
        <BarChart
          data={signalData}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="strength" fill="#22c55e" />
        </BarChart>
      </ChartContainer>
      <div className="text-sm text-gray-700">
        ROI Impact Measurement:
      </div>
      <ChartContainer config={chartConfig} className="h-32 w-full">
        <LineChart
          data={roiData}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="roi"
            stroke="#f59e42"
            strokeWidth={2}
            dot
          />
        </LineChart>
      </ChartContainer>
    </CardContent>
  </Card>
);

export default PerformanceAnalyticsPanel;
