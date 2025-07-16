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

const ComparativeAnalysisPanel = () => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle>Comparative Analysis</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-4">
      <Table className="rounded-xl overflow-hidden">
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead>Timestamp</TableHead>
            <TableHead>MainAI Result</TableHead>
            <TableHead>TriggerAI Result</TableHead>
            <TableHead>Correlation</TableHead>
            <TableHead>Conflict</TableHead>
            <TableHead>Combined Recommendation</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>10:00</TableCell>
            <TableCell>Buy</TableCell>
            <TableCell>Buy</TableCell>
            <TableCell>High</TableCell>
            <TableCell>No</TableCell>
            <TableCell>Buy</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>09:30</TableCell>
            <TableCell>Sell</TableCell>
            <TableCell>Buy</TableCell>
            <TableCell>Low</TableCell>
            <TableCell>Yes</TableCell>
            <TableCell>Hold</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

export default ComparativeAnalysisPanel;
