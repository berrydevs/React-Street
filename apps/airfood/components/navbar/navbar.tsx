import './navbar.module.scss';
import Link from 'next/link';
import styles from './navbar.module.scss';
/* eslint-disable-next-line */
export interface NavbarProps {
  // navOpen: string;
}

export function Navbar(props: NavbarProps) {
  // const { navOpen } = props;
  return (
    // <div className={styles.navOpen}>
    <div className="">
      <nav className={`${styles.mainNav} `}>
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

      <div className={styles.btnMobileNav}>
        <span className={styles.iconMobileNav}>
          <ion-icon name="menu-outline"></ion-icon>
        </span>
        <span className={styles.iconMobileNav}>
          <ion-icon name="close-outline"></ion-icon>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
