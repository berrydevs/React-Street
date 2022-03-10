import './navbar.module.scss';
// import Link from 'next/link';
import styles from './navbar.module.scss';
import { Link, animateScroll as scroll } from 'react-scroll';

import { useState } from 'react';
/* eslint-disable-next-line */
export interface NavbarProps {
  // navOpen: string;
}

export function Navbar(props: NavbarProps) {
  const [isMobileMenu, setisMobileMenu] = useState(false);
  // const { navOpen } = props;
  return (
    <div className={isMobileMenu ? styles.navOpen : ''}>
      {/* <div className=""> */}
      <nav className={`${styles.mainNav} `}>
        <ul className={styles.mainNavList}>
          <li className={styles.mainNavLink}>
            <Link
              to="how"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => {
                setisMobileMenu(!isMobileMenu);
              }}
            >
              How it works
            </Link>
          </li>
          <li className={styles.mainNavLink}>
            <Link
              to="meals"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => {
                setisMobileMenu(!isMobileMenu);
              }}
            >
              Meals
            </Link>
          </li>
          <li className={styles.mainNavLink}>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => {
                setisMobileMenu(!isMobileMenu);
              }}
            >
              Testimonials
            </Link>
          </li>
          <li className={styles.mainNavLink}>
            <Link
              to="pricing"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => {
                setisMobileMenu(!isMobileMenu);
              }}
            >
              Pricing
            </Link>
          </li>
          <li className={styles.mainNavLink}>
            <Link
              to="cta"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => {
                setisMobileMenu(!isMobileMenu);
              }}
            >
              <a className={styles.navCta}>Try for free</a>
              {/* Try for free */}
            </Link>
          </li>
        </ul>
      </nav>

      <button
        className={styles.btnMobileNav}
        onClick={() => {
          setisMobileMenu(!isMobileMenu);
        }}
      >
        <span className={styles.iconMobileNav}>
          <ion-icon name="menu-outline"></ion-icon>
        </span>
        <span className={styles.iconMobileNav}>
          <ion-icon name="close-outline"></ion-icon>
        </span>
      </button>
    </div>
  );
}

export default Navbar;
