import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CombinedAIControls = () => (
  <Card className="mb-4 sm:mb-6">
    <CardHeader>
      <CardTitle>Combined Controls</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col xs:flex-row xs:items-center gap-3 xs:gap-6">
      <div className="flex items-center gap-2 mb-2 xs:mb-0">
        <span className="h-3 w-3 rounded-full bg-green-500 inline-block" />
        <span className="font-semibold text-gray-900 text-sm xs:text-base">
          All Systems Operational
        </span>
      </div>
      {/* <div className="flex flex-col sm:flex-row gap-2 sm:gap-4"> */}
      <Button className="w-full sm:w-auto">Start Both</Button>
      <Button variant="destructive" className="w-full sm:w-auto">
        Stop Both
      </Button>
      {/* </div> */}
    </CardContent>
  </Card>
);

export default CombinedAIControls;
