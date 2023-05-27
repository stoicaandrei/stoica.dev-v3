import clsx from 'clsx';
import { IconProps } from './Icon.types';

export const Icon = ({
  className,
  clickable = false,
  outlined = false,
  ...props
}: IconProps) => {
  className = clsx(
    'h-6 w-6 transition',
    {
      'cursor-pointer': clickable,

      'fill-zinc-500': !outlined,
      'dark:fill-zinc-400': !outlined,
      'hover:fill-zinc-600': !outlined && clickable,
      'dark:hover:fill-zinc-300': !outlined && clickable,

      'fill-zinc-100 stroke-zinc-500': outlined,
      'dark:fill-zinc-700 dark:stroke-zinc-500': outlined,
      'hover:fill-zinc-200 hover:stroke-zinc-700': outlined && clickable,
      'dark:hover:stroke-zinc-400': outlined && clickable,
    },
    className
  );

  // We render the children as the icon itself
  return <div className={className} {...props} />;
};
