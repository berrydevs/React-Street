import styles from './meals.module.scss';
import Image from 'next/image';
/* eslint-disable-next-line */
export interface MealsProps {}

export function Meals(props: MealsProps) {
  return (
    <section className={styles.sectionMeals}>
      <div className="container">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div className="container grid grid--3-cols">
        {/* Meal card */}
        <div className={styles.meal}>
          <Image
            src={'/static/img/meals/meal-1.jpg'}
            alt="Japanese Gyozas"
            width={238}
            height={138}
          />

          <span className="tag">Vegetarian</span>
          <p className={styles.mealTitle}>Japanese Gyozas</p>
          <ul className={styles.mealAttributes}>
            <li className={styles.mealAttribute}>
              <ion-icon name="flame-outline"></ion-icon>
              <span>650 calories</span>
            </li>
            <li className={styles.mealAttribute}>
              <ion-icon name="restaurant-outline"></ion-icon>
              <span>NutriScore &reg; 74</span>
            </li>
            <li className={styles.mealAttribute}>
              <ion-icon name="star-outline"></ion-icon>
              <span>4.9 rating (537)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Meals;
