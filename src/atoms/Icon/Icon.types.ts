import { ComponentPropsWithoutRef } from 'react';
import iconsMap from './icons';

export interface SVGProps extends ComponentPropsWithoutRef<'svg'> {}

export interface IconProps extends SVGProps {
  icon: keyof typeof iconsMap;
  clickable?: boolean;
}
