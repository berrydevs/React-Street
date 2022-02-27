import styles from './feature.module.scss';

/* eslint-disable-next-line */
export interface FeatureProps {
  title: string;
  content: string;
  icon: string;
}

export function Feature(props: FeatureProps) {
  const { title, content, icon } = props;
  return (
    <div className={styles.feature}>
      <span className={styles.icon}>
        <ion-icon name={icon}></ion-icon>
      </span>
      <p className={styles.title}>{title}</p>
      <p className={styles.text}>{content}</p>
    </div>
  );
}

export default Feature;
