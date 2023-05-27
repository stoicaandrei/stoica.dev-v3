import clsx from 'clsx';
import { IconProps } from './Icon.types';
import icons from './icons';

export const Icon = ({
  icon,
  className,
  clickable = false,
  revertColors = false,
  ...props
}: IconProps) => {
  const IconComponent = icons[icon];

  if (!IconComponent) {
    throw new Error(`Icon ${icon} does not exist`);
  }

  className = clsx(
    'h-6 w-6 transition',
    {
      'cursor-pointer': clickable,
      'fill-zinc-500 dark:fill-zinc-400': !revertColors,
      'hover:fill-zinc-600 dark:hover:fill-zinc-300':
        clickable && !revertColors,

      'dark:fill-zinc-700 dark:stroke-zinc-500 fill-zinc-100 stroke-zinc-500':
        revertColors,
      'hover:fill-zinc-200 dark:hover:fill-zinc-400 dark:hover:stroke-zinc-400':
        clickable && revertColors,
    },
    className
  );

  return <IconComponent className={className} {...props} />;
};
