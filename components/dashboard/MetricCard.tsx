import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';

type MetricCardProps = {
  label: string;
  value: string;
  sub: string;
};

const MetricCard = ({ label, value, sub }: MetricCardProps) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2 px-3 sm:px-6">
      <CardTitle className="text-xs sm:text-sm font-semibold text-gray-900">
        {label}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-xl sm:text-2xl font-bold text-black">
        {value}
      </div>
      <div className="text-xs text-gray-500">{sub}</div>
    </CardContent>
  </Card>
);

export default MetricCard;
