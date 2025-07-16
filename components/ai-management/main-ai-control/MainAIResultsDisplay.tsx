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

const MainAIResultsDisplay = () => (
  <Card>
    <CardHeader>
      <CardTitle>Results Display</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-4">
      <div className="text-sm text-gray-700">Latest Analysis:</div>
      <div className="bg-gray-100 rounded p-2 text-xs text-gray-800">
        Uptrend detected in XAUUSD. Volatility low. Signal strength:{' '}
        <span className="font-bold text-green-600">Strong</span>.
        <br />
        Recommendation: <span className="font-bold">Buy</span>.
      </div>
      <div className="text-sm text-gray-700">Key Insights:</div>
      <ul className="list-disc pl-5 text-xs text-gray-800">
        <li>Momentum increasing</li>
        <li>Support at 2300 holding</li>
        <li>Low error rate in last 10 runs</li>
      </ul>
      <div className="text-sm font-bold mt-4">
        Historical Comparison:
      </div>
      <Table className="rounded-xl overflow-hidden">
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Signal</TableHead>
            <TableHead>Result</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>2024-06-09</TableCell>
            <TableCell>Buy</TableCell>
            <TableCell>+1.2%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2024-06-08</TableCell>
            <TableCell>Sell</TableCell>
            <TableCell>-0.5%</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button className="w-40">Download Report</Button>
    </CardContent>
  </Card>
);

export default MainAIResultsDisplay;
