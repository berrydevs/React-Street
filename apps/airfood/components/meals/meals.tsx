import styles from './meals.module.scss';
import Image from 'next/image';
import MealCard from '../meal-card/meal-card';
import Link from 'next/link';
/* eslint-disable-next-line */
export interface MealsProps {}

export function Meals(props: MealsProps) {
  return (
    <section className={styles.sectionMeals}>
      <div className="container center-text">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div className="container grid grid--3-cols margin-bottom-md">
        <MealCard
          image={'meal-1.jpg'}
          mealTags={'Vegetarian'}
          mealTitle={'Japanese Gyozas'}
          rating="4.9"
          calories={630}
          nutriScore={74}
          totalReviews={554}
        />
        <MealCard
          image={'meal-2.jpg'}
          mealTags={'Vegan Paleo'}
          mealTitle={'Avocado Salad'}
          rating="4.8"
          calories={400}
          nutriScore={74}
          totalReviews={441}
        />

        <div className="diets">
          <ul className={styles.list}>
            <h3 className="heading-tertiary">Works with any diet</h3>
            <li className={styles.listItem}>
              <span className={styles.listIcon}>
                <ion-icon name="checkmark-outline"></ion-icon>
              </span>
              <span>Vegetarian</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.listIcon}>
                <ion-icon name="checkmark-outline"></ion-icon>
              </span>
              <span>Vegan</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.listIcon}>
                <ion-icon name="checkmark-outline"></ion-icon>
              </span>
              <span>Pescatarian</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.listIcon}>
                <ion-icon name="checkmark-outline"></ion-icon>
              </span>
              <span>Gluten-free</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.listIcon}>
                <ion-icon name="checkmark-outline"></ion-icon>
              </span>
              <span>Lactose-free</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.listIcon}>
                <ion-icon name="checkmark-outline"></ion-icon>
              </span>
              <span>Keto</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.listIcon}>
                <ion-icon name="checkmark-outline"></ion-icon>
              </span>
              <span>Paleo</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.listIcon}>
                <ion-icon name="checkmark-outline"></ion-icon>
              </span>
              <span>Low FODMAP</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.listIcon}>
                <ion-icon name="checkmark-outline"></ion-icon>
              </span>
              <span>Kid-friendly</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.allRecipes}`}>
        <Link href={'#'}>
          <a className="link">See all recipes</a>
        </Link>
      </div>
    </section>
  );
}

export default Meals;
