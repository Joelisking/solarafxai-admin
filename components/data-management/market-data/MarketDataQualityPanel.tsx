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
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';

const qualityData = [
  { metric: 'Completeness', value: '98%', status: 'OK' },
  { metric: 'Anomalies', value: '2', status: 'Warning' },
  { metric: 'Gaps', value: '0', status: 'OK' },
  { metric: 'Validation', value: 'Passed', status: 'OK' },
];

const MarketDataQualityPanel = () => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle>Data Quality Monitoring</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-4">
      <Table className="rounded-xl overflow-hidden">
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead>Metric</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {qualityData.map((row, i) => (
            <TableRow key={i}>
              <TableCell>{row.metric}</TableCell>
              <TableCell>{row.value}</TableCell>
              <TableCell
                className={
                  row.status === 'OK'
                    ? 'text-green-600'
                    : row.status === 'Warning'
                    ? 'text-yellow-600'
                    : 'text-red-600'
                }>
                {row.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

export default MarketDataQualityPanel;
