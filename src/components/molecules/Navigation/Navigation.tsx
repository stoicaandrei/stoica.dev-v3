import { DesktopNavigation } from './variants/DesktopNavigation';
import { MobileNavigation } from './variants/MobileNavigation';
import { NavigationProps } from './Navigation.types';

export const Navigation = (props: NavigationProps) => {
  return (
    <>
      <DesktopNavigation {...props} className="hidden md:block" />
      <MobileNavigation {...props} className="md:hidden" />
    </>
  );
};
