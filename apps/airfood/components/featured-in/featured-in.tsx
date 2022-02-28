import styles from './featured-in.module.scss';
import Image from 'next/image';
import Link from 'next/link';
/* eslint-disable-next-line */
export interface FeaturedInProps {}

export function FeaturedIn(props: FeaturedInProps) {
  return (
    <section className={styles.sectionFeatured}>
      <div className="container">
        <h2 className={styles.headingFeaturedIn}>As featured in</h2>
        <div className={styles.logos}>
          <div>
            <Image
              alt="Techcrunch logo"
              src={`/static/img/logos/techcrunch.png`}
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div>
            <Image
              alt="Business Insiders logo"
              src={`/static/img/logos/business-insider.png`}
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div>
            <Image
              alt="The New York Times logo"
              src={`/static/img/logos/the-new-york-times.png`}
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div>
            <Image
              alt="Forbes logo"
              src={`/static/img/logos/forbes.png`}
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div>
            <Image
              alt="USA Today logo"
              src={`/static/img/logos/usa-today.png`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedIn;
