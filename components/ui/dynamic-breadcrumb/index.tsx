'use client';

// import Link from "next/link";
// Adjust the import path as needed
import { usePathname } from 'next/navigation';
import React from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

function toTitleCase(segment: string) {
  return segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function DynamicBreadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname
    .split('/')
    .filter((segment) => segment);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="text-blue-500">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const pathUrl =
            '/' + pathSegments.slice(0, index + 1).join('/');
          const label = toTitleCase(decodeURIComponent(segment));

          return (
            <React.Fragment key={pathUrl}>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="text-gray-500">
                    {label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    href={pathUrl}
                    className="capitalize text-blue-500">
                    {label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
