import React from 'react';
import MainAIControlPanel from '@/components/ai-management/main-ai-control/MainAIControlPanel';
import MainAIConfigPanel from '@/components/ai-management/main-ai-control/MainAIConfigPanel';
import MainAIExecutionMonitor from '@/components/ai-management/main-ai-control/MainAIExecutionMonitor';
import MainAIResultsDisplay from '@/components/ai-management/main-ai-control/MainAIResultsDisplay';

function MainAIControl() {
  return (
    <main className="p-8 bg-gray-50 min-h-screen flex flex-col gap-6">
      {/* Top: Control Panel + Config Panel */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <MainAIControlPanel />
        </div>
        <div className="flex-1">
          <MainAIConfigPanel />
        </div>
      </div>
      {/* Middle: Execution Monitoring */}
      <MainAIExecutionMonitor />
      {/* Bottom: Results Display */}
      <MainAIResultsDisplay />
    </main>
  );
}

export default MainAIControl;
