import { Icon } from '../Icon';
import { IconProps } from '../Icon.types';

export const ArrowDownIcon = (props: IconProps) => (
  <Icon outlined {...props}>
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Icon>
);
