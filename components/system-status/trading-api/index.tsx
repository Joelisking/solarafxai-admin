import React from 'react';
import APIHealthPanel from '@/components/system-status/trading-api/APIHealthPanel';
import DatabaseStatusPanel from '@/components/system-status/trading-api/DatabaseStatusPanel';
import ActiveConnectionsPanel from '@/components/system-status/trading-api/ActiveConnectionsPanel';
import APIUsageStatisticsPanel from '@/components/system-status/trading-api/APIUsageStatisticsPanel';
import RecentActivityLogPanel from '@/components/system-status/trading-api/RecentActivityLogPanel';

function TradingAPIStatus() {
  return (
    <main className="p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen flex flex-col gap-4 sm:gap-6">
      {/* Top: API Health + Database Status */}
      <div className="flex flex-col xl:flex-row gap-4 sm:gap-6 w-full">
        <div className="flex-1 w-full">
          <APIHealthPanel />
        </div>
        <div className="flex-1 w-full">
          <DatabaseStatusPanel />
        </div>
      </div>
      {/* Middle: Active Connections + API Usage Statistics */}
      <div className="flex flex-col xl:flex-row gap-4 sm:gap-6 w-full">
        <div className="flex-1 w-full">
          <ActiveConnectionsPanel />
        </div>
        <div className="flex-1 w-full">
          <APIUsageStatisticsPanel />
        </div>
      </div>
      {/* Bottom: Recent Activity Log */}
      <RecentActivityLogPanel />
    </main>
  );
}

export default TradingAPIStatus;
