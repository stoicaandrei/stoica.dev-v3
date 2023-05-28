import { LinkProps } from 'next/link';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface FooterNavLinkProps extends LinkProps {
  children?: ReactNode;
}

export interface FooterProps extends ComponentPropsWithoutRef<'footer'> {}
