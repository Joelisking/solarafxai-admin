import React from 'react';
import SystemHealthCard, {
  ServerStatus,
} from '@/components/dashboard/SystemHealthCard';
import MetricCard from '@/components/dashboard/MetricCard';
import ChartsSection from '@/components/dashboard/ChartsSection';
import ActivityFeed from '@/components/dashboard/ActivityFeed';
import QuickActions from '@/components/dashboard/QuickActions';

function Dashboard() {
  // Mock server status data
  const servers: ServerStatus[] = [
    { name: 'AI Server', status: 'up' },
    { name: 'Data Server', status: 'down' },
    { name: 'Trading API', status: 'up' },
  ];

  // Other metrics
  const metrics = [
    {
      label: 'Active Users',
      value: '24 Online',
      sub: '156 Total',
    },
    {
      label: 'Total Trades',
      value: '1,247',
      sub: 'Today',
    },
    {
      label: 'Daily P&L',
      value: '+$2,450.50',
      sub: '+12.5%',
    },
  ];

  const activities = [
    { time: '12:01', event: 'Trade executed: BUY XAUUSD 1.0 lot' },
    {
      time: '12:00',
      event: 'Server health: All systems operational',
    },
    { time: '11:58', event: 'User login: trader01' },
    { time: '11:55', event: 'Trade executed: SELL XAUUSD 0.5 lot' },
  ];

  return (
    <main className="flex flex-col xl:flex-row gap-6 p-4 sm:p-6 bg-white">
      {/* Main content */}
      <section className="flex-1 flex flex-col gap-6">
        {/* Metrics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          <SystemHealthCard servers={servers} />
          {metrics.map((m, i) => (
            <MetricCard
              key={i}
              label={m.label}
              value={m.value}
              sub={m.sub}
            />
          ))}
        </div>
        {/* Charts Section */}
        <ChartsSection />
      </section>
      {/* Sidebar */}
      <aside className="w-full xl:w-80 flex flex-col gap-6 mt-6 xl:mt-0 ">
        <ActivityFeed activities={activities} />
        <QuickActions servers={servers} />
      </aside>
    </main>
  );
}

export default Dashboard;
