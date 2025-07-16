'use client';
import React, { useEffect, useRef, memo } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';

function MarketDataRealtimePanel() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const currentContainer = container.current;

    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: 'NASDAQ:AAPL',
      interval: 'D',
      timezone: 'Etc/UTC',
      theme: 'light',
      style: '1',
      locale: 'en',
      allow_symbol_change: true,
      calendar: false,
      support_host: 'https://www.tradingview.com',
      height: '100%',
    });

    currentContainer.appendChild(script);

    return () => {
      if (currentContainer) currentContainer.innerHTML = '';
    };
  }, []);

  return (
    <Card className="mb-6 h-[70vh]">
      <CardHeader>
        <CardTitle>Real-time Data Display</CardTitle>
      </CardHeader>
      <CardContent className="px-4 h-full">
        <div
          className="tradingview-widget-container w-full h-full"
          ref={container}
          style={{ height: '100%' }}>
          <div
            className="tradingview-widget-container__widget h-full w-full"
            style={{ height: '100%', width: '100%' }}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default memo(MarketDataRealtimePanel);
