import React from 'react';
import MarketDataRealtimePanel from '@/components/data-management/market-data/MarketDataRealtimePanel';
import MarketDataQualityPanel from '@/components/data-management/market-data/MarketDataQualityPanel';
import MarketDataManagementPanel from '@/components/data-management/market-data/MarketDataManagementPanel';

function MarketData() {
  return (
    <main className="p-8 bg-gray-50 min-h-screen flex flex-col gap-6">
      <MarketDataRealtimePanel />
      <MarketDataQualityPanel />
      <MarketDataManagementPanel />
    </main>
  );
}

export default MarketData;
