import { IoLogoGithub as Github } from 'react-icons/io';
import { FiTwitter as Twitter } from 'react-icons/fi';
import { SiUdemy as Udemy, SiRss as Rss } from 'react-icons/si';
import { metaData } from 'config';
import { leakedList } from '@shared/list-style';
import Link from 'next/link';
import { css } from '@emotion/react';
import FooterPrint from '@components/footer-print/footer-print';

const footer = css`
  margin-top: 10ch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--background-accent);
`;

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  const { author } = metaData;
  return (
    <footer css={footer}>
      <ul css={leakedList}>
        <li>
          <a
            aria-label="To Mysha Codes github profile"
            href={author.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </li>
        <li>
          <a
            aria-label="To Mysha Codes twitter profile"
            href={author.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
        </li>
        <li>
          <a
            aria-label="To this course's Udemy page"
            href={author.udemy}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Udemy />
          </a>
        </li>
        <li>
          <Link href="/api/rss">
            <a aria-label="Get RSS feed">
              <Rss />
            </a>
          </Link>
        </li>
      </ul>
      <FooterPrint />
    </footer>
  );
}

export default Footer;
