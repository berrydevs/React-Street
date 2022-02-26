import styles from './meal-card.module.scss';
import Image from 'next/image';
/* eslint-disable-next-line */
export interface MealCardProps {
  image: string;
  mealTags: string;
  mealTitle: string;
  rating: string;
  calories: number;
  nutriScore: number;
  totalReviews: number;
}

export function MealCard(props: MealCardProps) {
  const {
    image,
    mealTags,
    mealTitle,
    rating,
    calories,
    nutriScore,
    totalReviews,
  } = props;

  const tags = mealTags.split(' ');
  return (
    <div className={styles.meal}>
      <div className={styles.mealImage}>
        <Image
          src={`/static/img/meals/${image}`}
          alt={`${mealTitle}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={styles.mealContent}>
        <div className={styles.mealTags}>
          {tags.map((tag) => {
            const tagStyles = {
              vegetarian: tag === 'Vegetarian' ? styles.tagVegetarian : '',
              vegan: tag === 'Vegan' ? styles.tagVegan : '',
              paleo: tag === 'Paleo' ? styles.tagPaleo : '',
            };
            return (
              <span
                key={tag}
                className={`${styles.tag}   ${tagStyles.vegetarian}  ${tagStyles.vegan}  ${tagStyles.paleo}`}
              >
                {tag}
              </span>
            );
          })}
        </div>

        <p className={styles.mealTitle}>{mealTitle}</p>

        <ul className={styles.mealAttributes}>
          <li className={styles.mealAttribute}>
            <span className={styles.mealIcon}>
              <ion-icon name="flame-outline"></ion-icon>
            </span>
            <span>
              <strong>{calories}</strong> calories
            </span>
          </li>
          <li className={styles.mealAttribute}>
            <span className={styles.mealIcon}>
              <ion-icon name="restaurant-outline"></ion-icon>
            </span>
            <span>
              NutriScore &reg; <strong>{nutriScore}</strong>
            </span>
          </li>
          <li className={styles.mealAttribute}>
            <span className={styles.mealIcon}>
              <ion-icon name="star-outline"></ion-icon>
            </span>
            <span>
              <strong>{rating}</strong> rating ({totalReviews})
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MealCard;
