'use client';
import { usePathname, useRouter } from 'next/navigation';

import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/shared/sidebar/app-sidebar';
import { DynamicBreadcrumb } from '@/components/ui/dynamic-breadcrumb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icon } from '@/components/ui/icon';
import Footer from '@/components/shared/footer';

export default function Page({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const currentPath = usePathname();
  const handleLogout = () => {
    try {
      document.cookie =
        'isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;' +
        (window.location.protocol === 'https:'
          ? ' Secure; SameSite=Lax'
          : '');

      router.push('/login');
      setTimeout(() => window.location.reload(), 100);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <SidebarProvider
      style={{ '--sidebar-width': '19rem' } as React.CSSProperties}>
      <AppSidebar currentPath={currentPath} />
      <div className="relative flex min-h-svh flex-1 flex-col">
        <header className="bg-white/50 backdrop-blur-sm border-b border-slate-200/60 flex h-16 shrink-0 items-center gap-2 px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 sticky top-0 z-10">
          <div className="flex flex-1 items-center gap-2">
            <SidebarTrigger className="-ml-1 hover:bg-slate-100 rounded-md transition-colors" />
            <Separator orientation="vertical" className="mx-2 h-5" />
            <div className="hidden md:block">
              <DynamicBreadcrumb />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center mr-2">
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none ring-0 active:outline-none active:ring-0">
                  <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-md transition-all duration-200 hover:border-blue-200">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-sm">
                      <Icon name="User" size={16} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-800">
                        {'Joel'}
                      </span>
                    </div>
                    <Icon
                      name="ChevronDown"
                      className="h-4 w-4 text-slate-500 ml-1"
                    />
                  </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-48 mt-1 p-1 rounded-lg border border-slate-200 shadow-lg">
                  <DropdownMenuItem className="flex items-center px-3 py-2 text-sm rounded-md cursor-pointer hover:bg-slate-100 transition-colors">
                    <Icon
                      name="User"
                      className="mr-2 h-4 w-4 text-slate-500"
                    />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center px-3 py-2 text-sm rounded-md cursor-pointer hover:bg-slate-100 transition-colors">
                    <Icon
                      name="Settings"
                      className="mr-2 h-4 w-4 text-slate-500"
                    />
                    Settings
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Separator
                orientation="vertical"
                className="mx-2 h-5"
              />

              <button
                onClick={handleLogout}
                className="flex items-center justify-center rounded-lg p-2 text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer"
                title="Logout">
                <Icon name="LogOut" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </header>
        <SidebarInset className="">
          <div className="px-4 py-2">
            {children}
            <Footer />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
