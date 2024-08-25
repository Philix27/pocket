'use client';

import { AppPages } from '../../../lib';

export interface MainNavProps {
  title: string;
  items?: NavItem[];
}

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
}

export const MarketingNavItems: NavItem[] = [
  { title: 'Blogs', href: AppPages.blogs },
  { title: 'FAQ', href: AppPages.faq },
];
