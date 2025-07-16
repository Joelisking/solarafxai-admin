import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const MainAIConfigPanel = () => (
  <Card className="mb-4 sm:mb-6">
    <CardHeader>
      <CardTitle>Configuration Management</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-4">
      <div className="flex flex-col gap-1 w-full max-w-xs">
        <Label className="text-xs text-gray-700">
          Execution Interval (min)
        </Label>
        <Input
          type="number"
          defaultValue={60}
          min={1}
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-1 w-full max-w-xs">
        <Label className="text-xs text-gray-700">
          Analysis Parameters
        </Label>
        <Input defaultValue="Default Params" className="w-full" />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <Label className="text-xs text-gray-700">Data Source</Label>
        <div className="w-full">
          <Select>
            <SelectTrigger>
              <SelectValue
                defaultValue="XAUUSD"
                placeholder="Select currency pair"
              />
            </SelectTrigger>
            <SelectContent className="w-full">
              <SelectItem value="XAUUSD">XAUUSD</SelectItem>
              <SelectItem value="EURUSD">EURUSD</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <Label className="text-xs text-gray-700">Output Format</Label>
        <div className="w-full">
          <Select>
            <SelectTrigger>
              <SelectValue
                defaultValue="JSON"
                placeholder="Select format"
              />
            </SelectTrigger>
            <SelectContent className="w-full">
              <SelectItem value="JSON">JSON</SelectItem>
              <SelectItem value="CSV">CSV</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button className="mt-2 w-full sm:w-32">Save Config</Button>
    </CardContent>
  </Card>
);

export default MainAIConfigPanel;
