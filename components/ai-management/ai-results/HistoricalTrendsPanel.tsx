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
  AreaChart,
  Area,
  BarChart,
  Bar,
} from 'recharts';

const longTermData = [
  { month: 'Jan', perf: 2.1 },
  { month: 'Feb', perf: 1.8 },
  { month: 'Mar', perf: 2.5 },
  { month: 'Apr', perf: 2.0 },
  { month: 'May', perf: 2.7 },
  { month: 'Jun', perf: 2.3 },
];

const patternData = [
  { week: 'W1', pattern: 0.8 },
  { week: 'W2', pattern: 0.6 },
  { week: 'W3', pattern: 0.9 },
  { week: 'W4', pattern: 0.7 },
];

const seasonalData = [
  { season: 'Spring', acc: 0.92 },
  { season: 'Summer', acc: 0.88 },
  { season: 'Fall', acc: 0.95 },
  { season: 'Winter', acc: 0.9 },
];

const predictiveData = [
  { month: 'Jan', pred: 0.91 },
  { month: 'Feb', pred: 0.93 },
  { month: 'Mar', pred: 0.89 },
  { month: 'Apr', pred: 0.94 },
  { month: 'May', pred: 0.96 },
  { month: 'Jun', pred: 0.92 },
];

const chartConfig = {
  perf: { label: 'Performance', color: '#2563eb' },
  pattern: { label: 'Pattern Score', color: '#22c55e' },
  acc: { label: 'Seasonal Accuracy', color: '#f59e42' },
  pred: { label: 'Predictive Accuracy', color: '#a855f7' },
};

const HistoricalTrendsPanel = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-base sm:text-lg">
        Historical Trends
      </CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-4 sm:gap-6">
      <div className="text-xs sm:text-sm text-gray-700">
        Long-term Performance:
      </div>
      <ChartContainer
        config={chartConfig}
        className="h-28 sm:h-32 w-full">
        <LineChart
          data={longTermData}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="perf"
            stroke="#2563eb"
            strokeWidth={2}
            dot
          />
        </LineChart>
      </ChartContainer>
      <div className="text-xs sm:text-sm text-gray-700">
        Pattern Recognition:
      </div>
      <ChartContainer
        config={chartConfig}
        className="h-28 sm:h-32 w-full">
        <AreaChart
          data={patternData}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="pattern"
            stroke="#22c55e"
            fill="#bbf7d0"
          />
        </AreaChart>
      </ChartContainer>
      <div className="text-xs sm:text-sm text-gray-700">
        Seasonal Analysis:
      </div>
      <ChartContainer
        config={chartConfig}
        className="h-28 sm:h-32 w-full">
        <BarChart
          data={seasonalData}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="season" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="acc" fill="#f59e42" />
        </BarChart>
      </ChartContainer>
      <div className="text-xs sm:text-sm text-gray-700">
        Predictive Accuracy Trends:
      </div>
      <ChartContainer
        config={chartConfig}
        className="h-28 sm:h-32 w-full">
        <LineChart
          data={predictiveData}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="pred"
            stroke="#a855f7"
            strokeWidth={2}
            dot
          />
        </LineChart>
      </ChartContainer>
    </CardContent>
  </Card>
);

export default HistoricalTrendsPanel;
