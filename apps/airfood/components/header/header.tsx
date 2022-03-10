import Image from 'next/image';
import Navbar from '../navbar/navbar';
import styles from './header.module.scss';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  // const { ref, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: 0,
  //   root: null,
  //   rootMargin: '-8px',
  // });

  // const [isNavbarSticky, setIsNavbarSticky] = useState(false);

  // useEffect(() => {
  //   if (inView) {
  //     const { isIntersecting } = entry;
  //     console.log(
  //       '🚀 ~ file: header.tsx ~ line 25 ~ Header ~ isIntersecting',
  //       isIntersecting
  //     );
  //     setIsNavbarSticky(true);
  //   }
  //   // if (!isIntersecting) setIsNavbarSticky(true);
  // }, [inView, entry]);

  return (
    // <header
    //   className={`${isNavbarSticky ? `${styles.sticky}` : ''}  ${
    //     styles.header
    //   }`}
    //   ref={ref}
    // >
    // <header className={`  ${styles.header}`}>
    <header className={`${styles.sticky}   ${styles.header}`}>
      <div className={styles.logo}>
        <Link href={'#'} passHref>
          <Image
            src={'/static/img/omnifood-logo.png'}
            className="logo"
            alt="Airfood, different people eating healthy food."
            layout="fill"
            objectFit="contain"
          />
        </Link>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
