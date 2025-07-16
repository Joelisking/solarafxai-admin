import React from 'react';
import MainAIControlPanel from '@/components/ai-management/main-ai-control/MainAIControlPanel';
import MainAIConfigPanel from '@/components/ai-management/main-ai-control/MainAIConfigPanel';
import MainAIExecutionMonitor from '@/components/ai-management/main-ai-control/MainAIExecutionMonitor';
import MainAIResultsDisplay from '@/components/ai-management/main-ai-control/MainAIResultsDisplay';

function MainAIControl() {
  return (
    <main className="p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen flex flex-col gap-4 sm:gap-6">
      {/* Top: Control Panel + Config Panel */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
        <div className="flex-1 min-w-0">
          <MainAIControlPanel />
        </div>
        <div className="flex-1 min-w-0 mt-4 md:mt-0">
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
