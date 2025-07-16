import React from 'react';
import ComparativeAnalysisPanel from '@/components/ai-management/ai-results/ComparativeAnalysisPanel';
import PerformanceAnalyticsPanel from '@/components/ai-management/ai-results/PerformanceAnalyticsPanel';
import HistoricalTrendsPanel from '@/components/ai-management/ai-results/HistoricalTrendsPanel';

function AIResults() {
  return (
    <main className="p-8 bg-gray-50 min-h-screen flex flex-col gap-6">
      <ComparativeAnalysisPanel />
      <PerformanceAnalyticsPanel />
      <HistoricalTrendsPanel />
    </main>
  );
}

export default AIResults;
