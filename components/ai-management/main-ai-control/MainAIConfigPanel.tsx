import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const MainAIConfigPanel = () => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle>Configuration Management</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-700">
          Execution Interval (min)
        </label>
        <Input
          type="number"
          defaultValue={60}
          min={1}
          className="w-32"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-700">
          Analysis Parameters
        </label>
        <Input defaultValue="Default Params" className="w-48" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-700">Data Source</label>
        <Select defaultValue="XAUUSD">
          <option value="XAUUSD">XAUUSD</option>
          <option value="EURUSD">EURUSD</option>
        </Select>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-700">Output Format</label>
        <Select defaultValue="JSON">
          <option value="JSON">JSON</option>
          <option value="CSV">CSV</option>
        </Select>
      </div>
      <Button className="mt-2 w-32">Save Config</Button>
    </CardContent>
  </Card>
);

export default MainAIConfigPanel;
