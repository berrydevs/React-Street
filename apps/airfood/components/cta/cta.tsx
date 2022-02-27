import styles from './cta.module.scss';

/* eslint-disable-next-line */
export interface CtaProps {}

export function Cta(props: CtaProps) {
  return (
    <div className={styles.sectionCta}>
      <div className={`container `}>
        <div className= {styles.cta}>
          <div className={styles.textBox}></div>
          <div className={styles.imageBox} role="img" aria-label='Woman enjoying food'></div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
