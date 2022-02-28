import './header.module.scss';
import Image from 'next/image';
import Navbar from '../navbar/navbar';
import styles from './header.module.scss';
import Link from 'next/link';
/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header className={styles.header}>
      <Link href={'#'} passHref>
        <Image
          src={'/static/img/omnifood-logo.png'}
          className="logo"
          alt="Airfood, different people eating healthy food."
          width={150}
          height={23}
        />
      </Link>
      <Navbar />
    </header>
  );
}

export default Header;
