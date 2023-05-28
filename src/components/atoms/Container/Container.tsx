import clsx from 'clsx';
import { ContainerProps } from './Container.types';

const OuterContainer = ({ className, children, ...props }: ContainerProps) => {
  return (
    <div className={clsx('sm:px-8', className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  );
};

const InnerContainer = ({ className, children, ...props }: ContainerProps) => {
  return (
    <div
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
};

export const Container = ({
  children,
  innerClassName,
  ...props
}: ContainerProps) => {
  return (
    <OuterContainer {...props}>
      <InnerContainer className={innerClassName}>{children}</InnerContainer>
    </OuterContainer>
  );
};
