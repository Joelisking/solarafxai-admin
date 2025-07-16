import React from 'react';
import NewsFeedPanel from './NewsFeedPanel';
import NewsAnalyticsPanel from './NewsAnalyticsPanel';
import NewsSourceManagementPanel from './NewsSourceManagementPanel';

function NewsManagement() {
  return (
    <main className="p-8 bg-gray-50 min-h-screen flex flex-col gap-6">
      <NewsFeedPanel />
      <NewsAnalyticsPanel />
      <NewsSourceManagementPanel />
    </main>
  );
}

export default NewsManagement;
