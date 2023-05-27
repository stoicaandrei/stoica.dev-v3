import { StaticImageData } from 'next/image';

export interface AvatarProps {
  size?: 'normal' | 'large';
  src: string | StaticImageData;
  alt: string;
  className?: string;
}
