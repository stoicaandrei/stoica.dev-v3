import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface NavItemProps {
  active?: boolean;
  href: string;
  label: ReactNode;
}

export interface NavigationProps extends ComponentPropsWithoutRef<'nav'> {
  activePath?: string;
  items: NavItemProps[];
}
