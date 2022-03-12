import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IoMdPlanet as Saturn } from 'react-icons/io';
/* eslint-disable-next-line */
export interface LogoProps {}

const saturnStyle = css`
  position: relative;
  top: 0.2em;
`;

const logoStyle = css`
  font-size: 7rem;
  display: block;
  text-align: center;
  font-variant: small;
`;

export function Logo(props: LogoProps) {
  return (
    <span css={logoStyle}>
      devl
      <Saturn css={saturnStyle} />g
    </span>
  );
}

export default Logo;
