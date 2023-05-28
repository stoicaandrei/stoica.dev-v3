import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface MobileNavItemProps {
  active?: boolean;
  href: string;
  label: ReactNode;
}

export interface MobileNavigationProps extends ComponentPropsWithoutRef<'nav'> {
  activePath?: string;
  items: MobileNavItemProps[];
}
