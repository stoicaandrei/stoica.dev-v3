import clsx from 'clsx';
import { IconProps } from './Icon.types';

// The icon component is a wrapper around the SVG element
// that provides some default styling and a few props
// SVG elements are taken from https://heroicons.com/
export const Icon = ({
  className,
  clickable = false,
  outlined = false,
  groupHover = false,
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
      'group-hover:fill-zinc-600': !outlined && groupHover,
      'dark:group-hover:fill-zinc-300': !outlined && groupHover,

      'fill-zinc-100 stroke-zinc-500': outlined,
      'dark:fill-zinc-700 dark:stroke-zinc-500': outlined,
      'hover:fill-zinc-200 hover:stroke-zinc-700': outlined && clickable,
      'dark:hover:stroke-zinc-400 dark:hover:fill-zinc-700':
        outlined && clickable,
      'group-hover:fill-zinc-200 group-hover:stroke-zinc-700':
        outlined && groupHover,
      'dark:group-hover:stroke-zinc-400 dark:group-hover:fill-zinc-700':
        outlined && groupHover,
    },
    className
  );

  return <div className={className} {...props} />;
};
