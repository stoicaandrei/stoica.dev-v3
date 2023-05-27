import { IconProps } from './Icon.types';
import icons from './icons';

export const Icon = ({ icon, ...props }: IconProps) => {
  const IconComponent = icons[icon];

  return <IconComponent {...props} />;
};
