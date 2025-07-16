import React from 'react';
import AISystemsHealthPanel from '@/components/system-status/ai-server/AISystemsHealthPanel';
import MainAIControlPanel from '@/components/system-status/ai-server/MainAIControlPanel';
import TriggerAIControlPanel from '@/components/system-status/ai-server/TriggerAIControlPanel';
import CombinedAIControls from '@/components/system-status/ai-server/CombinedAIControls';
import MainAIResultsPanel from '@/components/system-status/ai-server/MainAIResultsPanel';
import TriggerAIResultsPanel from '@/components/system-status/ai-server/TriggerAIResultsPanel';
import AIPerformanceMetrics from '@/components/system-status/ai-server/AIPerformanceMetrics';

function AIServerStatus() {
  return (
    <main className="p-4 sm:p-8 bg-gray-50 min-h-screen flex flex-col gap-4 sm:gap-6">
      {/* Top: Health + Combined Controls */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 w-full">
        <div className="flex-1 w-full">
          <AISystemsHealthPanel />
        </div>
        <div className="flex-1 w-full">
          <CombinedAIControls />
        </div>
      </div>
      {/* Middle: MainAI & TriggerAI Control Panels */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 w-full">
        <div className="flex-1 w-full">
          <MainAIControlPanel />
        </div>
        <div className="flex-1 w-full">
          <TriggerAIControlPanel />
        </div>
      </div>
      {/* Bottom: Results + Metrics */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 w-full">
        <div className="flex-1 w-full">
          <MainAIResultsPanel />
          <TriggerAIResultsPanel />
        </div>
        <div className="flex-1 w-full">
          <AIPerformanceMetrics />
        </div>
      </div>
    </main>
  );
}

export default AIServerStatus;
