import { ImageProps } from 'next/image';

export interface AvatarProps extends ImageProps {
  size?: 'normal' | 'large';
}
