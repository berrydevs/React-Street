import './navbar.module.scss';
import Link from 'next/link';
import styles from './navbar.module.scss';
/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <nav className={styles.mainNav}>
      <ul className={styles.mainNavList}>
        <li className={styles.mainNavLink}>
          <a href="#">Section 1</a>
        </li>
        <li className={styles.mainNavLink}>
          <a href="#">Section 2</a>
        </li>
        <li className={styles.mainNavLink}>
          <a href="#">Section 3</a>
        </li>
        <li className={styles.mainNavLink}>
          <a href="#">Section 4</a>
        </li>
        <li className={styles.mainNavLink}>
          <a href="#" className={styles.navCta}>
            Section 5
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
