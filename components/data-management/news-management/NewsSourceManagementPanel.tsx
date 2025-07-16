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
    <Card className="w-full">
      <CardHeader className="pb-3 sm:pb-4">
        <CardTitle className="text-lg sm:text-xl md:text-2xl">
          News Source Management
        </CardTitle>
      </CardHeader>
      <CardContent className="px-3 sm:px-4 md:px-6">
        {/* Mobile Card View */}
        <div className="block md:hidden space-y-4">
          {sources.map((s, i) => (
            <div
              key={s.name}
              className="border rounded-lg p-4 bg-white">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-lg">{s.name}</h3>
                <Switch
                  checked={s.active}
                  onCheckedChange={() => toggleActive(i)}
                />
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">
                      Performance:
                    </span>
                    <span className="text-sm font-medium">
                      {s.performance}%
                    </span>
                  </div>
                  <Progress value={s.performance} className="h-2" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Reliability:
                  </span>
                  <Badge
                    variant={
                      s.reliability > 85 ? 'default' : 'destructive'
                    }
                    className="text-xs">
                    {s.reliability}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <Table className="min-w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/4">Source Name</TableHead>
                <TableHead className="w-2/5">Performance</TableHead>
                <TableHead className="w-1/6">Reliability</TableHead>
                <TableHead className="w-1/6">Activation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sources.map((s, i) => (
                <TableRow key={s.name}>
                  <TableCell className="font-medium">
                    {s.name}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Progress
                        value={s.performance}
                        className="h-2 flex-1"
                      />
                      <span className="text-xs text-gray-500 min-w-fit">
                        {s.performance}%
                      </span>
                    </div>
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
        </div>
      </CardContent>
    </Card>
  );
}

export default NewsSourceManagementPanel;
