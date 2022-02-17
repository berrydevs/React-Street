import styles from './how-it-works.module.scss';
import Image from 'next/image';
/* eslint-disable-next-line */
export interface HowItWorksProps {}

export function HowItWorks(props: HowItWorksProps) {
  return (
    <section className={styles.sectionHow}>
      <div className="container">
        <span className="subheading">How it works</span>
        <h2 className="heading-secondary">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>

      <div className="container grid grid--2-cols grid--center-v">
        {/* Step 1 */}
        <div className={styles.stepTextBox}>
          <p className={styles.stepNumber}>01</p>
          <h3 className="heading-tertiary">
            Tell us what you like (and what not)
          </h3>

          <p className={styles.stepDescription}>
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
          </p>
        </div>

        <div className={styles.stepImgBox}>
          <Image
            src={'/static/img/app/app-screen-1.png'}
            className="logo"
            alt="iPhone app preferences selection screen"
            width={250}
            height={523}
          />
        </div>

        {/* Step 2 */}
        <div className={styles.stepImgBox}>
          <Image
            src={'/static/img/app/app-screen-2.png'}
            className="logo"
            alt="iPhone app meal approving plan screen"
            width={250}
            height={523}
          />
        </div>

        <div className={styles.stepTextBox}>
          <p className={styles.stepNumber}>02</p>
          <h3 className="heading-tertiary">Approve your weekly meal plan</h3>

          <p className={styles.stepDescription}>
            Once per week, approve the meal plan generated for you by Omnifood
            AI. You can change ingredients, swap entire meals, or even add your
            own recipes.
          </p>
        </div>

        {/* Step 3 */}
        <div className={styles.stepTextBox}>
          <p className={styles.stepNumber}>03</p>
          <h3 className="heading-tertiary">Receive meals at convenient time</h3>

          <p className={styles.stepDescription}>
            Best chefs in town will cook your selected meal every day, and we
            will deliver it to your door whenever works best for you. You can
            change delivery schedule and address daily!
          </p>
        </div>

        <div className={styles.stepImgBox}>
          <Image
            src={'/static/img/app/app-screen-3.png'}
            className="logo"
            alt="iPhone app delivery screen"
            width={250}
            height={523}
          />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
