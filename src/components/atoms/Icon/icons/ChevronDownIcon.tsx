import { IconProps } from '../Icon.types';
import { Icon } from '../Icon';

export const ChevronDownIcon = (props: IconProps) => (
  <Icon outlined {...props}>
    <svg viewBox="0 0 8 6" aria-hidden="true">
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Icon>
);
