import { css } from '@emotion/react';
import Image from 'next/image';
import { MdCopyright as Copyright } from 'react-icons/md';
/* eslint-disable-next-line */
export interface FooterPrintProps {}

const copyrightIcon = css`
  position: relative;
  top: 0.2ch;
`;

const note = css`
  display: block;
  margin: 5ch auto 1ch;
  text-align: center;
  color: var(--color-text-invert);
`;

export function FooterPrint(props: FooterPrintProps) {
  const year = new Date().getFullYear();
  return (
    <>
      <Image src={'/img/m.svg'} alt="Mysha Code logo" width={70} height={70} />
      <small css={note}>
        <Copyright css={copyrightIcon} /> Mysha Code - {year}
      </small>
    </>
  );
}

export default FooterPrint;
