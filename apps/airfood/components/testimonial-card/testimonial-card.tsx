import styles from './testimonial-card.module.scss';
import Image from 'next/image';
/* eslint-disable-next-line */
export interface TestimonialCardProps {
  image: string;
  review: string;
  name: string;
}

export function TestimonialCard(props: TestimonialCardProps) {
  const { image, review, name } = props;
  return (
    <figure className={styles.testimonial}>
      <div className={styles.testimonialImage}>
        <Image
          src={`/static/img/customers/${image}`}
          alt={`Photo of customer ${name}`}
          width="64"
          height={64}
        />
      </div>
      <blockquote className={styles.content}>{review}</blockquote>
      <p className={styles.name}>&mdash; {name}</p>
    </figure>
  );
}

export default TestimonialCard;
