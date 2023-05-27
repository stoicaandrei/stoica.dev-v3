import { useRouter } from 'next/router';
import { HeaderProps } from './Header.types';

export const Header = (props: HeaderProps) => {
  let isHomePage = useRouter().pathname === '/';

  return (
    <>
      <header {...props}></header>
      {isHomePage && <div style={{ height: 'var(--content-offset)' }} />}
    </>
  );
};
