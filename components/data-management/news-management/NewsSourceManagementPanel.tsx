'use client';
import React, { useState } from 'react';
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
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';

const mockSources = [
  { name: 'Reuters', performance: 88, reliability: 95, active: true },
  {
    name: 'Bloomberg',
    performance: 82,
    reliability: 90,
    active: true,
  },
  {
    name: 'CryptoNews',
    performance: 70,
    reliability: 75,
    active: false,
  },
  {
    name: 'FinTech Daily',
    performance: 65,
    reliability: 80,
    active: true,
  },
];

function NewsSourceManagementPanel() {
  const [sources, setSources] = useState(mockSources);

  const toggleActive = (idx: number) => {
    setSources((sources) =>
      sources.map((s, i) =>
        i === idx ? { ...s, active: !s.active } : s
      )
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>News Source Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Source Name</TableHead>
              <TableHead>Performance</TableHead>
              <TableHead>Reliability</TableHead>
              <TableHead>Activation</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sources.map((s, i) => (
              <TableRow key={s.name}>
                <TableCell>{s.name}</TableCell>
                <TableCell className="w-40">
                  <Progress value={s.performance} className="h-2" />
                  <span className="text-xs ml-2">
                    {s.performance}%
                  </span>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      s.reliability > 85 ? 'default' : 'destructive'
                    }>
                    {s.reliability}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Switch
                    checked={s.active}
                    onCheckedChange={() => toggleActive(i)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default NewsSourceManagementPanel;
