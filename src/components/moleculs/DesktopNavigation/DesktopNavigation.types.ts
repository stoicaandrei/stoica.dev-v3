import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface DesktopNavItemProps {
  active?: boolean;
  href: string;
  label: ReactNode;
}

export interface DesktopNavigationProps extends ComponentPropsWithoutRef<'nav'> {
  activePath?: string;
  items: DesktopNavItemProps[];
}
