import Link from 'next/link';
import {
  NavigationProps,
  NavItemProps,
} from '../Navigation.types';
import clsx from 'clsx';

export const DesktopNavigation = ({
  activePath,
  items,
  ...props
}: NavigationProps) => {
  return (
    <nav {...props}>
      <ul className="flex justify-evenly rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {items.map((item) => (
          <li key={String(item.href)} className="flex-1">
            <DesktopNavItem {...item} active={item.href === activePath} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

const DesktopNavItem = ({ active, href, label }: NavItemProps) => {
  return (
    <Link
      href={href}
      className={clsx(
        'relative block px-3 py-2 transition text-center w-full',
        active
          ? 'text-teal-500 dark:text-teal-400'
          : 'hover:text-teal-500 dark:hover:text-teal-400'
      )}
    >
      {label}
      {active && (
        <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
      )}
    </Link>
  );
};
