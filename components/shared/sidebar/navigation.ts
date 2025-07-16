import { LucideIconProps } from '../../ui/icon';

// Define the sub-item structure for nested menu items.
interface SubItem {
  title: string;
  url?: string;
  children?: SubItem[];
}

// Define the main menu item structure.
export interface MenuItem {
  title: string;
  url?: string;
  icon: LucideIconProps;
  isActive?: boolean;
  items?: SubItem[];
  allowedRoles?: string[];
}
// Define the structure for each main route section.
export interface Route {
  title: string;
  menu: MenuItem[];
}

export const ROUTES: Route[] = [
  {
    title: 'Overview',
    menu: [
      {
        title: 'Dashboard',
        icon: 'LayoutDashboard',
        url: '/dashboard',
      },
      {
        title: 'System Status',
        icon: 'Server',
        url: '/system-status',
        items: [
          {
            title: 'Data Server',
            url: '/system-status/data-server',
          },
          {
            title: 'AI Server',
            url: '/system-status/ai-server',
          },
          {
            title: 'Trading API',
            url: '/system-status/trading-api',
          },
        ],
      },
    ],
  },
  {
    title: 'AI, Data & Trading',
    menu: [
      {
        title: 'AI Management',
        icon: 'Bot',
        items: [
          {
            title: 'Main AI Control',
            url: '/ai-management/main-ai-control',
          },
          {
            title: 'Trigger AI Control',
            url: '/ai-management/trigger-ai-control',
          },
          {
            title: 'AI Results',
            url: '/ai-management/ai-results',
          },
        ],
      },
      {
        title: 'Data Management',
        icon: 'Database',
        items: [
          {
            title: 'Market Data',
            url: '/data-management/market-data',
          },
          {
            title: 'News Management',
            url: '/data-management/news-management',
          },
          {
            title: 'Data Sources',
            url: '/data-management/data-sources',
          },
        ],
      },
      {
        title: 'Trading Operations',
        icon: 'ChartLine',
        items: [
          {
            title: 'Live Trades',
            url: '/trading-operations/live-trades',
          },
          {
            title: 'Trade History',
            url: '/trading-operations/trade-history',
          },
          {
            title: 'P&L Analytics',
            url: '/trading-operations/pnl-analytics',
          },
        ],
      },
    ],
  },
  {
    title: 'User Settings & Reports',
    menu: [
      {
        title: 'User Management',
        icon: 'User',
        items: [
          {
            title: 'User Accounts',
            url: '/user-management/user-accounts',
          },
          {
            title: 'MT5 Configurations',
            url: '/user-management/mt5-configurations',
          },
          {
            title: 'Risk Settings',
            url: '/user-management/risk-settings',
          },
        ],
      },
      {
        title: 'Reports & Analytics',
        icon: 'Paperclip',
        url: '/reports',
      },
    ],
  },
  {
    title: 'Alerts, Settings & Configurations',
    menu: [
      {
        title: 'System Tools',
        icon: 'Wrench',
        items: [
          {
            title: 'Configuration',
            url: '/system-tools/configuration',
          },
          {
            title: 'Maintenance',
            url: '/system-tools/maintenance',
          },
          {
            title: 'Logs',
            url: '/system-tools/logs',
          },
        ],
      },
      {
        title: 'Alerts & Notifications',
        icon: 'Bell',
        url: '/alerts',
      },
      {
        title: 'Settings',
        icon: 'Settings',
        url: '/settings',
      },
    ],
  },
];
