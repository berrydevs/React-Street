import Link from 'next/link';
import { GiAstronautHelmet as Astronaut } from 'react-icons/gi';
import { css } from '@emotion/react';
import { leakedList } from '@shared/list-style';
/* eslint-disable-next-line */
export interface NavProps {}

export function Nav(props: NavProps) {
  return (
    <nav css={leakedList}>
      <Link href="/">
        <a aria-label="Back to home">
          <Astronaut />
        </a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
    </nav>
  );
}

export default Nav;
