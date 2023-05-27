import clsx from 'clsx';
import { IconProps } from './Icon.types';
import icons from './icons';

export const Icon = ({
  icon,
  className,
  clickable = false,
  ...props
}: IconProps) => {
  const IconComponent = icons[icon];

  if (!IconComponent) {
    throw new Error(`Icon ${icon} does not exist`);
  }

  className = clsx(
    'h-6 w-6 fill-zinc-500 transition  dark:fill-zinc-400 ',
    {
      'cursor-pointer hover:fill-zinc-600 dark:hover:fill-zinc-300': clickable,
    },
    className
  );

  return <IconComponent className={className} {...props} />;
};
