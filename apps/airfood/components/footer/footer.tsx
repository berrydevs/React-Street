import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.scss';
/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container grid ${styles.footerGrid}`}>
        <div className={styles.logoCol}>
          <Link href={'#'} passHref>
            <Image
              src={'/static/img/omnifood-logo.png'}
              className={styles.logo}
              alt="Airfood, different people eating healthy food."
              width={150}
              height={33}
            />
          </Link>

          <ul className={styles.socialLinks}>
            <li>
              <a href="#">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
          </ul>

          <p className={styles.copyright}>
            Copyright &copy; {currentYear} by Omnifood, Inc. All rights
            reserved.
          </p>
        </div>

        <div className={styles.addressCol}>
          <p className={styles.footerHeading}>Contact us</p>
          <address className={styles.contacts}>
            <p>623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
            <p>
              <a href="tel:415-201-6370">415-201-6370</a>
              <br />
              <a href="mailto:hello@omnifood.com">hello@omnifood.com</a>
            </p>
          </address>
        </div>

        <div className={styles.navCol}>
          <p className={styles.footerHeading}>Account</p>
          <ul className={styles.footerNav}>
            <li>
              <Link href={'#'}>Create account</Link>
            </li>
            <li>
              <Link href={'#'}>Sign in</Link>
            </li>
            <li>
              <Link href={'#'}>iOS app</Link>
            </li>
            <li>
              <Link href={'#'}>Android app</Link>
            </li>
          </ul>
        </div>

        <div className={styles.navCol}>
          <p className={styles.footerHeading}>Company</p>
          <ul className={styles.footerNav}>
            <li>
              <Link href={'#'}> About Omnifood</Link>
            </li>
            <li>
              <Link href={'#'}>For Business</Link>
            </li>
            <li>
              <Link href={'#'}> Cooking partners</Link>
            </li>
            <li>
              <Link href={'#'}>Careers</Link>
            </li>
          </ul>
        </div>

        <div className={styles.navCol}>
          <p className={styles.footerHeading}>Resources</p>
          <ul className={styles.footerNav}>
            <li>
              <Link href={'#'}>Recipe directory</Link>
            </li>
            <li>
              <Link href={'#'}>Help center</Link>
            </li>
            <li>
              <Link href={'#'}>Privacy & terms</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
