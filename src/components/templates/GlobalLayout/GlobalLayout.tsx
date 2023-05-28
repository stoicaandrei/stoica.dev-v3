'use client';
import { Header } from '@/components/organisms';
import { GlobalLayoutProps } from './GlobalLayout.types';
import { usePathname } from 'next/navigation';

export const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  const pathname = usePathname();

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header highlightAvatar={pathname === '/'} activePath={pathname} />
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  );
};
