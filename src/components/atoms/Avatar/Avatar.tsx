import Image from 'next/image';
import { AvatarProps } from './Avatar.types';
import clsx from 'clsx';

export const Avatar = ({
  src,
  alt,
  className,
  size = 'normal',
  bordered = false,
  ...props
}: AvatarProps): JSX.Element => {
  const imageSizes = clsx({
    'h-16 w-16': size === 'large',
    'h-9 w-9': size === 'normal',
  });

  const borderSizes = clsx({
    'h-20 w-20 p-2': size === 'large',
    'h-10 w-10 p-0.5': size === 'normal',
  });

  return (
    <div
      className={clsx(
        className,
        'rounded-full bg-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10',
        bordered ? borderSizes : imageSizes
      )}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        sizes={size === 'large' ? '4rem' : '2.25rem'}
        className={clsx(
          'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
          imageSizes
        )}
        priority
      />
    </div>
  );
};
