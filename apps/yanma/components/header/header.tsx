import Logo from '@components/logo/logo';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface HeaderProps {}

const containerStyle = css`
  min-height: 60vh;
  padding: 1rem 0;
  display: grid;
  place-items: center;
  background-color: var(--background-accent);
`;

const titleStyle = css`
  font-size: 4rem;
  text-align: center;
`;

export function Header(props: HeaderProps) {
  return (
    <header css={containerStyle}>
      <Logo />
    </header>
  );
}

export default Header;
