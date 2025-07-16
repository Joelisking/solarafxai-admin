import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';

const TriggerAIResultsDisplay = () => (
  <Card>
    <CardHeader>
      <CardTitle>Results Display</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-4">
      <div className="text-sm text-gray-700">Latest Triggers:</div>
      <div className="bg-gray-100 rounded p-2 text-xs text-gray-800">
        Trigger detected:{' '}
        <span className="font-bold text-blue-600">Price Spike</span>{' '}
        at 10:32 AM.
        <br />
        Alert generated:{' '}
        <span className="font-bold text-red-600">SELL</span> signal.
      </div>
      <div className="text-sm text-gray-700">Quick Actions:</div>
      <div className="flex gap-2">
        <Button size="sm">Acknowledge</Button>
        <Button size="sm" variant="destructive">
          Stop Alerts
        </Button>
      </div>
      <div className="text-sm font-bold mt-4">
        Historical Comparison:
      </div>
      <Table className="rounded-xl overflow-hidden">
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Trigger</TableHead>
            <TableHead>Action</TableHead>
            <TableHead>Result</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>2024-06-09</TableCell>
            <TableCell>Spike</TableCell>
            <TableCell>Sell</TableCell>
            <TableCell>+0.8%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2024-06-08</TableCell>
            <TableCell>RSI</TableCell>
            <TableCell>Buy</TableCell>
            <TableCell>-0.3%</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

export default TriggerAIResultsDisplay;
