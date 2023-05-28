'use client';
import { HeaderProps } from './Header.types';
import { Avatar, Container, MoonIcon, SunIcon } from '@/components/atoms';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import avatarImage from '@/images/avatar.jpg';
import { Navigation } from '@/components/molecules';
import { toggleDarkMode } from './utils/toggleDarkmode';
import { updateAvatarStyles, updateHeaderStyles } from './utils/scrollStyling';

export const Header = ({
  highlightAvatar = false,
  activePath,
  ...props
}: HeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let downDelay = avatarRef.current?.offsetTop ?? 0;
    let upDelay = 64;

    function updateStyles() {
      updateHeaderStyles({
        headerRect: headerRef.current?.getBoundingClientRect(),
        downDelay,
        upDelay,
      });
      updateAvatarStyles({
        downDelay,
      });
    }

    updateStyles();
    window.addEventListener('scroll', updateStyles, { passive: true });
    window.addEventListener('resize', updateStyles);

    return () => {
      window.removeEventListener('scroll', updateStyles);
      window.removeEventListener('resize', updateStyles);
    };
  }, [highlightAvatar]);

  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-col"
        style={{
          height: 'var(--header-height)',
          marginBottom: 'var(--header-mb)',
        }}
        {...props}
      >
        {highlightAvatar && (
          <>
            <div
              ref={avatarRef}
              className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
            />
            <Container
              className="top-0 order-last -mb-3 pt-3"
              style={{ position: 'sticky' }}
            >
              <div
                className="top-[var(--avatar-top,theme(spacing.3))] w-full"
                style={{ position: 'var(--header-inner-position)' }}
              >
                <div className="relative">
                  <Link href="/" aria-label="Home">
                    <Avatar
                      size="large"
                      className="block h-16 w-16 origin-left"
                      style={{ transform: 'var(--avatar-image-transform)' }}
                      src={avatarImage}
                      alt="Author Picture"
                    />
                  </Link>
                </div>
              </div>
            </Container>
          </>
        )}
        <div
          ref={headerRef}
          className="top-0 z-10 h-16 pt-6"
          style={{ position: 'sticky' }}
        >
          <Container
            className="top-[var(--header-top,theme(spacing.6))] w-full"
            style={{ position: 'var(--header-inner-position)' }}
          >
            <div className="relative flex gap-4">
              <div className="flex flex-1 pointer-events-auto">
                {!highlightAvatar && (
                  <Link href="/">
                    <Avatar bordered src={avatarImage} alt="Author Picture" />
                  </Link>
                )}
              </div>
              <div className="flex flex-1 justify-end md:justify-center pointer-events-auto">
                <Navigation
                  activePath={activePath}
                  items={[
                    { href: '/about', label: 'About' },
                    {
                      href: '/articles',
                      label: 'Articles',
                    },
                    {
                      href: '/projects',
                      label: 'Projects',
                    },
                    {
                      href: '/speaking',
                      label: 'Speaking',
                    },
                    { href: '/uses', label: 'Uses' },
                  ]}
                />
              </div>
              <div className="flex justify-end md:flex-1 pointer-events-auto">
                <button
                  type="button"
                  aria-label="Toggle dark mode"
                  className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                  onClick={toggleDarkMode}
                >
                  <SunIcon className="dark:hidden" groupHover />
                  <MoonIcon className="hidden dark:block" groupHover />
                </button>
              </div>
            </div>
          </Container>
        </div>
      </header>
      {highlightAvatar && <div style={{ height: 'var(--content-offset)' }} />}
    </>
  );
};
