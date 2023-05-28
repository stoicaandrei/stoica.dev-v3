import { ComponentPropsWithoutRef } from 'react';
export interface IconProps extends ComponentPropsWithoutRef<'div'> {
  clickable?: boolean;
  groupHover?: boolean;
  outlined?: boolean;
}
