import Link from 'next/link';
import { NavigationProps } from './Navigation.types';
import { NavItem } from '@/components/atoms';

export const Navigation = ({
  activeItem,
  items,
  ...props
}: NavigationProps) => {
  return (
    <nav {...props}>
      <ul className="flex justify-evenly rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {items.map((item, index) => {
          const navItem = (
            <NavItem onClick={item.onClick} active={activeItem === item.key}>
              {item.children}
            </NavItem>
          );

          if (item.href)
            return (
              <li key={item.key} className="flex-1">
                <Link href={item.href}>{navItem}</Link>
              </li>
            );

          return (
            <li key={item.key} className="flex-1">
              {navItem}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
