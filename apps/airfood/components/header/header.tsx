import './header.module.scss';
import Image from 'next/image';
import Navbar from '../navbar/navbar';
import styles from './header.module.scss';
/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header className={styles.header}>
      <Image
        src={'/static/img/omnifood-logo.png'}
        className="logo"
        alt="Airfood, different people eating healthy food."
        width={150}
        height={23}
      />
      <Navbar />
    </header>
  );
}

export default Header;
