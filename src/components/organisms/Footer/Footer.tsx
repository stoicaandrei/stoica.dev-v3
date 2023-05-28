import { Container } from '@/components/atoms';
import { FooterNavLinkProps, FooterProps } from './Footer.types';
import Link from 'next/link';

export const Footer = (props: FooterProps) => {
  return (
    <footer className="mt-32" {...props}>
      <Container innerClassName="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/speaking">Speaking</NavLink>
            <NavLink href="/uses">Uses</NavLink>
          </div>
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} Spencer Sharp. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

function NavLink({ href, children, ...props }: FooterNavLinkProps) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
      {...props}
    >
      {children}
    </Link>
  );
}
