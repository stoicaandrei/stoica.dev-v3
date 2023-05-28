import { ComponentPropsWithoutRef } from 'react';

export interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  innerClassName?: string;
}
