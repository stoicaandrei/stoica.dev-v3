import { ComponentPropsWithRef } from 'react';

export interface HeaderProps extends ComponentPropsWithRef<'header'> {
  highlightAvatar?: boolean;
  activePath?: string;
}
