import React from 'react';
import ComparativeAnalysisPanel from '@/components/ai-management/ai-results/ComparativeAnalysisPanel';
import PerformanceAnalyticsPanel from '@/components/ai-management/ai-results/PerformanceAnalyticsPanel';
import HistoricalTrendsPanel from '@/components/ai-management/ai-results/HistoricalTrendsPanel';

function AIResults() {
  return (
    <main className="px-2 py-4 sm:p-8 bg-gray-50 min-h-screen flex flex-col gap-4 sm:gap-6">
      <ComparativeAnalysisPanel />
      <PerformanceAnalyticsPanel />
      <HistoricalTrendsPanel />
    </main>
  );
}

export default AIResults;
