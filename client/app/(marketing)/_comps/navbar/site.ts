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
  { title: 'FAQ', href: '/#' },
  { title: 'Privacy Policy', href: '/#' },
  { title: 'Terms of Service', href: '/#' },
  { title: 'About Us', href: '/#' },
];
