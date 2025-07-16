import React from 'react';
import ServerHealthPanel from '@/components/system-status/data-server/ServerHealthPanel';
import DataPollerControl from '@/components/system-status/data-server/DataPollerControl';
import NewsFetcherControl from '@/components/system-status/data-server/NewsFetcherControl';
import MarketDataOverview from '@/components/system-status/data-server/MarketDataOverview';
import NewsDataOverview from '@/components/system-status/data-server/NewsDataOverview';

function DataServerStatus() {
  return (
    <main className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <ServerHealthPanel />
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
        {/* Left: Controls */}
        <div className="flex-1 min-w-0 max-w-full lg:min-w-[350px] lg:max-w-md flex flex-col gap-4">
          <DataPollerControl />
          <NewsFetcherControl />
        </div>
        {/* Right: Data Overview */}
        <div className="flex-1 flex flex-col gap-4 mt-4 lg:mt-0">
          <MarketDataOverview />
          <NewsDataOverview />
        </div>
      </div>
    </main>
  );
}

export default DataServerStatus;
