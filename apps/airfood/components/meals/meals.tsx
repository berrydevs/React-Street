import styles from './meals.module.scss';
import Image from 'next/image';
import MealCard from '../meal-card/meal-card';
import Link from 'next/link';
import List from '../list/list';
/* eslint-disable-next-line */
export interface MealsProps {}
const mealList = [
  'Vegetarian',
  'Vegan',
  'Pescatarian',
  'Gluten-free',
  'Lactose-free',
  'Keto',
  'Paleo',
  'Low FODMAP',
  'Kid-friendly',
];
export function Meals(props: MealsProps) {
  return (
    <section className={styles.sectionMeals}>
      <div className={`container center-text margin-bottom-md`}>
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
          <h3 className="heading-tertiary">Works with any diet</h3>
          <List list={mealList} />
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
