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
          <a href="#">How it works</a>
        </li>
        <li className={styles.mainNavLink}>
          <a href="#">Meals</a>
        </li>
        <li className={styles.mainNavLink}>
          <a href="#">Testimonials</a>
        </li>
        <li className={styles.mainNavLink}>
          <a href="#">Pricing</a>
        </li>
        <li className={styles.mainNavLink}>
          <a href="#" className={styles.navCta}>
            Try for free
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
