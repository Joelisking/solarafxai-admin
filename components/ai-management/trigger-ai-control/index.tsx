import React from 'react';
import TriggerAIControlPanel from '@/components/ai-management/trigger-ai-control/TriggerAIControlPanel';
import TriggerAIConfigPanel from '@/components/ai-management/trigger-ai-control/TriggerAIConfigPanel';
import TriggerAIExecutionMonitor from '@/components/ai-management/trigger-ai-control/TriggerAIExecutionMonitor';
import TriggerAIResultsDisplay from '@/components/ai-management/trigger-ai-control/TriggerAIResultsDisplay';

function TriggerAIControl() {
  return (
    <main className="p-8 bg-gray-50 min-h-screen flex flex-col gap-6">
      {/* Top: Control Panel + Config Panel */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <TriggerAIControlPanel />
        </div>
        <div className="flex-1">
          <TriggerAIConfigPanel />
        </div>
      </div>
      {/* Middle: Execution Monitoring */}
      <TriggerAIExecutionMonitor />
      {/* Bottom: Results Display */}
      <TriggerAIResultsDisplay />
    </main>
  );
}

export default TriggerAIControl;
