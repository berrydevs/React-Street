import styles from './gallery.module.scss';
import Image from 'next/image';
/* eslint-disable-next-line */
export interface GalleryProps {}

export function Gallery(props: GalleryProps) {
  return (
    <div className={styles.gallery}>
      <figure className={styles.galleryItem}>
        <Image
          src="/static/img/gallery/gallery-1.jpg"
          layout="fill"
          objectFit="cover"
          alt="Photo of beautifully arranged food"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <Image
          src="/static/img/gallery/gallery-2.jpg"
          layout="fill"
          objectFit="cover"
          alt="Photo of beautifully arranged food"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <Image
          src="/static/img/gallery/gallery-3.jpg"
          layout="fill"
          objectFit="cover"
          alt="Photo of beautifully arranged food"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <Image
          src="/static/img/gallery/gallery-4.jpg"
          layout="fill"
          objectFit="cover"
          alt="Photo of beautifully arranged food"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <Image
          src="/static/img/gallery/gallery-5.jpg"
          layout="fill"
          objectFit="cover"
          alt="Photo of beautifully arranged food"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <Image
          src="/static/img/gallery/gallery-6.jpg"
          layout="fill"
          objectFit="cover"
          alt="Photo of beautifully arranged food"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <Image
          src="/static/img/gallery/gallery-7.jpg"
          layout="fill"
          objectFit="cover"
          alt="Photo of beautifully arranged food"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <Image
          src="/static/img/gallery/gallery-8.jpg"
          layout="fill"
          objectFit="cover"
          alt="Photo of beautifully arranged food"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <Image
          src="/static/img/gallery/gallery-9.jpg"
          layout="fill"
          objectFit="cover"
          alt="Photo of beautifully arranged food"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <Image
          src="/static/img/gallery/gallery-10.jpg"
          layout="fill"
          objectFit="cover"
          alt="Photo of beautifully arranged food"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <Image
          src="/static/img/gallery/gallery-11.jpg"
          layout="fill"
          objectFit="cover"
          alt="Photo of beautifully arranged food"
        />
      </figure>
      <figure className={styles.galleryItem}>
        <Image
          src="/static/img/gallery/gallery-12.jpg"
          layout="fill"
          objectFit="cover"
          alt="Photo of beautifully arranged food"
        />
      </figure>
    </div>
  );
}

export default Gallery;
