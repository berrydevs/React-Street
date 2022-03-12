import { css } from '@emotion/react';
import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface HeaderProps {}

const containerStyle = css`
  min-height: 100vh;
  padding: 1rem 0;
  display: grid;
  place-items: center;
`;

const titleStyle = css`
  font-size: 4rem;
  text-align: center;
`;

export function Header(props: HeaderProps) {
  return (
    <header css={containerStyle}>
      <h1 css={titleStyle}>Welcome to Header!</h1>
    </header>
  );
}

export default Header;
