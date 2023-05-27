import Image from 'next/image';
import { AvatarProps } from './Avatar.types';
import clsx from 'clsx';

export const Avatar = ({
  src,
  alt,
  className,
  size = 'normal',
  ...props
}: AvatarProps): JSX.Element => {
  return (
    <div
      className={clsx(
        className,
        'h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'
      )}
      {...props}
    >
      <Image
        src={src}
        alt=""
        sizes={size === 'large' ? '4rem' : '2.25rem'}
        className={clsx(
          'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
          {
            'h-16 w-16': size === 'large',
            'h-9 w-9': size === 'normal',
          }
        )}
        priority
      />
    </div>
  );
};
