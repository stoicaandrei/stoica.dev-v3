import { StaticImageData } from 'next/image';
import { ComponentPropsWithoutRef } from 'react';

export interface AvatarProps extends ComponentPropsWithoutRef<'div'> {
  size?: 'normal' | 'large';
  bordered?: boolean;
  src: string | StaticImageData;
  alt: string;
}
