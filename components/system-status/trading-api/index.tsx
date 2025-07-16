import React from 'react';
import APIHealthPanel from '@/components/system-status/trading-api/APIHealthPanel';
import DatabaseStatusPanel from '@/components/system-status/trading-api/DatabaseStatusPanel';
import ActiveConnectionsPanel from '@/components/system-status/trading-api/ActiveConnectionsPanel';
import APIUsageStatisticsPanel from '@/components/system-status/trading-api/APIUsageStatisticsPanel';
import RecentActivityLogPanel from '@/components/system-status/trading-api/RecentActivityLogPanel';

function TradingAPIStatus() {
  return (
    <main className="p-8 bg-gray-50 min-h-screen flex flex-col gap-6">
      {/* Top: API Health + Database Status */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <APIHealthPanel />
        </div>
        <div className="flex-1">
          <DatabaseStatusPanel />
        </div>
      </div>
      {/* Middle: Active Connections + API Usage Statistics */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <ActiveConnectionsPanel />
        </div>
        <div className="flex-1">
          <APIUsageStatisticsPanel />
        </div>
      </div>
      {/* Bottom: Recent Activity Log */}
      <RecentActivityLogPanel />
    </main>
  );
}

export default TradingAPIStatus;
