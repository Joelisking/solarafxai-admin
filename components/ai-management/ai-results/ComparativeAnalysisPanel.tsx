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
  <Card className="mb-4 sm:mb-6">
    <CardHeader>
      <CardTitle className="text-base sm:text-lg">
        Comparative Analysis
      </CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-2 sm:gap-4">
      <Table className="rounded-xl overflow-hidden text-xs sm:text-sm">
        <TableHeader>
          <TableRow>
            <TableHead>Timestamp</TableHead>
            <TableHead>MainAI Result</TableHead>
            <TableHead>TriggerAI Result</TableHead>
            <TableHead className="hidden lg:table-cell">
              Correlation
            </TableHead>
            <TableHead className="hidden lg:table-cell">
              Conflict
            </TableHead>
            <TableHead>Combined Recommendation</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>10:00</TableCell>
            <TableCell>Buy</TableCell>
            <TableCell>Buy</TableCell>
            <TableCell className="hidden lg:table-cell">
              High
            </TableCell>
            <TableCell className="hidden lg:table-cell">No</TableCell>
            <TableCell>Buy</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>09:30</TableCell>
            <TableCell>Sell</TableCell>
            <TableCell>Buy</TableCell>
            <TableCell className="hidden lg:table-cell">
              Low
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              Yes
            </TableCell>
            <TableCell>Hold</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

export default ComparativeAnalysisPanel;
