import { IconProps } from '../Icon.types';
import { Icon } from '../Icon';

export const CloseIcon = (props: IconProps) => (
  <Icon outlined {...props}>
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Icon>
);
